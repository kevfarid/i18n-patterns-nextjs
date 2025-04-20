/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createContext } from 'react';

type Messages = Record<string, any>;

export const I18nContext = createContext<Messages>({});

export const I18nProvider = ({
  children,
  messages,
}: Readonly<{
  children: React.ReactNode;
  messages: Messages;
}>) => {
  return (
    <I18nContext.Provider value={messages}>{children}</I18nContext.Provider>
  );
};
