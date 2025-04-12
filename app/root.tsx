import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import clsx from "clsx";

import "@/tailwind.css";

import { themeSessionResolver } from "@/sessions.server";

import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";

import QueryClientProvider from "@/components/providers/tanstack-provider";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// Loader to fetch the theme from session storage
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return { theme: getTheme() };
}

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

// App wrapped with ThemeProvider for theme management
export default function AppWithProviders() {
  const { theme } = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

// Layout component for consistent structure
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col min-h-screen">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </QueryClientProvider>
  );
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
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
