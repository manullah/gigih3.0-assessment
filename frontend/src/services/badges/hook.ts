import { UseQueryOptions, useQuery } from 'react-query';
import { getBadgeList } from './api';
import { TBadgeResponse } from './entities/response';
import { TResponse } from '../../utils/entities/response';
import { TBadgeParams } from './entities/request';

export const useGetBadgeList = (
  params: TBadgeParams,
  options?: UseQueryOptions<TResponse<TBadgeResponse[]>, object>
) => {
  return useQuery({
    queryKey: ['get-badge-list', params],
    queryFn: () => getBadgeList(params),
    ...options,
  });
};
