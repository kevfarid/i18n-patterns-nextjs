'use server';

import { getTranslations } from './get-translations';
import { I18nProvider } from './i18n-provider';

export default async function I18nWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { messages } = await getTranslations();

  return <I18nProvider messages={messages}>{children}</I18nProvider>;
}
