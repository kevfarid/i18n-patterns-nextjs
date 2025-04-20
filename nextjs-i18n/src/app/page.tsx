'use client';

import { useTranslation } from '@/i18n/use-translation';
import css from './page.module.css';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <div className={css.page}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
