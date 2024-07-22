import React from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

export default function Search() {
  return (
    <form className="flex h-20 items-center gap-6 bg-white px-4 md:grid md:grid-cols-3">
      <div className="flex items-center gap-4 md:border-r">
        <Image
          src="/assets/desktop/icon-search.svg"
          width={24}
          height={24}
          alt="search"
          className="hidden md:block"
        />
        <Input
          name="q"
          className="flex-1 border-none bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Filter by title, companies, expertise…"
        />
      </div>

      <div className="hidden items-center gap-4 border-r md:flex">
        <Image
          src="/assets/desktop/icon-location.svg"
          width={17}
          height={24}
          alt="search"
        />
        <Input
          name="location"
          className="flex-1 border-none bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-offset-0 md:block"
          placeholder="Filter by location..."
        />
      </div>
      <Image
        src="/assets/mobile/icon-filter.svg"
        width={20}
        height={20}
        alt="filter"
        className="md:hidden"
      />
      <Button type="button" size="icon" className="md:hidden">
        <Image
          src="/assets/desktop/icon-search.svg"
          width={20}
          height={20}
          alt="search"
        />
      </Button>
      <div className="hidden items-center justify-between md:flex">
        <div className="flex items-center gap-4">
          <Checkbox id="fulltime-only" name="contract" value="Full time" />
          <label
            htmlFor="fulltime-only"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Full Time Only
          </label>
        </div>
        <Button type="submit" className="hidden md:block">
          Search
        </Button>
      </div>
    </form>
  );
}
