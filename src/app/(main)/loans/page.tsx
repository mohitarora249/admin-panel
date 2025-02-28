"use client";

import { useLoansQuery } from "@/hooks/use-loans-query";
import { formatCurrency } from "@/lib/currency";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";


const statusColors = {
  Active: "bg-green-100 text-green-800",
  Paid: "bg-blue-100 text-blue-800",
  Defaulted: "bg-red-100 text-red-800",
  Processing: "bg-yellow-100 text-yellow-800",
};

const typeColors = {
  Personal: "bg-purple-100 text-purple-800",
  Home: "bg-blue-100 text-blue-800",
  Auto: "bg-emerald-100 text-emerald-800",
  Education: "bg-yellow-100 text-yellow-800",
  Business: "bg-gray-100 text-gray-800",
};

const Loans = () => {
  const { data: loans = [], isLoading } = useLoansQuery();

  if (isLoading) {
    return null; // Next.js will show the loading.tsx
  }

  const totalLoanAmount = loans.reduce((sum, loan) => sum + loan.amount, 0);
  const totalRemainingAmount = loans.reduce((sum, loan) => sum + loan.remainingAmount, 0);
  const activeLoans = loans.filter(loan => loan.status === "Active").length;
  const upcomingPayments = loans.reduce((sum, loan) => 
    loan.status === "Active" ? sum + loan.nextPayment.amount : sum, 0
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Loans</h1>
        <div className="flex gap-4">
          {/* Add actions here */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-500">Total Loan Amount</div>
          <div className="text-2xl font-semibold">{formatCurrency(totalLoanAmount)}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">Remaining Balance</div>
          <div className="text-2xl font-semibold">{formatCurrency(totalRemainingAmount)}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">Active Loans</div>
          <div className="text-2xl font-semibold">{activeLoans}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">Upcoming Payments</div>
          <div className="text-2xl font-semibold">{formatCurrency(upcomingPayments)}</div>
        </Card>
      </div>

      <Card>
          <div className="p-1">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Loan Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Remaining</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Next Payment</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loans.map((loan) => (
                  <TableRow key={loan.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div>{loan.loanName}</div>
                        <div className="text-sm text-gray-500">{loan.lender}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={typeColors[loan.type]}>
                        {loan.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatCurrency(loan.amount)}</TableCell>
                    <TableCell>{formatCurrency(loan.remainingAmount)}</TableCell>
                    <TableCell>{loan.interestRate}%</TableCell>
                    <TableCell>
                      {loan.status === "Active" ? formatCurrency(loan.nextPayment.amount) : "-"}
                    </TableCell>
                    <TableCell>
                      {loan.status === "Active" 
                        ? format(new Date(loan.nextPayment.dueDate), "MMM d, yyyy")
                        : "-"
                      }
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={statusColors[loan.status]}>
                        {loan.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
      </Card>
    </div>
  );
};

export default Loans;