import React, { useState } from 'react';
import { Header } from './components/Header';
import { PermissionList } from './components/PermissionList';
import { RoleList } from './components/RoleList';
import { Tabs } from './components/Tabs';
import { UserList } from './components/UserList';
import { TabType } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('users');

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return <UserList />;
      case 'roles':
        return <RoleList />;
      case 'permissions':
        return <PermissionList />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="mx-auto max-w-7xl">
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;