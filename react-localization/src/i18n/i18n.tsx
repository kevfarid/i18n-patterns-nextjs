'use client';
import { ReactNode } from 'react';
import { getDomain, HOST_LOCALE_MAP, strings } from './strings';

export default function I18N({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const host = getDomain();
  const locale = HOST_LOCALE_MAP[host] || 'en';

  strings.setLanguage(locale);

  return <>{children}</>;
}
