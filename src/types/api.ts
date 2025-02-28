export interface ExpenseData {
  name: string;
  value: number;
  color: string;
}

export interface TransactionData {
  id: number;
  type: string;
  source: string;
  date: string;
  amount: number;
  icon: string;
}

export interface ContactData {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export interface BalanceHistoryData {
  name: string;
  balance: number;
}

export interface WeeklyActivityData {
  name: string;
  Withdraw: number;
  Deposit: number;
}

// Add new interface for user profile
export interface UserProfileData {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  avatar?: string;
}

export interface NotificationData {
  id: number;
  title: string;
  message: string;
}

export interface AccountData {
  id: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  balance: number;
  currency: string;
  type: 'Savings' | 'Checking' | 'Credit Card' | 'Investment';
  status: 'Active' | 'Inactive' | 'Frozen';
  lastTransaction: string; // ISO date string
}

export interface InvestmentData {
  id: string;
  name: string;
  type: 'Stock' | 'ETF' | 'Mutual Fund' | 'Crypto' | 'Bond';
  symbol: string;
  shares: number;
  purchasePrice: number;
  currentPrice: number;
  purchaseDate: string;
  lastUpdated: string;
  performance: number; // Percentage
  value: number; // Current total value
} 