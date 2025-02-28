import { NextResponse } from 'next/server';
import type { AccountData } from '@/types/api';

export async function GET() {
  const accounts: AccountData[] = [
    {
      id: "acc_1",
      accountName: "Primary Checking",
      accountNumber: "****4567",
      bankName: "Chase Bank",
      balance: 5750.75,
      currency: "USD",
      type: "Checking",
      status: "Active",
      lastTransaction: "2024-03-15T10:30:00Z"
    },
    {
      id: "acc_2",
      accountName: "High Yield Savings",
      accountNumber: "****8901",
      bankName: "Ally Bank",
      balance: 12450.00,
      currency: "USD",
      type: "Savings",
      status: "Active",
      lastTransaction: "2024-03-14T15:45:00Z"
    },
    {
      id: "acc_3",
      accountName: "Travel Rewards Card",
      accountNumber: "****2345",
      bankName: "American Express",
      balance: -1250.50,
      currency: "USD",
      type: "Credit Card",
      status: "Active",
      lastTransaction: "2024-03-13T09:20:00Z"
    },
    {
      id: "acc_4",
      accountName: "Investment Portfolio",
      accountNumber: "****7890",
      bankName: "Fidelity",
      balance: 45670.25,
      currency: "USD",
      type: "Investment",
      status: "Active",
      lastTransaction: "2024-03-12T16:15:00Z"
    },
    {
      id: "acc_5",
      accountName: "Joint Savings",
      accountNumber: "****3456",
      bankName: "Wells Fargo",
      balance: 8900.00,
      currency: "USD",
      type: "Savings",
      status: "Active",
      lastTransaction: "2024-03-11T11:10:00Z"
    }
  ];

  return NextResponse.json(accounts);
} 