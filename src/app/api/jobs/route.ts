import { NextResponse, type NextRequest } from 'next/server';

import data from '@/data.json';

export async function GET(req: NextRequest) {
  return NextResponse.json(data);
}
