import { NextResponse } from 'next/server';

export async function GET() {
  const recentTransactions = [
    { id: 1, type: "Deposit", source: "from my Card", date: "28 January 2021", amount: -850, icon: "💳" },
    { id: 2, type: "Deposit", source: "Paypal", date: "25 January 2021", amount: 2500, icon: "🅿️" },
    { id: 3, type: "Deposit", source: "Jemi Wilson", date: "21 January 2021", amount: 5400, icon: "🔵" },
  ];

  return NextResponse.json(recentTransactions);
}
