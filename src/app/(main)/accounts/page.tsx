"use client";

import { useAccountsQuery } from "@/hooks/use-accounts-query";
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
  Inactive: "bg-gray-100 text-gray-800",
  Frozen: "bg-red-100 text-red-800",
};

const typeColors = {
  Savings: "bg-blue-100 text-blue-800",
  Checking: "bg-purple-100 text-purple-800",
  "Credit Card": "bg-yellow-100 text-yellow-800",
  Investment: "bg-emerald-100 text-emerald-800",
};

const Accounts = () => {
  const { data: accounts = [], isLoading } = useAccountsQuery();

  if (isLoading) {
    return null; // Next.js will show the loading.tsx
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Accounts</h1>
        <div className="flex gap-4">
          {/* Add any actions/filters here */}
        </div>
      </div>

      <Card>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account Name</TableHead>
                <TableHead>Bank</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Transaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div>{account.accountName}</div>
                      <div className="text-sm text-gray-500">
                        {account.accountNumber}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{account.bankName}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={typeColors[account.type]}
                    >
                      {account.type}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className={
                      account.balance < 0 ? "text-red-600" : "text-green-600"
                    }
                  >
                    {formatCurrency(account.balance)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={statusColors[account.status]}
                    >
                      {account.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-500">
                    {format(new Date(account.lastTransaction), "MMM d, yyyy")}
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

export default Accounts;