import { useMutation } from 'react-query';
import { authSignin } from './api';
import { useState } from 'react';
import { TUserResponse } from '../users/entities/response';

export const useAuthSignin = () => {
  return useMutation(authSignin, {
    onSuccess: data => {
      localStorage.setItem('auth', JSON.stringify(data.data));
    },
  });
};

export const useAuth = () => {
  const [user, setUser] = useState<TUserResponse | null>(null);

  const setAuth = () => {
    const auth = localStorage.getItem('auth');

    if (auth) {
      return JSON.parse(auth);
    }

    return null;
  };

  const onSignOut = () => {
    localStorage.removeItem('auth');
  };

  return {
    user,
    setAuth,
    onSignOut,
  };
};
