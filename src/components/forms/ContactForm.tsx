"use client";

import { useState, useSyncExternalStore } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { StatusMessage } from "@/components/ui/StatusMessage";
import { Badge } from "@/components/ui/Badge";
import { enquiryCategories, inferEnquiryCategory } from "@/data/services";
import { budgetOptions, timelineOptions } from "@/data/pricing";
import {
  getBriefServerSnapshot,
  getBriefSnapshot,
  getPackageServerSnapshot,
  getPackageSnapshot,
  subscribeToBrief,
  subscribeToPackage,
} from "@/lib/brief";
import type { ProjectBrief } from "@/types";
import { formatEnquirySummary } from "@/lib/summary";
import { copyText, downloadText } from "@/lib/transfer";
import { contactSchema, fieldErrors, type ContactValues } from "@/lib/validation";

const emptyValues: ContactValues = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  categoryId: "",
  description: "",
  budget: "",
  timeline: "",
};

const resolver: Resolver<ContactValues> = async (values) => {
  const result = contactSchema.safeParse(values);
  if (result.success) {
    return { values: result.data, errors: {} };
  }

  return {
    values: {},
    errors: Object.fromEntries(
      Object.entries(fieldErrors(result.error)).map(([key, message]) => [key, { type: "validation", message }]),
    ),
  };
};

function subscribeToHydration(): () => void {
  return () => {};
}

function valuesFromBrief(brief: ProjectBrief): ContactValues {
  return {
    fullName: brief.contactName,
    email: brief.email,
    phone: "",
    organisation: brief.organisation,
    categoryId: inferEnquiryCategory(brief.serviceIds),
    description: brief.description,
    budget: brief.budget,
    timeline: brief.timeline,
  };
}

export function ContactForm() {
  const ready = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const brief = useSyncExternalStore(subscribeToBrief, getBriefSnapshot, getBriefServerSnapshot);
  const packageNote = useSyncExternalStore(subscribeToPackage, getPackageSnapshot, getPackageServerSnapshot);
  const hasStudio =
    brief.serviceIds.length > 0 || brief.description.trim().length > 0 || brief.projectName.trim().length > 0;

  return (
    <ContactFormBody
      key={ready ? "ready" : "pending"}
      initial={ready ? valuesFromBrief(brief) : emptyValues}
      serviceIds={ready ? brief.serviceIds : []}
      packageNote={ready ? packageNote : null}
      studioNote={ready && hasStudio}
    />
  );
}

function ContactFormBody({
  initial,
  serviceIds,
  packageNote,
  studioNote,
}: {
  initial: ContactValues;
  serviceIds: string[];
  packageNote: string | null;
  studioNote: boolean;
}) {
  const [prepared, setPrepared] = useState<ContactValues | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactValues>({
    defaultValues: initial,
    resolver,
    mode: "onBlur",
  });

  const summary = prepared ? formatEnquirySummary(prepared, serviceIds) : "";

  async function onCopy() {
    const copied = await copyText(summary);
    setCopyState(copied ? "copied" : "failed");
  }

  if (prepared && isSubmitSuccessful) {
    return (
      <div className="border border-line bg-white p-6 sm:p-8">
        <Badge tone="green">Brief prepared</Badge>
        <h2 className="mt-4 font-heading text-2xl font-bold text-navy">Your project brief is ready.</h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          This demonstration does not send information to a server.
        </p>
        <textarea readOnly value={summary} aria-label="Prepared project summary" className="mt-5 min-h-64 w-full border border-line bg-paper p-3 text-sm leading-relaxed" />
        {copyState === "copied" ? (
          <StatusMessage tone="success" className="mt-3">
            Summary copied to the clipboard on this device.
          </StatusMessage>
        ) : null}
        {copyState === "failed" ? (
          <StatusMessage tone="error" role="alert" className="mt-3">
            Copy was not available. Select the summary and copy it manually.
          </StatusMessage>
        ) : null}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button type="button" onClick={onCopy}>
            Copy summary
          </Button>
          <Button type="button" variant="secondary" onClick={() => downloadText("frinada-project-summary.txt", summary)}>
            Download summary
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setPrepared(null);
              setCopyState("idle");
              reset(emptyValues);
            }}
          >
            Prepare another brief
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="project-form"
      className="scroll-mt-24 border border-line bg-white p-6 sm:p-8"
      noValidate
      onSubmit={handleSubmit((values) => {
        setPrepared(values);
      })}
    >
      <h2 className="font-heading text-2xl font-bold text-navy">Project enquiry</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Required fields are marked. Preparing the brief does not send it anywhere.
      </p>
      {studioNote ? (
        <StatusMessage tone="info" className="mt-4">
          A Frinada Studio brief saved in this browser has been added to the form. It has not been sent.
        </StatusMessage>
      ) : null}
      {packageNote ? (
        <StatusMessage tone="info" className="mt-4">
          You were looking at the {packageNote} scope guide. Describe the work you actually need.
        </StatusMessage>
      ) : null}
      <div className="mt-6 grid gap-5">
        <FormField id="fullName" label="Full name" required error={errors.fullName?.message}>
          <Input id="fullName" autoComplete="name" maxLength={80} error={Boolean(errors.fullName)} {...register("fullName")} />
        </FormField>
        <FormField id="email" label="Email address" required error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" inputMode="email" maxLength={120} error={Boolean(errors.email)} {...register("email")} />
        </FormField>
        <FormField id="phone" label="Phone number" error={errors.phone?.message} hint="Optional.">
          <Input id="phone" type="tel" autoComplete="tel" maxLength={20} error={Boolean(errors.phone)} hint {...register("phone")} />
        </FormField>
        <FormField id="organisation" label="Company or organisation" error={errors.organisation?.message} hint="Optional.">
          <Input id="organisation" autoComplete="organization" maxLength={120} error={Boolean(errors.organisation)} hint {...register("organisation")} />
        </FormField>
        <FormField id="categoryId" label="Service category" required error={errors.categoryId?.message}>
          <Select id="categoryId" error={Boolean(errors.categoryId)} {...register("categoryId")}>
            <option value="">Choose a category</option>
            {enquiryCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField
          id="description"
          label="Project description"
          required
          error={errors.description?.message}
          hint="At least 20 characters, and no more than 2,000."
        >
          <Textarea id="description" maxLength={2000} error={Boolean(errors.description)} hint {...register("description")} />
        </FormField>
        <FormField id="budget" label="Estimated budget" error={errors.budget?.message} hint="Optional. This does not set a price.">
          <Select id="budget" error={Boolean(errors.budget)} hint {...register("budget")}>
            <option value="">No preference yet</option>
            {budgetOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField id="timeline" label="Preferred timeline" error={errors.timeline?.message} hint="Optional.">
          <Select id="timeline" error={Boolean(errors.timeline)} hint {...register("timeline")}>
            <option value="">No preference yet</option>
            {timelineOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormField>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Preparing brief…" : "Prepare project brief"}
      </Button>
    </form>
  );
}
