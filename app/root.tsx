import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import clsx from "clsx";

import "@/tailwind.css";

import { themeSessionResolver } from "@/sessions.server";

import { PreventFlashOnWrongTheme, Theme, ThemeProvider, useTheme } from "remix-themes";

import QueryClientProvider from "@/components/providers/tanstack-provider";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./components/mode-toggle";
import ButtonNewTask from "./components/button-newtask";
import { getPosition } from "./.server/geo";

// Links for preloading fonts and styles
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Loader to fetch the theme from session storage
export async function loader({ request }: LoaderFunctionArgs) {
  const geo = await getPosition(request)
  const { getTheme } = await themeSessionResolver(request);

  const theme = await getTheme();

  // Set the default theme to "light" if no theme is found in the cookie
  const resolvedTheme = theme === null ? Theme.LIGHT : theme;
  return { theme: resolvedTheme, geo };
}






// Main App component
export function App() {
  const { theme } = useLoaderData<typeof loader>();
  const [currentTheme] = useTheme();

  return (
    <html lang="fr" className={clsx(currentTheme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body>
        <QueryClientProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full flex flex-col min-h-screen ">
              <div className="flex items-center justify-between w-full p-4 bg-background sticky top-0 z-50 border-b border-border">
                <SidebarTrigger />
                <div className="flex items-center gap-4">
                  <ButtonNewTask />
                  <ModeToggle />
                </div>
              </div>
              <Outlet />
            </main>
          </SidebarProvider>
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// App wrapped with ThemeProvider for theme management
export default function AppWithProviders() {
  const { theme } = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}