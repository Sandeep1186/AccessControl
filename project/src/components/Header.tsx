import { Shield } from 'lucide-react';
import React from 'react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-3 text-2xl font-semibold text-gray-900">Access Control</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Admin Dashboard</span>
          </div>
        </div>
      </div>
    </header>
  );
}