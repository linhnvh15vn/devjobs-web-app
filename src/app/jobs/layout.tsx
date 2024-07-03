import React from 'react';

import Search from '@/components/search';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="space-y-14">{children}</div>;
}
