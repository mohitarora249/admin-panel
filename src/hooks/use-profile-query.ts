import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { UserProfileData } from '@/types/api';

export function useProfileQuery() {
  return useQuery<UserProfileData>({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await fetch('/api/profile');
      return response.json();
    }
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: UserProfileData) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
} 