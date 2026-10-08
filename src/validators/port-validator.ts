/**
 * Valida números de puerto TCP/UDP usados en reglas de firewall y servicios.
 * Un puerto válido es un número entero entre 1 y 65535.
 */
export function isValidPort(port: number): boolean {
  return Number.isInteger(port) && port >= 1 && port <= 65535;
}

/**
 * Indica si un puerto pertenece al rango de "puertos bien conocidos" (1-1023),
 * que normalmente requieren privilegios elevados para ser utilizados.
 */
export function isWellKnownPort(port: number): boolean {
  return isValidPort(port) && port <= 1023;
}
