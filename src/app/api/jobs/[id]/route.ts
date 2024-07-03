import { NextResponse, type NextRequest } from 'next/server';

import data from '@/data.json';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } },
) {
  const job = data.find((d) => d.id === +params.id);

  return NextResponse.json({
    job,
  });
}
