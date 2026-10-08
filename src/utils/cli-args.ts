import minimist from 'minimist';

/**
 * Interpreta los argumentos de línea de comandos del toolkit
 * (por ejemplo: --host web-01 --port 8080).
 */
export function parseArgs(argv: string[]): minimist.ParsedArgs {
  return minimist(argv.slice(2));
}
