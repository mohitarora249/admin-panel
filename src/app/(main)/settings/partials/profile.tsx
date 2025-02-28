"use client";

import { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { generateInitials } from '@/lib/initials';
import { useProfileQuery, useUpdateProfile } from '@/hooks/use-profile-query';
import type { ProfileFormValues } from '@/lib/validations/profile';
import { ProfileForm } from './profile-form';

const Profile = () => {
  const { data: profile } = useProfileQuery();
  const updateProfile = useUpdateProfile();
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  useEffect(() => {
    if (profile) {
      setAvatarUrl(profile.avatar || `https://avatar.vercel.sh/${profile.name}`);
    }
  }, [profile]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setAvatarUrl(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ProfileFormValues) => {
    await updateProfile.mutateAsync({
      ...data,
      avatar: avatarUrl,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="relative">
          <Avatar className="relative p-2 rounded-full w-18 h-18">
            <AvatarImage 
              className="rounded-full" 
              src={avatarUrl} 
            />
            <AvatarFallback className="rounded-full">
              {profile?.name ? generateInitials(profile.name) : "?"}
            </AvatarFallback>
          </Avatar>
          <label className="absolute bottom-0 right-0 bg-gray-800 rounded-full p-1.5 cursor-pointer">
            <Camera size={16} className="text-white" />
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageUpload} 
            />
          </label>
        </div>
      </div>

      <ProfileForm 
        initialData={profile} 
        onSubmit={onSubmit}
        isSubmitting={updateProfile.isPending}
      />
    </div>
  );
};

export default Profile;
