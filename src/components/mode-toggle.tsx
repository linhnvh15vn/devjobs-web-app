'use client';

import React from 'react';

import Image from 'next/image';
import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className="flex items-center gap-4">
      <Image
        src="/assets/desktop/icon-sun.svg"
        width={20}
        height={19}
        alt="theme"
      />
      <Switch
        defaultChecked={theme === 'dark'}
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
      />
      <Image
        src="/assets/desktop/icon-moon.svg"
        width={12}
        height={12}
        alt="theme"
      />
    </div>
  );
}
