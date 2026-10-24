/**
 * Formats an integer pesewa amount as Ghana cedis.
 * 100 pesewas = 1 cedi. Formatting uses integer arithmetic so
 * totals are not affected by binary floating-point error.
 */
export function formatGhsFromPesewas(pesewas: number): string {
  if (!Number.isInteger(pesewas)) {
    throw new Error("Currency amounts must be integer pesewas.");
  }

  const negative = pesewas < 0;
  const absolute = Math.abs(pesewas);
  const cedis = Math.floor(absolute / 100);
  const minor = absolute % 100;
  const grouped = cedis.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `${negative ? "-" : ""}GHS ${grouped}.${minor.toString().padStart(2, "0")}`;
}

export function formatSamplePrice(pesewas: number | null): string {
  if (pesewas === null || pesewas < 0) {
    return "Custom quote required";
  }

  return formatGhsFromPesewas(pesewas);
}
