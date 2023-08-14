import { Paper, Text, createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({}));

type MessageBubleCard = {
  isSender?: boolean;
  text: string;
  username: string;
};

export const MessageBubleCard: React.FC<MessageBubleCard> = props => {
  const { isSender, text, username } = props;

  const { theme } = useStyles();

  return (
    <Paper
      p={16}
      w={'75%'}
      radius="md"
      style={{
        ...(isSender
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
