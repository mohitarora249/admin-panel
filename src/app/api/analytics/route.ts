import { NextResponse } from 'next/server';

export async function GET() {
  const weeklyActivityData = [
    { name: "Sat", Withdraw: 450, Deposit: 230 },
    { name: "Sun", Withdraw: 350, Deposit: 120 },
    { name: "Mon", Withdraw: 320, Deposit: 250 },
    { name: "Tue", Withdraw: 450, Deposit: 370 },
    { name: "Wed", Withdraw: 150, Deposit: 230 },
    { name: "Thu", Withdraw: 380, Deposit: 230 },
    { name: "Fri", Withdraw: 380, Deposit: 320 },
  ];

  return NextResponse.json(weeklyActivityData);
}
