import { NextResponse } from 'next/server';
import type { CreditCardData } from '@/types/api';

export async function GET() {
  const creditCards: CreditCardData[] = [
    {
      id: "cc_1",
      cardName: "Premium Rewards Card",
      cardNumber: "**** **** **** 4567",
      cardType: "Visa",
      cardHolder: "John Doe",
      expiryDate: "12/25",
      cvv: "***",
      creditLimit: 10000.00,
      currentBalance: 2540.50,
      availableCredit: 7459.50,
      dueDate: "2024-04-15T00:00:00Z",
      minimumPayment: 35.00,
      apr: 15.99,
      status: "Active",
      issuer: "Chase",
      rewards: {
        type: "Points",
        balance: 25400,
        rate: 2 // 2 points per dollar
      }
    },
    {
      id: "cc_2",
      cardName: "Cash Back Plus",
      cardNumber: "**** **** **** 7890",
      cardType: "Mastercard",
      cardHolder: "John Doe",
      expiryDate: "09/26",
      cvv: "***",
      creditLimit: 8000.00,
      currentBalance: 1200.75,
      availableCredit: 6799.25,
      dueDate: "2024-04-20T00:00:00Z",
      minimumPayment: 25.00,
      apr: 14.99,
      status: "Active",
      issuer: "Capital One",
      rewards: {
        type: "Cashback",
        balance: 125.50,
        rate: 1.5 // 1.5% cashback
      }
    },
    {
      id: "cc_3",
      cardName: "Travel Elite",
      cardNumber: "**** **** **** 3456",
      cardType: "American Express",
      cardHolder: "John Doe",
      expiryDate: "03/25",
      cvv: "****",
      creditLimit: 15000.00,
      currentBalance: 4500.25,
      availableCredit: 10499.75,
      dueDate: "2024-04-10T00:00:00Z",
      minimumPayment: 65.00,
      apr: 17.99,
      status: "Active",
      issuer: "American Express",
      rewards: {
        type: "Miles",
        balance: 50000,
        rate: 3 // 3 miles per dollar
      }
    },
    {
      id: "cc_4",
      cardName: "Student Rewards",
      cardNumber: "**** **** **** 2345",
      cardType: "Discover",
      cardHolder: "John Doe",
      expiryDate: "08/24",
      cvv: "***",
      creditLimit: 2000.00,
      currentBalance: 450.25,
      availableCredit: 1549.75,
      dueDate: "2024-04-05T00:00:00Z",
      minimumPayment: 20.00,
      apr: 19.99,
      status: "Active",
      issuer: "Discover",
      rewards: {
        type: "Cashback",
        balance: 45.25,
        rate: 2 // 2% cashback
      }
    }
  ];

  return NextResponse.json(creditCards);
} 