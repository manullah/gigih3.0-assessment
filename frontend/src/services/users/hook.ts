import { TUserResponse } from './entities/response';
import { getUserDetails, getUserList } from './api';
import { TUserParams } from './entities/request';
import { UseQueryOptions, useQuery } from 'react-query';
import { TResponse } from '../../utils/entities/response';

export const useGetUserList = (
  params: TUserParams,
  options?: UseQueryOptions<TResponse<TUserResponse[]>, object>
) => {
  return useQuery({
    queryKey: ['get-user-list', params],
    queryFn: () => getUserList(params),
    ...options,
  });
};

export const useGetUserDetails = (
  id: TUserResponse['_id'],
  options?: UseQueryOptions<TResponse<TUserResponse>, object>
) => {
  return useQuery({
    queryKey: ['get-user-details', id],
    queryFn: () => getUserDetails(id),
    enabled: !!id,
    ...options,
  });
};
