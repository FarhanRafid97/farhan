import { getTop3Posts } from '@/utils/getPosts';
import { NextResponse } from 'next/server';

export async function GET() {
  const response = getTop3Posts();

  const jsonResponse = {
    status: 'success',
    response,
  };
  return NextResponse.json(jsonResponse);
}
