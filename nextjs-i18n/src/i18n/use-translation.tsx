import getValueByKey from '@/utils/get-value-by-key';
import { use, ReactNode } from 'react';
import { I18nContext } from './i18n-provider';

export const useTranslation = (initialKey?: string) => {
  const context = use(I18nContext);

  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }

  const t = (key: string): ReactNode => {
    const message = getValueByKey(context, key, initialKey) as ReactNode;
    return message;
  };

  return {
    t,
    messages: context,
  };
};
