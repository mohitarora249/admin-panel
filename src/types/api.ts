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