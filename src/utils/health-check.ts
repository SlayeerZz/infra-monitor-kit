import { exec } from 'child_process';

/**
 * Verifica la conectividad hacia un servidor mediante ping.
 *
 * NOTA PARA EL ANÁLISIS DE SEGURIDAD: el parámetro "host" se concatena
 * directamente dentro de un comando de shell. Un análisis estático (SAST)
 * debiera marcar esto como una vulnerabilidad de inyección de comandos
 * (OS Command Injection), porque un valor como "10.0.0.1; rm -rf /" se
 * ejecutaría como un segundo comando.
 */
export function pingServer(host: string): void {
  exec(`ping -c 1 ${host}`, (error, stdout) => {
    if (error) {
      console.error(`El servidor ${host} no responde: ${error.message}`);
      return;
    }
    console.log(stdout);
  });
}
