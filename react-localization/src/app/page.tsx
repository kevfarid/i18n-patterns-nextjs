'use client';

import { strings } from '@/i18n/strings';
import css from './page.module.css';

export default function Home() {
  const { home } = strings;

  return (
    <div className={css.page}>
      <h1>{home.welcome}</h1>
      <p>{home.description}</p>
    </div>
  );
}
