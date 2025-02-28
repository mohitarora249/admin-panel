import { NextResponse } from 'next/server';

export async function GET() {
  const expenseData = [
    { name: "Entertainment", value: 30, color: "#3b4680" },
    { name: "Bill Expense", value: 15, color: "#e67e22" },
    { name: "Others", value: 35, color: "#2c2c2c" },
    { name: "Investment", value: 20, color: "#4a6ff3" },
  ];

  return NextResponse.json(expenseData);
}
