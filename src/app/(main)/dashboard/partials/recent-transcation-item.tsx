"use client"
import React from "react";

type Props =  {
  id: number;
  icon: React.ReactNode;
  type: string;
  source: string;
  date: string;
  amount: number;
}

const RecentTransactionItem = ({ id, icon, type, source, date, amount }: Props) => {
  return (
    <div key={id} className="flex items-center justify-between py-2 border-b last:border-none">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div>
          <p className="font-medium text-gray-800">
            {type} {source}
          </p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <p className={`font-medium ${amount < 0 ? "text-red-500" : "text-green-500"}`}>
        {amount < 0 ? `-$${Math.abs(amount)}` : `+$${amount}`}
      </p>
    </div>
  );
};

export default RecentTransactionItem;
