import { MessageBubleCard } from "../..";

export const CommentList = () => {
  return (
    <div className="flex flex-col justify-end gap-2 h-full">
      <MessageBubleCard />
      <MessageBubleCard />
      <MessageBubleCard isSender />
    </div>
  );
};
