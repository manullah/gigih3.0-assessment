import { useEffect, useState } from "react";
import { mySocket } from "../../utils/socketio";
import { TCommentResponse } from "./entities";

export const useCommentSocket = () => {
  const [receivedComment, setReceivedComment] = useState<TCommentResponse[]>(
    []
  );

  useEffect(() => {
    const handler = (data: TCommentResponse) => {
      setReceivedComment((prev) => [...prev, data]);
    };

    mySocket.on("comment", handler);
    return () => {
      mySocket.off("comment", handler);
    };
  }, []);

  return {
    receivedComment,
  };
};
