type MessageBubleCard = {
  isSender?: boolean;
};

export const MessageBubleCard: React.FC<MessageBubleCard> = (props) => {
  const { isSender } = props;

  return (
    <div
      className={`px-3 py-2 w-3/4 rounded-lg ${
        isSender
          ? "bg-gray-900/50 border border-gray-600"
          : "ml-auto bg-gray-700"
      }`}
    >
      <p className="text-xs mb-1 text-gray-400 font-semibold">John Dow</p>
      <p className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab beatae
        assumenda ipsum recusandae quasi eius placeat ratione illo repellendus
        nihil.
      </p>
    </div>
  );
};
