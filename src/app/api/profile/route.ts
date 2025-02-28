import { NextResponse } from 'next/server';
import type { UserProfileData } from '@/types/api';

export async function GET() {
  const profile: UserProfileData = {
    name: "John Doe",
    email: "john@example.com",
    avatar: `https://avatar.vercel.sh/John Doe`,
  };

  return NextResponse.json(profile);
}

export async function PUT(request: Request) {
  const data = await request.json();
  // In a real app, you would update the database here
  return NextResponse.json(data);
} 