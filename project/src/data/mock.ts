import { Permission, Role, User } from '../types';

export const mockPermissions: Permission[] = [
  { id: 'read_users', name: 'Read Users', description: 'View user information' },
  { id: 'write_users', name: 'Write Users', description: 'Create and edit users' },
  { id: 'delete_users', name: 'Delete Users', description: 'Remove users from the system' },
  { id: 'manage_roles', name: 'Manage Roles', description: 'Create and modify roles' },
  { id: 'view_analytics', name: 'View Analytics', description: 'Access system analytics' },
];

export const mockRoles: Role[] = [
  {
    id: 'admin',
    name: 'Administrator',
    description: 'Full system access',
    permissions: mockPermissions.map(p => p.id),
  },
  {
    id: 'manager',
    name: 'Manager',
    description: 'User management and analytics',
    permissions: ['read_users', 'write_users', 'view_analytics'],
  },
  {
    id: 'viewer',
    name: 'Viewer',
    description: 'Read-only access',
    permissions: ['read_users', 'view_analytics'],
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    roleId: 'admin',
    status: 'active',
    lastActive: '2024-03-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    email: 'marcus.r@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    roleId: 'manager',
    status: 'active',
    lastActive: '2024-03-15T09:15:00Z',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    roleId: 'viewer',
    status: 'inactive',
    lastActive: '2024-03-14T16:45:00Z',
  },
];