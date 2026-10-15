export function readEnv(key: string): string {
  return window.__ENV__?.[key] || import.meta.env[`VITE_${key}`] || '';
}
