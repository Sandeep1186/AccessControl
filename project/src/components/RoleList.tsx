import { Check, MoreVertical } from 'lucide-react';
import React from 'react';
import { mockPermissions, mockRoles } from '../data/mock';
import { Role } from '../types';

export function RoleList() {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                  Role
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Description
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Permissions
                </th>
                <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockRoles.map((role: Role) => (
                <tr key={role.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3">
                    <div className="font-medium text-gray-900">{role.name}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {role.description}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.map(permId => {
                        const permission = mockPermissions.find(p => p.id === permId);
                        return (
                          <span
                            key={permId}
                            className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                          >
                            <Check className="mr-1 h-3 w-3" />
                            {permission?.name}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}