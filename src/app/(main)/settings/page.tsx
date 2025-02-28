"use client";

import React, { useState } from 'react';
import Security from './partials/security';
import Preferences from './partials/preferences';
import Profile from './partials/profile';
import Tabs from '@/components/ui/tabs';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-4xl p-8">
       <Tabs
        tabs={[
          { label: 'Profile', value: 'profile' },
          { label: 'Preferences', value: 'preferences' },
          { label: 'Security', value: 'security' },
        ]}
        onClick={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
        />
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'preferences' && <Preferences />}
        {activeTab === 'security' && <Security />}
      </div>
  );
}

export default Settings;