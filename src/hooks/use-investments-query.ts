import { useQuery } from '@tanstack/react-query';
import type { InvestmentData } from '@/types/api';

export function useInvestmentsQuery() {
  return useQuery<InvestmentData[]>({
    queryKey: ['investments'],
    queryFn: async () => {
      const response = await fetch('/api/investments');
      return response.json();
    }
  });
} 