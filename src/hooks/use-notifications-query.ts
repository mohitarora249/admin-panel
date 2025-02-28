import { useQuery } from '@tanstack/react-query';
import type { NotificationData } from '@/types/api';

export function useNotificationsQuery() {
  return useQuery<NotificationData[]>({
    queryKey: ['notifications'],
    queryFn: async () => {
      const response = await fetch('/api/notifications');
      return response.json();
    }
  });
} 