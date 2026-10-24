import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-semibold tracking-[0.18em] text-red uppercase">404</p>
      <h1 className="mt-3 font-heading text-4xl font-bold text-navy">This page is not on the site.</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        The address may be mistyped. The work lives on Home, Services, Pricing, About, and Contact.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </Container>
  );
}
