import axios from '../../utils/axios';
import { TResponse } from '../../utils/entities/response';
import { TAuthPayload } from './entities/request';
import { TAuthResponse } from './entities/response';

export const authSignin = async (payload: TAuthPayload) => {
  const result = await axios.post<TResponse<TAuthResponse>>(`/signin`, payload);
  return result.data;
};
