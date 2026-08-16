import { useRouter } from "@tanstack/react-router";
import { createContext } from "react";

import { setThemeServerFn } from "@/server/functions/theme";

import type { PropsWithChildren } from "react";
import type { Theme } from "@/server/functions/theme";

interface ThemeContext {
  theme: Theme;
  setTheme: (val: Theme) => void;
}

const ThemeContext = createContext<ThemeContext | null>(null);

/**
 * Global theme provider.
 */
const ThemeProvider = ({
  children,
  theme,
}: PropsWithChildren<{ theme: Theme }>) => {
  const router = useRouter();

  const setTheme = (val: Theme) => {
    // Apply to the DOM synchronously so the theme flips immediately, rather than
    // waiting on the server round-trip; then persist the cookie and invalidate
    // so SSR stays in sync on the next load
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(val);

    setThemeServerFn({ data: val }).then(() => router.invalidate());
  };

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
