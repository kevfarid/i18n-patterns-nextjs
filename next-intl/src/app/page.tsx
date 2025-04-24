'use client';

import { useTranslations } from 'next-intl';
import css from './page.module.css';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className={css.page}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
