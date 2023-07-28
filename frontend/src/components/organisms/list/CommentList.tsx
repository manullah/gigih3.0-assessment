import { MessageBubleCard } from "../..";

type CommentListProps = {
  username: string;
};

export const CommentList: React.FC<CommentListProps> = (props) => {
  const { username } = props;

  return (
    <div className="flex flex-col justify-end gap-2 h-full">
      <MessageBubleCard />
      <MessageBubleCard />
      <MessageBubleCard isSender />
    </div>
  );
};
