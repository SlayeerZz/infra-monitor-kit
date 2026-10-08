import { isValidHostname } from '../../src/validators/hostname-validator';

describe('isValidHostname', () => {
  it('acepta un nombre simple con guion y número', () => {
    expect(isValidHostname('web-01')).toBe(true);
  });

  it('acepta un nombre con varias etiquetas separadas por punto', () => {
    expect(isValidHostname('db.internal.local')).toBe(true);
  });

  it('rechaza un nombre con mayúsculas', () => {
    expect(isValidHostname('Web-01')).toBe(false);
  });

  it('rechaza un nombre con espacios', () => {
    expect(isValidHostname('web 01')).toBe(false);
  });

  it('rechaza un nombre vacío', () => {
    expect(isValidHostname('')).toBe(false);
  });

  it('rechaza un nombre que comienza con guion', () => {
    // RFC 1123: una etiqueta no puede comenzar con guion.
    expect(isValidHostname('-web01')).toBe(false);
  });

  it('rechaza un nombre que termina con guion', () => {
    // RFC 1123: una etiqueta no puede terminar con guion.
    expect(isValidHostname('web01-')).toBe(false);
  });
});
