import { Flex, ScrollArea } from '@mantine/core';
import { MessageBubleCard } from '../..';
import { useEffect } from 'react';
import { TCommentResponse } from '../../../services/comments/entities/response';

type CommentListProps = {
  viewport?: React.RefObject<HTMLDivElement>;
  commentList: TCommentResponse[];
};

export const CommentList: React.FC<CommentListProps> = props => {
  const { viewport, commentList } = props;

  useEffect(() => {
    if (viewport && viewport.current) {
      viewport.current.scrollTo({
        top: viewport.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [viewport]);

  return (
    <ScrollArea p="xs" viewportRef={viewport} h="100%">
      <Flex
        direction="column"
        gap={6}
        style={{
          maxHeight: '80vh',
        }}
      >
        {commentList.map((item, index) => (
          <MessageBubleCard
            key={index}
            text={item.comment}
            username={item.user.username}
          />
        ))}
      </Flex>
    </ScrollArea>
  );
};
