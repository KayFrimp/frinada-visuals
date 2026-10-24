import { Accordion } from "@/components/ui/Accordion";
import type { Faq } from "@/types";

export function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  return <Accordion items={faqs.map((faq) => ({ id: faq.id, title: faq.question, content: faq.answer }))} />;
}
