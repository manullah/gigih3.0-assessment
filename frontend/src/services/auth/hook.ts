import { useMutation } from 'react-query';
import { authSignin } from './api';
import { useState } from 'react';
import { TUserResponse } from '../users/entities/response';

export const useAuthSignin = () => {
  const userHook = useLocalStorageUser();

  return useMutation(authSignin, {
    onSuccess: data => {
      userHook.saveUserToLocalStorage(data.data);
    },
  });
};

export const useLocalStorageUser = () => {
  // Initialize state with the user data from local storage
  const [user, setUser] = useState<TUserResponse | null>(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '')
      : null
  );

  // Function to save user data to local storage
  const saveUserToLocalStorage = (userData: TUserResponse) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    window.location.reload();
  };

  // Function to remove user data from local storage
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  return {
    user,
    saveUserToLocalStorage,
    removeUserFromLocalStorage,
  };
};
