"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";

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
						backgroundColor: '#000000', // Assuming this works for the header background
					}}
				/>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}
