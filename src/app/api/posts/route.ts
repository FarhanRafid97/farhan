import getPostMetadata from '@/utils/getPosts';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(getPostMetadata());
}
