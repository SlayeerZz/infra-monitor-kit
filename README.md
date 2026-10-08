# Infra Monitor Kit

Utilidades TypeScript para validar y monitorear la infraestructura de
servidores de **CloudPulse Services**: validación de puertos y nombres de
host, cálculo del uso de disco, verificación de conectividad y configuración
de acceso al sistema de monitoreo.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecutar las pruebas unitarias

```bash
npm test
```

## Ejecutar las pruebas con cobertura

```bash
npm run test:coverage
```

El reporte HTML queda en `coverage/lcov-report/index.html`.

## Estructura del proyecto

```
src/
  validators/
    port-validator.ts
    hostname-validator.ts
  metrics/
    disk-usage.ts
  utils/
    health-check.ts
    monitor-config.ts
    cli-args.ts
test/
  validators/
    port-validator.test.ts
    hostname-validator.test.ts
```
