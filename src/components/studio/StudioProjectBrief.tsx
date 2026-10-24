"use client";

import { useEffect, useRef, useState } from "react";
import { StudioServiceSelector } from "@/components/studio/StudioServiceSelector";
import { StudioProjectSummary } from "@/components/studio/StudioProjectSummary";
import { EstimateReadout } from "@/components/studio/EstimateReadout";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { StatusMessage } from "@/components/ui/StatusMessage";
import { Badge } from "@/components/ui/Badge";
import { wizardSteps } from "@/data/content";
import { budgetOptions, timelineOptions } from "@/data/pricing";
import { useProjectBrief } from "@/hooks/use-project-brief";
import { estimateSelection } from "@/lib/estimate";
import { cn } from "@/lib/cn";
import { fieldErrors, planningSchema, projectDetailsSchema, validateServiceSelection } from "@/lib/validation";

export function StudioProjectBrief() {
  const { brief, update, reset } = useProjectBrief();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectionError, setSelectionError] = useState<string | null>(null);
  const [resetMessage, setResetMessage] = useState(false);
  const estimate = estimateSelection(brief.serviceIds);
  const current = wizardSteps[step];
  const stepStatusRef = useRef<HTMLParagraphElement>(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    stepStatusRef.current?.focus();
  }, [step]);

  useEffect(() => {
    if (!selectionError) {
      return;
    }
    document.getElementById("studio-selection-error")?.focus();
  }, [selectionError]);

  function focusFirst(fields: string[]) {
    const field = fields.find((name) => document.getElementById(`studio-${name}`));
    if (field) {
      document.getElementById(`studio-${field}`)?.focus();
    }
  }

  function validateCurrent(): boolean {
    if (step === 0) {
      const message = validateServiceSelection(brief.serviceIds);
      setSelectionError(message);
      return message === null;
    }

    if (step === 1) {
      const result = projectDetailsSchema.safeParse(brief);
      if (!result.success) {
        const nextErrors = fieldErrors(result.error);
        setErrors(nextErrors);
        focusFirst(Object.keys(nextErrors));
        return false;
      }
      setErrors({});
      return true;
    }

    if (step === 2) {
      const result = planningSchema.safeParse({ budget: brief.budget, timeline: brief.timeline });
      if (!result.success) {
        const nextErrors = fieldErrors(result.error);
        setErrors(nextErrors);
        focusFirst(Object.keys(nextErrors));
        return false;
      }
      setErrors({});
      return true;
    }

    return true;
  }

  function goNext() {
    if (!validateCurrent()) {
      return;
    }
    setStep((value) => Math.min(value + 1, wizardSteps.length - 1));
  }

  function goBack() {
    setErrors({});
    setSelectionError(null);
    setStep((value) => Math.max(value - 1, 0));
  }

  function goTo(index: number) {
    if (index < step) {
      setErrors({});
      setSelectionError(null);
      setStep(index);
    }
  }

  function startAgain() {
    reset();
    setStep(0);
    setErrors({});
    setSelectionError(null);
    setResetMessage(true);
  }

  return (
    <div className="overflow-hidden rounded-panel border border-line/80 bg-white shadow-rest">
      <div className="flex flex-col gap-3 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Interactive product preview</Badge>
            <Badge tone="mist">Concept experience</Badge>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            This demonstration does not create an account, save a project remotely, approve a quotation, send a message, or take payment.
          </p>
        </div>
      </div>
      <div className="grid gap-8 px-5 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="min-w-0">
          <div
            role="progressbar"
            aria-label="Project brief progress"
            aria-valuemin={1}
            aria-valuemax={wizardSteps.length}
            aria-valuenow={step + 1}
            aria-valuetext={`Step ${step + 1} of ${wizardSteps.length}: ${current.label}`}
          >
            <p ref={stepStatusRef} tabIndex={-1} className="text-sm font-semibold text-navy">
              Step {step + 1} of {wizardSteps.length}: {current.label}
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
              <div className="h-full rounded-full bg-navy transition-[width] duration-300 ease-out-soft motion-reduce:transition-none" style={{ width: `${((step + 1) / wizardSteps.length) * 100}%` }} />
            </div>
          </div>
          <div className="relative mt-4 rounded-panel bg-mist p-1.5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1.5 bottom-1.5 left-1.5 hidden rounded-control bg-white shadow-rest transition-transform duration-300 ease-out-soft motion-reduce:transition-none sm:block"
              style={{ width: "calc((100% - 0.75rem) / 4)", transform: `translateX(${step * 100}%)` }}
            />
          <ol className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {wizardSteps.map((item, index) => {
              const complete = index < step;
              const currentStep = index === step;
              const cell = "relative z-10 flex min-h-11 w-full flex-col items-start rounded-control px-3 py-2 text-left";
              return (
                <li key={item.id}>
                  {complete ? (
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      className={`${cell} transition-colors duration-150 ease-out-soft hover:bg-white/70 motion-reduce:transition-none`}
                    >
                      <span className="text-xs font-semibold text-red">{item.label}</span>
                      <span className="text-xs text-muted">{item.hint}</span>
                    </button>
                  ) : (
                    <div className={cn(cell, currentStep && "bg-white shadow-rest sm:bg-transparent sm:shadow-none")} aria-current={currentStep ? "step" : undefined}>
                      <span className="text-xs font-semibold text-navy">{item.label}</span>
                      <span className="text-xs text-muted">{item.hint}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
          </div>

          {resetMessage ? (
            <StatusMessage tone="info" className="mt-4">
              The brief has been cleared in this browser.
            </StatusMessage>
          ) : null}

          <div key={step} className="step-panel mt-6">
            {step === 0 ? (
              <StudioServiceSelector
                selectedIds={brief.serviceIds}
                error={selectionError}
                onChange={(serviceIds) => {
                  setResetMessage(false);
                  setSelectionError(null);
                  update({ serviceIds });
                }}
              />
            ) : null}
            {step === 1 ? <DetailsStep brief={brief} errors={errors} onChange={(patch) => { setResetMessage(false); update(patch); }} /> : null}
            {step === 2 ? <PlanStep brief={brief} errors={errors} onChange={(patch) => { setResetMessage(false); update(patch); }} /> : null}
            {step === 3 ? <StudioProjectSummary brief={brief} estimate={estimate} onReset={startAgain} /> : null}
          </div>

          {step < 3 ? (
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <Button type="button" variant="secondary" onClick={goBack} disabled={step === 0}>
                Back
              </Button>
              <Button type="button" onClick={goNext}>
                {step === 2 ? "Review summary" : "Next"}
              </Button>
            </div>
          ) : null}
        </div>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <EstimateReadout estimate={estimate} />
        </div>
      </div>
    </div>
  );
}

function DetailsStep({
  brief,
  errors,
  onChange,
}: {
  brief: ReturnType<typeof useProjectBrief>["brief"];
  errors: Record<string, string>;
  onChange: (patch: Partial<typeof brief>) => void;
}) {
  return (
    <div className="grid gap-5">
      <FormField id="studio-contactName" label="Your name" required error={errors.contactName}>
        <Input
          id="studio-contactName"
          autoComplete="name"
          maxLength={80}
          value={brief.contactName}
          error={Boolean(errors.contactName)}
          onChange={(event) => onChange({ contactName: event.target.value })}
        />
      </FormField>
      <FormField id="studio-email" label="Email address" required error={errors.email} hint="Used only in the summary on this device.">
        <Input
          id="studio-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          maxLength={120}
          value={brief.email}
          error={Boolean(errors.email)}
          hint
          onChange={(event) => onChange({ email: event.target.value })}
        />
      </FormField>
      <FormField id="studio-organisation" label="Company or organisation" error={errors.organisation} hint="Optional.">
        <Input
          id="studio-organisation"
          autoComplete="organization"
          maxLength={120}
          value={brief.organisation}
          error={Boolean(errors.organisation)}
          hint
          onChange={(event) => onChange({ organisation: event.target.value })}
        />
      </FormField>
      <FormField id="studio-projectName" label="Project name" required error={errors.projectName}>
        <Input
          id="studio-projectName"
          maxLength={100}
          value={brief.projectName}
          error={Boolean(errors.projectName)}
          onChange={(event) => onChange({ projectName: event.target.value })}
        />
      </FormField>
      <FormField id="studio-description" label="Project description" required error={errors.description} hint={`${brief.description.length} / 2,000 characters. At least 20.`}>
        <Textarea
          id="studio-description"
          maxLength={2000}
          value={brief.description}
          error={Boolean(errors.description)}
          hint
          onChange={(event) => onChange({ description: event.target.value })}
        />
      </FormField>
    </div>
  );
}

function PlanStep({
  brief,
  errors,
  onChange,
}: {
  brief: ReturnType<typeof useProjectBrief>["brief"];
  errors: Record<string, string>;
  onChange: (patch: Partial<typeof brief>) => void;
}) {
  return (
    <div className="grid gap-5">
      <p className="text-sm leading-relaxed text-muted">
        These are preferences, not a price. Choosing a range does not reserve budget or set a quotation.
      </p>
      <FormField id="studio-budget" label="Budget preference" required error={errors.budget}>
        <Select id="studio-budget" value={brief.budget} error={Boolean(errors.budget)} onChange={(event) => onChange({ budget: event.target.value })}>
          <option value="">Choose a preference</option>
          {budgetOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormField>
      <FormField id="studio-timeline" label="Timeline preference" required error={errors.timeline}>
        <Select id="studio-timeline" value={brief.timeline} error={Boolean(errors.timeline)} onChange={(event) => onChange({ timeline: event.target.value })}>
          <option value="">Choose a preference</option>
          {timelineOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormField>
    </div>
  );
}
