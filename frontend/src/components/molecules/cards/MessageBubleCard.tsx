type MessageBubleCard = {
  isSender?: boolean;
  text: string;
  username: string;
};

export const MessageBubleCard: React.FC<MessageBubleCard> = (props) => {
  const { isSender, text, username } = props;

  return (
    <div
      className={`px-3 py-2 w-3/4 rounded-lg ${
        isSender
          ? "bg-gray-900/50 border border-gray-600"
          : "ml-auto bg-gray-700"
      }`}
    >
      <p className="text-xs mb-1 text-gray-400 font-semibold">{username}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
};
