import React from 'react';

import Search from '@/components/search';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="container space-y-14">
      <Search />
      {children}
    </div>
  );
}
