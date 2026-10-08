/**
 * Valida nombres de host (por ejemplo "web-01" o "db.internal.local").
 * Reglas esperadas (RFC 1123):
 *  - Solo letras minúsculas, números y guiones.
 *  - Cada etiqueta (parte separada por puntos) mide entre 1 y 63 caracteres.
 *  - Una etiqueta NO puede comenzar ni terminar con guion.
 */
export function isValidHostname(hostname: string): boolean {
  const regex = /^[a-z0-9-]{1,63}(\.[a-z0-9-]{1,63})*$/;
  return regex.test(hostname);
}
