import { useQuery } from '@tanstack/react-query';
import type { AccountData } from '@/types/api';

export function useAccountsQuery() {
  return useQuery<AccountData[]>({
    queryKey: ['accounts'],
    queryFn: async () => {
      const response = await fetch('/api/accounts');
      return response.json();
    }
  });
} 