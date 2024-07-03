import React from 'react';

import Image from 'next/image';

import ModeToggle from '@/components/mode-toggle';

interface Props {
  // Add your component props here
}

export default function Header(props: Props) {
  return (
    <header>
      <div className="container flex items-center justify-between py-8">
        <Image
          src="/assets/desktop/logo.svg"
          width="115"
          height="32"
          alt="logo"
        />
        <ModeToggle />
      </div>
    </header>
  );
}
