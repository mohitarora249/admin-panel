import { NextResponse } from 'next/server';
import type { NotificationData } from '@/types/api';

export async function GET() {
  const notifications: NotificationData[] = [
    { id: 1, title: "New Transaction Alert", message: "A transaction of $1,250.00 was made on Card •••• 5678 at Amazon." },
    { id: 2, title: "Fraud Alert", message: "Suspicious activity detected on account #123456789. Review the transaction history now." },
    { id: 3, title: "Card Issued", message: "A new virtual card ending in 3421 has been successfully issued to John Doe." },
    { id: 4, title: "Chargeback Initiated", message: "A chargeback of $250.00 has been initiated on transaction TXN12345." },
    { id: 5, title: "Recurring Payment Processed", message: "Subscription payment of $49.99 for Netflix has been successfully processed." },
    { id: 6, title: "Low Balance Warning", message: "Account #987654321 balance has dropped below $100.00. Consider adding funds." },
    { id: 7, title: "Payment Approved", message: "Payment of $5,000.00 to Acme Corp has been approved by the admin." },
    { id: 8, title: "Security Alert", message: "Multiple failed login attempts detected on Admin Dashboard. Reset password if this wasn't you." },
    { id: 9, title: "Card Blocked", message: "Card ending in 7890 has been temporarily blocked due to unusual spending patterns." },
    { id: 10, title: "Monthly Statement Ready", message: "Your January 2025 bank statement is now available for download." }
  ];

  return NextResponse.json(notifications);
} 