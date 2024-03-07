"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WebAppProvider, WebAppProviderProps } from "@vkruglikov/react-telegram-web-app";



export function Providers({ children, options, }: WebAppProviderProps) {
  const router = useRouter();

	return (
		<WebAppProvider
			options={{
				smoothButtonsTransition: true
			}}
		>
		{children}
	  </WebAppProvider>
	);
}
