// @ts-nocheck
"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WebAppProvider, MainButton } from '@vkruglikov/react-telegram-web-app';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}


export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <WebAppProvider
          options={{
            themeParams: {
              headerColor: '#000000',  // Warna hitam - Sesuaikan bila perlu
            },
          }}
        >
          {children}
        </WebAppProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
