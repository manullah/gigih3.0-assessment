import { MessageBubleCard } from "../..";
import { TCommentResponse } from "../../../modules/comments/entities";

type CommentListProps = {
  username: string;
  listComment: TCommentResponse[];
};

export const CommentList: React.FC<CommentListProps> = (props) => {
  const { username, listComment } = props;

  return (
    <div className="flex flex-col justify-end gap-2 h-full">
      {listComment.map((item, index) => (
        <MessageBubleCard
          key={index}
          text={item.comment}
          username={item.username}
          isSender={item.username === username}
        />
      ))}
    </div>
  );
};
