"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected={theme === "dark"} // Set to true if the dark theme is active
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onChange={(isSelected) => {
        const newTheme = isSelected ? "dark" : "light";
        setTheme(newTheme);
      }}
    >
      Dark mode
    </Switch>
  );
}
