import { TUserResponse } from './entities/response';
import { TUserParams } from './entities/request';
import axios from '../../utils/axios';
import { TResponse } from '../../utils/entities/response';

export const getUserList = async (params: TUserParams) => {
  const result = await axios.get<TResponse<TUserResponse[]>>(`/videos`, {
    params: { ...params },
  });
  return result.data;
};

export const getUserDetails = async (id: TUserResponse['_id']) => {
  const result = await axios.get<TResponse<TUserResponse>>(`/videos/${id}`);
  return result.data;
};
