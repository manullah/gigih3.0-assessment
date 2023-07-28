import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type ButtonLoginProps = {
  onSuccess: (username: string) => void;
};

export const ButtonLogin: React.FC<ButtonLoginProps> = (props) => {
  const { onSuccess } = props;

  const [isInputUsername, setIsInputUsername] = useState(false);
  const [username, setUsername] = useState("");

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSuccess(username);
  };

  return (
    <>
      {isInputUsername ? (
        <form className="flex gap-2" onSubmit={onSubmit}>
          <input
            className="bg-gray-700 border-none rounded-lg text-xs"
            placeholder="Type username..."
            value={username}
            onChange={(value) => setUsername(value.currentTarget.value)}
          />
          <XCircleIcon
            className="w-5 cursor-pointer"
            onClick={() => setIsInputUsername(false)}
          />
        </form>
      ) : (
        <button
          className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 text-xs"
          onClick={() => setIsInputUsername(true)}
        >
          Login
        </button>
      )}
    </>
  );
};
