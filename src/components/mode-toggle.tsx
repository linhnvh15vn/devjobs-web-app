import React from 'react';

import Image from 'next/image';

import { Switch } from '@/components/ui/switch';

interface Props {
  // Add your component props here
}

export default function ModeToggle(props: Props) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/assets/desktop/icon-sun.svg"
        width={20}
        height={19}
        alt="theme"
      />
      <Switch />
      <Image
        src="/assets/desktop/icon-moon.svg"
        width={12}
        height={12}
        alt="theme"
      />
    </div>
  );
}
