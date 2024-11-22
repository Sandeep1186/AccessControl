import { MoreVertical, PlusCircle, UserCheck, UserX } from 'lucide-react';
import React, { useState } from 'react';
import { mockRoles, mockUsers } from '../data/mock';
import { ModalType, User } from '../types';
import { DeleteConfirmation } from './DeleteConfirmation';
import { Modal } from './Modal';
import { UserForm } from './UserForm';

export function UserList() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getRoleName = (roleId: string) => {
    return mockRoles.find(role => role.id === roleId)?.name || roleId;
  };

  const handleAddUser = (userData: Partial<User>) => {
    const newUser: User = {
      id: Date.now().toString(),
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      lastActive: new Date().toISOString(),
      ...userData,
    } as User;
    setUsers([...users, newUser]);
    setModalType(null);
  };

  const handleEditUser = (userData: Partial<User>) => {
    if (!selectedUser) return;
    const updatedUsers = users.map(user =>
      user.id === selectedUser.id ? { ...user, ...userData } : user
    );
    setUsers(updatedUsers);
    setModalType(null);
    setSelectedUser(null);
  };

  const handleDeleteUser = () => {
    if (!selectedUser) return;
    const updatedUsers = users.filter(user => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    setModalType(null);
    setSelectedUser(null);
  };

  return (
    <>
      <div className="mt-8 flow-root">
        <div className="flex justify-between items-center mb-4 px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-medium text-gray-900">User Management</h2>
          <button
            onClick={() => setModalType('add')}
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add User
          </button>
        </div>

        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    User
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Last Active
                  </th>
                  <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user: User) => (
                  <tr key={user.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={user.avatar}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {getRoleName(user.roleId)}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {user.status === 'active' ? (
                        <span className="inline-flex items-center text-green-700">
                          <UserCheck className="mr-1 h-4 w-4" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-red-700">
                          <UserX className="mr-1 h-4 w-4" />
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {formatDate(user.lastActive)}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => {
                            setSelectedUser(user);
                            setModalType('edit');
                          }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setSelectedUser(user);
                            setModalType('delete');
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalType === 'add'}
        onClose={() => setModalType(null)}
        title="Add New User"
      >
        <UserForm
          onSubmit={handleAddUser}
          onCancel={() => setModalType(null)}
        />
      </Modal>

      <Modal
        isOpen={modalType === 'edit' && selectedUser !== null}
        onClose={() => {
          setModalType(null);
          setSelectedUser(null);
        }}
        title="Edit User"
      >
        {selectedUser && (
          <UserForm
            user={selectedUser}
            onSubmit={handleEditUser}
            onCancel={() => {
              setModalType(null);
              setSelectedUser(null);
            }}
          />
        )}
      </Modal>

      <Modal
        isOpen={modalType === 'delete' && selectedUser !== null}
        onClose={() => {
          setModalType(null);
          setSelectedUser(null);
        }}
        title="Delete User"
      >
        {selectedUser && (
          <DeleteConfirmation
            user={selectedUser}
            onConfirm={handleDeleteUser}
            onCancel={() => {
              setModalType(null);
              setSelectedUser(null);
            }}
          />
        )}
      </Modal>
    </>
  );
}