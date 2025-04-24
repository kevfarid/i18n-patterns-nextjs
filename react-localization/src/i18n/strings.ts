import LocalizedStrings from 'react-localization';
import { en } from './locales/en';
import { es } from './locales/es';

export const strings = new LocalizedStrings({
  en,
  es,
});

export const HOST_LOCALE_MAP: Record<string, string> = {
  'localhost:3000': 'en',
  'localhost:3001': 'es',
};

export function getDomain() {
  const { hostname, port } = window.location;
  return `${hostname}${port ? `:${port}` : ''}`;
}
