import { useQuery } from '@tanstack/react-query';
import type { LoanData } from '@/types/api';

export function useLoansQuery() {
  return useQuery<LoanData[]>({
    queryKey: ['loans'],
    queryFn: async () => {
      const response = await fetch('/api/loans');
      return response.json();
    }
  });
} 