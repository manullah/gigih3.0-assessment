import {
  Avatar,
  Button,
  Flex,
  Group,
  Modal,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useAuthSignin } from '../../../services/auth/hook';
import { IconLogout } from '@tabler/icons-react';
import { TUserResponse } from '../../../services/users/entities/response';

type LoginFormProps = {
  username?: string;
  setUsername: (value: TUserResponse | null) => void;
};

export const LoginForm: React.FC<LoginFormProps> = props => {
  const { username, setUsername } = props;

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  });

  const authSigninMutation = useAuthSignin();

  return (
    <>
      <Flex justify="end" align="center">
        {username ? (
          <Flex align="center" gap={12}>
            <Avatar color="cyan" radius="xl" />
            <Text>{username}</Text>
            <Button
              size="sm"
              onClick={() => {
                setUsername(null);
              }}
            >
              <IconLogout size="1rem" />
            </Button>
          </Flex>
        ) : (
          <Button size="sm" onClick={open}>
            Sign in
          </Button>
        )}
      </Flex>

      <Modal opened={opened} onClose={close} title="Sign in">
        <form
          onSubmit={form.onSubmit(values => {
            authSigninMutation.mutate(
              {
                username: values.username,
                password: values.password,
              },
              {
                onSuccess: data => {
                  setUsername(data.data);
                  form.reset();
                  close();
                },
                onError: () => {
                  alert('Failed Login!');
                },
              }
            );
          })}
        >
          <TextInput
            label="Username"
            placeholder="Username"
            required
            {...form.getInputProps('username')}
          />
          <PasswordInput
            label="Password"
            placeholder="Username"
            required
            mt="md"
            {...form.getInputProps('password')}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Modal>
    </>
  );
};
