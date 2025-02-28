"use client";

import { useInvestmentsQuery } from "@/hooks/use-investments-query";
import { formatCurrency } from "@/lib/currency";
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
import { TrendingDown, TrendingUp } from "lucide-react";

const typeColors = {
  Stock: "bg-blue-100 text-blue-800",
  ETF: "bg-purple-100 text-purple-800",
  "Mutual Fund": "bg-yellow-100 text-yellow-800",
  Crypto: "bg-emerald-100 text-emerald-800",
  Bond: "bg-gray-100 text-gray-800",
};

const Investments = () => {
  const { data: investments = [], isLoading } = useInvestmentsQuery();

  if (isLoading) {
    return null; // Next.js will show the loading.tsx
  }

  const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);
  const totalGain = investments.reduce(
    (sum, inv) => sum + (inv.currentPrice - inv.purchasePrice) * inv.shares,
    0
  );
  const averagePerformance =
    investments.reduce((sum, inv) => sum + inv.performance, 0) /
    investments.length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Investments</h1>
        <div className="flex gap-4">
          {/* Add actions here */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-500">Total Value</div>
          <div className="text-2xl font-semibold">{formatCurrency(totalValue)}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">Total Gain/Loss</div>
          <div className={`text-2xl font-semibold flex items-center gap-2 ${
            totalGain >= 0 ? "text-green-600" : "text-red-600"
          }`}>
            {formatCurrency(Math.abs(totalGain))}
            {totalGain >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">Average Performance</div>
          <div className={`text-2xl font-semibold ${
            averagePerformance >= 0 ? "text-green-600" : "text-red-600"
          }`}>
            {averagePerformance.toFixed(2)}%
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">Total Investments</div>
          <div className="text-2xl font-semibold">{investments.length}</div>
        </Card>
      </div>

      <Card>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Shares</TableHead>
                <TableHead>Purchase Price</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investments.map((investment) => (
                <TableRow key={investment.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div>{investment.name}</div>
                      <div className="text-sm text-gray-500">
                        {investment.symbol}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={typeColors[investment.type]}
                    >
                      {investment.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{investment.shares}</TableCell>
                  <TableCell>{formatCurrency(investment.purchasePrice)}</TableCell>
                  <TableCell>{formatCurrency(investment.currentPrice)}</TableCell>
                  <TableCell>{formatCurrency(investment.value)}</TableCell>
                  <TableCell>
                    <span
                      className={`flex items-center gap-1 ${
                        investment.performance >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {investment.performance >= 0 ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}
                      {investment.performance.toFixed(2)}%
                    </span>
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

export default Investments;