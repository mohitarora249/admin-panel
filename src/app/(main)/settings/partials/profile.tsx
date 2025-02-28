"use client";

import { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { generateInitials } from '@/lib/initials';
import { useProfileQuery, useUpdateProfile } from '@/hooks/use-profile-query';
import type { UserProfileData } from '@/types/api';

const Profile = () => {
  const { data: profile } = useProfileQuery();
  const updateProfile = useUpdateProfile();
  const [formData, setFormData] = useState<UserProfileData>({
    name: '',
    email: '',
    avatar: '',
  });

  // Update form data when profile is loaded
  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile?.name]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData(prev => ({ ...prev, avatar: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile.mutateAsync(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center mb-8">
        <div className="relative">
          <Avatar className="relative p-2 rounded-full w-14 h-14">
            <AvatarImage 
              className="rounded-full" 
              src={formData.avatar || `https://avatar.vercel.sh/${formData.name}`} 
            />
            <AvatarFallback className="rounded-full">
              {generateInitials(formData.name)}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={updateProfile.isPending}
          className="px-6 py-2.5 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {updateProfile.isPending ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
};

export default Profile;
