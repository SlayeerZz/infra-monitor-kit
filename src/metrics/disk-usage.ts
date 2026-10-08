/**
 * Cálculo y clasificación del uso de disco de un servidor.
 */
export type DiskStatus = 'ok' | 'warning' | 'critical';

export function calculateUsagePercent(usedGb: number, totalGb: number): number {
  if (totalGb <= 0) {
    throw new Error('El tamaño total del disco debe ser mayor que cero');
  }
  return Math.round((usedGb / totalGb) * 100);
}

export function getDiskStatus(usagePercent: number): DiskStatus {
  if (usagePercent >= 90) return 'critical';
  if (usagePercent >= 75) return 'warning';
  return 'ok';
}
