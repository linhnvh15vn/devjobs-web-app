import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ModeToggle from '@/components/mode-toggle';

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between py-8">
        <Link href="/">
          <Image
            src="/assets/desktop/logo.svg"
            width="115"
            height="32"
            alt="logo"
          />
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
