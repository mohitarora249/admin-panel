import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/currency";
import { CreditCard } from "lucide-react";

type Props = {
    theme?: "dark" | "light";
    balance: number;
    holder: string;
    expiry: string;
    cardNumber: string;
}

const BankCard = ({ theme = "dark", balance, holder, expiry, cardNumber }: Props) => {
    const isDark = theme === "dark";
    return (
      <Card className={`w-full ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-xl overflow-hidden`}>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className={`text-sm ${isDark ? 'opacity-80' : 'text-gray-500'}`}>Balance</p>
              <p className="text-2xl font-bold">{formatCurrency(balance)}</p>
            </div>
            <CreditCard className={`h-8 w-8 ${isDark ? '' : 'text-gray-700'}`} />
          </div>
          <div className="flex justify-between text-sm mb-6">
            <div>
              <p className={`${isDark ? 'opacity-80' : 'text-gray-500'}`}>CARD HOLDER</p>
              <p>{holder}</p>
            </div>
            <div className="text-right">
              <p className={`${isDark ? 'opacity-80' : 'text-gray-500'}`}>VALID THRU</p>
              <p>{expiry}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg">{cardNumber}</p>
            <div className="flex">
              <div className={`h-6 w-6 rounded-full ${isDark ? 'bg-gray-400' : 'bg-gray-300'} opacity-70 -mr-2`}></div>
              <div className={`h-6 w-6 rounded-full ${isDark ? 'bg-gray-300' : 'bg-gray-200'} opacity-70`}></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  export default BankCard;