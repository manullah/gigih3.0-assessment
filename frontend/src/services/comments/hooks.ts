import { useEffect, useState } from 'react';
import { mySocket } from '../../utils/socketio';
import { TCommentResponse } from './entities/response';
import { TCommentParams } from './entities/request';
import { UseQueryOptions, useQuery } from 'react-query';
import { TResponse } from '../../utils/entities/response';
import { getCommentList } from './api';

export const useGetCommentList = (
  params: TCommentParams,
  options?: UseQueryOptions<TResponse<TCommentResponse[]>, object>
) => {
  return useQuery({
    queryKey: ['get-video-list', params],
    queryFn: () => getCommentList(params),
    ...options,
  });
};

export const useCommentSocket = () => {
  const [receivedComment, setReceivedComment] = useState<TCommentResponse[]>(
    []
  );

  useEffect(() => {
    const handler = (data: TCommentResponse) => {
      setReceivedComment(prev => [...prev, data]);
    };

    mySocket.on('comment', handler);
    return () => {
      mySocket.off('comment', handler);
    };
  }, []);

  return {
    receivedComment,
  };
};
