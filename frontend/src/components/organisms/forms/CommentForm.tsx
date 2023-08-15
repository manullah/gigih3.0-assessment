import { TVideoResponse } from '../../../services/videos/entities/response';
import { Button, Flex, Input } from '@mantine/core';
import { IconPlane } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { usePostComment } from '../../../services/comments/hooks';
import { useLocalStorageUser } from '../../../services/auth/hook';
import { mySocket } from '../../../utils/socketio';

type CommentFormProps = {
  videoId: TVideoResponse['_id'];
  fetchingList: boolean;
  onSuccess: () => void;
};

export const CommentForm: React.FC<CommentFormProps> = props => {
  const { videoId, fetchingList = false, onSuccess } = props;

  const form = useForm({
    initialValues: {
      message: '',
    },
  });

  const postCommentMutation = usePostComment();

  const userHook = useLocalStorageUser();

  return (
    <form
      onSubmit={form.onSubmit(values => {
        if (postCommentMutation.isLoading || fetchingList) return;

        postCommentMutation.mutate(
          {
            comment: values.message,
            user: userHook.user?._id || '',
            video: videoId,
          },
          {
            onSuccess: data => {
              form.reset();
              onSuccess();
              mySocket.emit('comment', data.data.comment);
            },
          }
        );
      })}
    >
      <Flex gap="xs">
        <Input
          w="100%"
          placeholder={
            userHook.user?.username
              ? 'Type comment...'
              : 'Sign in first on the top right'
          }
          {...form.getInputProps('message')}
          disabled={!userHook.user?.username}
        />
        <Button loading={postCommentMutation.isLoading}>
          <IconPlane size="1rem" />
        </Button>
      </Flex>
    </form>
  );
};
