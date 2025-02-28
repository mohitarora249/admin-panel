"use client";

import { useCreditCardsQuery } from "@/hooks/use-credit-cards-query";
import { formatCurrency } from "@/lib/currency";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CreditCard } from "lucide-react";

const cardTypeColors = {
  Visa: "bg-blue-100 text-blue-800",
  Mastercard: "bg-orange-100 text-orange-800",
  "American Express": "bg-purple-100 text-purple-800",
  Discover: "bg-red-100 text-red-800",
};

const statusColors = {
  Active: "bg-green-100 text-green-800",
  Blocked: "bg-red-100 text-red-800",
  Expired: "bg-gray-100 text-gray-800",
};

const CreditCards = () => {
  const { data: creditCards = [], isLoading } = useCreditCardsQuery();

  if (isLoading) {
    return null; // Next.js will show the loading.tsx
  }

  const totalCreditLimit = creditCards.reduce((sum, card) => sum + card.creditLimit, 0);
  const totalCurrentBalance = creditCards.reduce((sum, card) => sum + card.currentBalance, 0);
  const totalAvailableCredit = creditCards.reduce((sum, card) => sum + card.availableCredit, 0);

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-full overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Credit Cards</h1>
        <div className="flex gap-4">
          {/* Add actions here */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-500">Total Credit Limit</div>
          <div className="text-2xl font-semibold truncate">{formatCurrency(totalCreditLimit)}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">Total Balance</div>
          <div className="text-2xl font-semibold truncate">{formatCurrency(totalCurrentBalance)}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-500">Available Credit</div>
          <div className="text-2xl font-semibold truncate">{formatCurrency(totalAvailableCredit)}</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {creditCards.map((card) => (
          <Card key={card.id} className="relative">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold truncate">{card.cardName}</h3>
                    <p className="text-sm text-gray-500 truncate">{card.issuer}</p>
                  </div>
                  <Badge variant="secondary" className={`${cardTypeColors[card.cardType]} ml-2 shrink-0`}>
                    {card.cardType}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <CreditCard className="h-5 w-5 shrink-0" />
                  <span className="truncate">{card.cardNumber}</span>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Credit Used</span>
                    <span>{((card.currentBalance / card.creditLimit) * 100).toFixed(0)}%</span>
                  </div>
                  <Progress value={(card.currentBalance / card.creditLimit) * 100} />
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="min-w-0">
                    <div className="text-sm text-gray-500">Current Balance</div>
                    <div className="font-semibold truncate">{formatCurrency(card.currentBalance)}</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-gray-500">Available Credit</div>
                    <div className="font-semibold truncate">{formatCurrency(card.availableCredit)}</div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-gray-500">Due Date</div>
                    <div className="font-semibold truncate">
                      {format(new Date(card.dueDate), "MMM d, yyyy")}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-gray-500">Minimum Payment</div>
                    <div className="font-semibold truncate">{formatCurrency(card.minimumPayment)}</div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-gray-500">Rewards</div>
                    <div className="font-semibold truncate">
                      {card.rewards.type === "Cashback"
                        ? formatCurrency(card.rewards.balance)
                        : `${card.rewards.balance.toLocaleString()} ${card.rewards.type}`}
                    </div>
                  </div>
                  <Badge variant="secondary" className={`${statusColors[card.status]} ml-2 shrink-0`}>
                    {card.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CreditCards;