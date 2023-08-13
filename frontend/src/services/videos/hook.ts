import { TVideoResponse } from './entities/response';
import { getVideoDetails, getVideoList } from './api';
import { TVideoParams } from './entities/request';
import { UseQueryOptions, useQuery } from 'react-query';
import { TResponse } from '../../utils/entities/response';

export const useGetVideoList = (
  params: TVideoParams,
  options?: UseQueryOptions<TResponse<TVideoResponse[]>, object>
) => {
  return useQuery({
    queryKey: ['get-video-list', params],
    queryFn: () => getVideoList(params),
    ...options,
  });
};

export const useGetVideoDetails = (
  id: TVideoResponse['_id'],
  options?: UseQueryOptions<TResponse<TVideoResponse>, object>
) => {
  return useQuery({
    queryKey: ['get-video-details', id],
    queryFn: () => getVideoDetails(id),
    enabled: !!id,
    ...options,
  });
};
