import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type MessageFormProps = {
  username: string;
  onSuccess?: (message: string) => void;
};

export const MessageForm: React.FC<MessageFormProps> = (props) => {
  const { username, onSuccess } = props;

  const [message, setMessage] = useState("");

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSuccess && onSuccess(message);
  };

  return (
    <form className="flex gap-3" onSubmit={onSubmit}>
      <input
        className="bg-gray-700 border-none w-full rounded-lg text-xs h-10"
        placeholder={
          username ? "Type comment..." : "Login first on the top right"
        }
        onChange={(value) => setMessage(value.currentTarget.value)}
        disabled={!username}
      />
      <button className="bg-green-600 px-4 rounded-lg hover:bg-green-700 hover:shadow-lg">
        <PaperAirplaneIcon className="w-4" />
      </button>
    </form>
  );
};
