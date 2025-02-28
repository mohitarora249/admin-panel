import { useQuery } from '@tanstack/react-query';
import type { CreditCardData } from '@/types/api';

export function useCreditCardsQuery() {
  return useQuery<CreditCardData[]>({
    queryKey: ['creditCards'],
    queryFn: async () => {
      const response = await fetch('/api/credit-cards');
      return response.json();
    }
  });
} 