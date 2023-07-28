import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { mySocket } from "../../../utils/socketio";
import { TVideoResponse } from "../../../modules/videos/types/entities";

type CommentFormProps = {
  username: string;
  videoId: TVideoResponse["id"];
};

export const CommentForm: React.FC<CommentFormProps> = (props) => {
  const { username, videoId } = props;

  const [message, setMessage] = useState("");

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    mySocket.emit("comment", {
      username,
      videoId,
      comment: message,
    });
    setMessage("");
  };

  return (
    <form className="flex gap-3" onSubmit={onSubmit}>
      <input
        className="bg-gray-700 border-none w-full rounded-lg text-xs h-10"
        placeholder={
          username ? "Type comment..." : "Login first on the top right"
        }
        value={message}
        onChange={(value) => setMessage(value.currentTarget.value)}
        disabled={!username}
      />
      <button
        type="submit"
        className="bg-green-600 px-4 rounded-lg hover:bg-green-700 hover:shadow-lg"
      >
        <PaperAirplaneIcon className="w-4" />
      </button>
    </form>
  );
};
