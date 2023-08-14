import { Paper, Text, createStyles } from '@mantine/core';
import { useLocalStorageUser } from '../../../services/auth/hook';

const useStyles = createStyles(() => ({}));

type MessageBubleCard = {
  text: string;
  username: string;
};

export const MessageBubleCard: React.FC<MessageBubleCard> = props => {
  const { text, username } = props;

  const { theme } = useStyles();

  const userHook = useLocalStorageUser();

  const isSender = (username: string) => username === userHook.user?.username;

  return (
    <Paper
      p={16}
      w={'75%'}
      radius="md"
      style={{
        ...(isSender(username)
          ? {
              backgroundColor: theme.colors.dark[9],
            }
          : {
              marginLeft: 'auto',
              backgroundColor: theme.colors.dark[6],
            }),
      }}
    >
      <Text size="xs" mb={4} fw={900}>
        {username}
      </Text>
      <Text size="sm">{text}</Text>
    </Paper>
  );
};
