import React from 'react';
import { TabType } from '../types';

interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function Tabs({ activeTab, onTabChange }: TabsProps) {
  const tabs: { key: TabType; label: string }[] = [
    { key: 'users', label: 'Users' },
    { key: 'roles', label: 'Roles' },
    { key: 'permissions', label: 'Permissions' },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8 px-4 sm:px-6 lg:px-8" aria-label="Tabs">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onTabChange(key)}
            className={`
              ${activeTab === key
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
              whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
            `}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}