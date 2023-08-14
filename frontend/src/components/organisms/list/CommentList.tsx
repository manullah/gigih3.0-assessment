import { Flex, ScrollArea } from '@mantine/core';
import { MessageBubleCard } from '../..';
import { useGetCommentList } from '../../../services/comments/hooks';
import { useParams } from 'react-router-dom';

type CommentListProps = {
  username?: string;
};

export const CommentList: React.FC<CommentListProps> = props => {
  const { username } = props;

  const { videoId } = useParams();
  const VIDEO_ID = videoId as unknown as string;

  const commentListHook = useGetCommentList(
    {
      video: VIDEO_ID,
    },
    {
      enabled: !!VIDEO_ID,
    }
  );

  return (
    <ScrollArea p="xs">
      <Flex
        direction="column"
        gap={6}
        style={{
          maxHeight: '80vh',
        }}
      >
        {commentListHook.data?.data.map((item, index) => (
          <MessageBubleCard
            key={index}
            text={item.comment}
            username={item.user.username}
            isSender={item.user.username === username}
          />
        ))}
      </Flex>
    </ScrollArea>
  );
};
