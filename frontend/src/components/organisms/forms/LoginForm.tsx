import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { Avatar } from "../../atoms/data-display/Avatar";
import { ButtonLogin } from "../..";

type LoginFormProps = {
  username: string;
  setUsername: (value: string) => void;
};

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { username, setUsername } = props;

  return (
    <>
      {username ? (
        <div className="flex gap-2 items-center">
          <p>{username}</p>
          <Avatar url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          <button
            className="p-2 text-xs bg-red-400 ml-2 rounded-lg"
            onClick={() => setUsername("")}
          >
            <ArrowLeftOnRectangleIcon className="w-4" />
          </button>
        </div>
      ) : (
        <ButtonLogin onSuccess={setUsername} />
      )}
    </>
  );
};
