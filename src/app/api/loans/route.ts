import { NextResponse } from 'next/server';
import type { LoanData } from '@/types/api';

export async function GET() {
  const loans: LoanData[] = [
    {
      id: "loan_1",
      loanName: "Home Mortgage",
      type: "Home",
      amount: 350000.00,
      remainingAmount: 315000.00,
      interestRate: 4.5,
      startDate: "2023-01-15T00:00:00Z",
      endDate: "2053-01-15T00:00:00Z",
      status: "Active",
      nextPayment: {
        amount: 1850.00,
        dueDate: "2024-04-15T00:00:00Z"
      },
      lender: "Chase Bank"
    },
    {
      id: "loan_2",
      loanName: "Car Loan",
      type: "Auto",
      amount: 35000.00,
      remainingAmount: 28000.00,
      interestRate: 3.9,
      startDate: "2023-06-01T00:00:00Z",
      endDate: "2028-06-01T00:00:00Z",
      status: "Active",
      nextPayment: {
        amount: 650.00,
        dueDate: "2024-04-01T00:00:00Z"
      },
      lender: "Toyota Financial"
    },
    {
      id: "loan_3",
      loanName: "Student Loan",
      type: "Education",
      amount: 50000.00,
      remainingAmount: 42000.00,
      interestRate: 5.2,
      startDate: "2022-09-01T00:00:00Z",
      endDate: "2032-09-01T00:00:00Z",
      status: "Active",
      nextPayment: {
        amount: 525.00,
        dueDate: "2024-04-05T00:00:00Z"
      },
      lender: "Sallie Mae"
    },
    {
      id: "loan_4",
      loanName: "Business Expansion",
      type: "Business",
      amount: 100000.00,
      remainingAmount: 95000.00,
      interestRate: 6.5,
      startDate: "2024-01-01T00:00:00Z",
      endDate: "2029-01-01T00:00:00Z",
      status: "Active",
      nextPayment: {
        amount: 1950.00,
        dueDate: "2024-04-01T00:00:00Z"
      },
      lender: "Wells Fargo"
    },
    {
      id: "loan_5",
      loanName: "Personal Loan",
      type: "Personal",
      amount: 15000.00,
      remainingAmount: 0,
      interestRate: 8.9,
      startDate: "2022-03-15T00:00:00Z",
      endDate: "2024-03-15T00:00:00Z",
      status: "Paid",
      nextPayment: {
        amount: 0,
        dueDate: "2024-03-15T00:00:00Z"
      },
      lender: "Discover"
    }
  ];

  return NextResponse.json(loans);
} 