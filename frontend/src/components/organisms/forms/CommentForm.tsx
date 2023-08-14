import { TVideoResponse } from '../../../services/videos/entities/response';
import { Button, Flex, Input } from '@mantine/core';
import { IconPlane } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { usePostComment } from '../../../services/comments/hooks';

type CommentFormProps = {
  username?: string;
  videoId: TVideoResponse['_id'];
};

export const CommentForm: React.FC<CommentFormProps> = props => {
  const { username, videoId } = props;

  const form = useForm({
    initialValues: {
      message: '',
    },
  });

  const postCommentMutation = usePostComment();

  return (
    <form
      onSubmit={form.onSubmit(values => {
        postCommentMutation.mutate(
          {
            comment: values.message,
            user: '64c21fb08f73d63131477275',
            video: videoId,
          },
          {
            onSuccess: () => {
              form.reset();
            },
          }
        );
      })}
    >
      <Flex gap="xs">
        <Input
          w="100%"
          placeholder={
            username ? 'Type comment...' : 'Sign in first on the top right'
          }
          {...form.getInputProps('message')}
          disabled={!username}
        />
        <Button>
          <IconPlane size="1rem" />
        </Button>
      </Flex>
    </form>
  );
};
