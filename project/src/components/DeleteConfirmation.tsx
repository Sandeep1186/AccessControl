import React from 'react';
import { User } from '../types';

interface DeleteConfirmationProps {
  user: User;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteConfirmation({ user, onConfirm, onCancel }: DeleteConfirmationProps) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        Are you sure you want to delete {user.name}? This action cannot be undone.
      </p>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          onClick={onConfirm}
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}