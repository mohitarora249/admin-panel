import { useQuery } from '@tanstack/react-query';
import type { 
  ExpenseData, 
  TransactionData, 
  ContactData, 
  BalanceHistoryData,
  WeeklyActivityData 
} from '@/types/api';

export function useExpenseQuery() {
  return useQuery<ExpenseData[]>({
    queryKey: ['expense'],
    queryFn: async () => {
      const response = await fetch('/api/expense');
      return response.json();
    }
  });
}

export function useTransactionsQuery() {
  return useQuery<TransactionData[]>({
    queryKey: ['transactions'],
    queryFn: async () => {
      const response = await fetch('/api/transaction');
      return response.json();
    }
  });
}

export function useContactsQuery() {
  return useQuery<ContactData[]>({
    queryKey: ['contacts'],
    queryFn: async () => {
      const response = await fetch('/api/contacts');
      return response.json();
    }
  });
}

export function useBalanceHistoryQuery() {
  return useQuery<BalanceHistoryData[]>({
    queryKey: ['balance-history'],
    queryFn: async () => {
      const response = await fetch('/api/transaction/balance');
      return response.json();
    }
  });
}

export function useAnalyticsQuery() {
  return useQuery<WeeklyActivityData[]>({
    queryKey: ['analytics'],
    queryFn: async () => {
      const response = await fetch('/api/analytics');
      return response.json();
    }
  });
} 