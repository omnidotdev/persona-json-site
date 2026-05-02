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

  const setTheme = (val: Theme) =>
    setThemeServerFn({ data: val }).then(() => router.invalidate());

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
