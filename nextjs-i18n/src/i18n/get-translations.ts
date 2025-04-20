'server-only';

import getValueByKey from '@/utils/get-value-by-key';
import { headers } from 'next/headers';

const HOST_LOCALE_MAP: Record<string, string> = {
  'localhost:3001': 'es',
  'localhost:3000': 'en',
};

import { join } from 'path';
import { readFileSync } from 'fs';

export async function getTranslations(initialKey?: string) {
  const host = (await headers()).get('host') || 'www.mysite.com';
  const locale = HOST_LOCALE_MAP[host] || 'en';

  const messagesPath =
    join(process.cwd(), 'public', 'strings') + `/${locale}.json`;

  const messagesLoad = readFileSync(messagesPath, 'utf-8');
  const messages = JSON.parse(messagesLoad);

  console.log('messages', messages);

  const t = (key: string) => {
    return getValueByKey(messages, key, initialKey);
  };

  return { messages, locale, t, get: t };
}
