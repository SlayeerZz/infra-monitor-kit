import { isValidPort, isWellKnownPort } from '../../src/validators/port-validator';

describe('isValidPort', () => {
  it('acepta un puerto común como 8080', () => {
    expect(isValidPort(8080)).toBe(true);
  });

  it('acepta el límite inferior (1)', () => {
    expect(isValidPort(1)).toBe(true);
  });

  it('acepta el límite superior (65535)', () => {
    expect(isValidPort(65535)).toBe(true);
  });

  it('rechaza el puerto 0', () => {
    expect(isValidPort(0)).toBe(false);
  });

  it('rechaza un puerto mayor a 65535', () => {
    expect(isValidPort(70000)).toBe(false);
  });

  it('rechaza un puerto con decimales', () => {
    expect(isValidPort(80.5)).toBe(false);
  });

  it('rechaza un puerto negativo', () => {
    expect(isValidPort(-22)).toBe(false);
  });
});

describe('isWellKnownPort', () => {
  it('reconoce el puerto 22 (SSH) como bien conocido', () => {
    expect(isWellKnownPort(22)).toBe(true);
  });

  it('no considera bien conocido al puerto 8080', () => {
    expect(isWellKnownPort(8080)).toBe(false);
  });

  it('no considera bien conocido a un puerto inválido', () => {
    expect(isWellKnownPort(0)).toBe(false);
  });
});
