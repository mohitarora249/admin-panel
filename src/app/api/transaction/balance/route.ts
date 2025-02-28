import { NextResponse } from 'next/server';

export async function GET() {
  const balanceHistoryData = [
    { name: "Jul", balance: 150 },
    { name: "Aug", balance: 300 },
    { name: "Sep", balance: 250 },
    { name: "Oct", balance: 450 },
    { name: "Nov", balance: 780 },
    { name: "Dec", balance: 250 },
    { name: "Jan", balance: 580 },
  ];

  return NextResponse.json(balanceHistoryData);
}
