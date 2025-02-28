import { NextResponse } from 'next/server';
import type { UserProfileData } from '@/types/api';

export async function GET() {
  const profile: UserProfileData = {
    name: "John Doe",
    email: "john@example.com",
    avatar: `https://avatar.vercel.sh/John Doe`,
    username: "john_doe",
    password: "password",
    dateOfBirth: new Date("1990-01-01"),
    presentAddress: "123 Main St, Anytown, USA",
    permanentAddress: "123 Main St, Anytown, USA",
    city: "Anytown",
    postalCode: "12345",
    country: "USA"
  };

  return NextResponse.json(profile);
}

export async function PUT(request: Request) {
  const data = await request.json();
  // In a real app, you would update the database here
  return NextResponse.json(data);
} 