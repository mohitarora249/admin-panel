import { NextResponse } from 'next/server';

export async function GET() {
  const quickTransferContacts = [
    { id: 1, name: "Livia Bator", role: "CEO", avatar: "/placeholder.svg?height=60&width=60" },
    { id: 2, name: "Randy Press", role: "Director", avatar: "/placeholder.svg?height=60&width=60" },
    { id: 3, name: "Workman", role: "Designer", avatar: "/placeholder.svg?height=60&width=60" },
  ];

  return NextResponse.json(quickTransferContacts);
}
