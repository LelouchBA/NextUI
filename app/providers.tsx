// @ts-nocheck
"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}


export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
	  <WebAppProvider
		  options={{
			  themeParams: {
				  headerColor: '#000000',  // Warna hitam - Sesuaikan bila perlu
			  },
		  }}
	  >
		  <NextUIProvider navigate={router.push}>
			  <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
		  </NextUIProvider>
	  </WebAppProvider>
  );
}
