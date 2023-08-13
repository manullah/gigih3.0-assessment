import axios from '../../utils/axios';
import { TResponse } from '../../utils/entities/response';
import { TBadgeParams } from './entities/request';
import { TBadgeResponse } from './entities/response';

export const getBadgeList = async (params: TBadgeParams) => {
  const result = await axios.get<TResponse<TBadgeResponse[]>>(`/badges`, {
    params: { ...params },
  });
  return result.data;
};
