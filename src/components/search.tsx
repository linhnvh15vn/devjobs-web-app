import React from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Props {
  // Add your component props here
}

export default function Search(props: Props) {
  return (
    <div className="flex h-20 items-center gap-6 bg-white px-4">
      <Input className="flex-1 border-none bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-offset-0" />
      <Image
        src="/assets/mobile/icon-filter.svg"
        width={20}
        height={20}
        alt="filter"
      />
      <Button type="button" size="icon">
        <Image
          src="/assets/desktop/icon-search.svg"
          width={24}
          height={24}
          alt="search"
        />
      </Button>
    </div>
  );
}
