import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

const HOST_LOCALE_MAP: Record<string, string> = {
  'localhost:3001': 'es',
  'localhost:3000': 'en',
};

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const host = (await headers()).get('host') || 'localhost:3000';
  const locale = HOST_LOCALE_MAP[host] || 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
