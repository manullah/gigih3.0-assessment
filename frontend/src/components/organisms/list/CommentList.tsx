import { MessageBubleCard } from '../..';
import { TCommentResponse } from '../../../services/comments/entities/response';

type CommentListProps = {
  username: string;
  listComment: TCommentResponse[];
};

export const CommentList: React.FC<CommentListProps> = props => {
  const { username, listComment } = props;

  return (
    <div className="flex flex-col justify-end gap-2 h-full">
      {listComment.map((item, index) => (
        <MessageBubleCard
          key={index}
          text={item.comment}
          username={item.user.username}
          isSender={item.user.username === username}
        />
      ))}
    </div>
  );
};
