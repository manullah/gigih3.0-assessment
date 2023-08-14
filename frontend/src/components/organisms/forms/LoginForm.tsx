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
import {
  useAuthSignin,
  useLocalStorageUser,
} from '../../../services/auth/hook';
import { IconLogout } from '@tabler/icons-react';

type LoginFormProps = {};

export const LoginForm: React.FC<LoginFormProps> = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  });

  const authSigninMutation = useAuthSignin();

  const userHook = useLocalStorageUser();

  return (
    <>
      <Flex justify="end" align="center">
        {userHook.user?.username ? (
          <Flex align="center" gap={12}>
            <Avatar color="cyan" radius="xl" />
            <Text>{userHook.user?.username}</Text>
            <Button
              size="sm"
              onClick={() => {
                userHook.removeUserFromLocalStorage();
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
                onSuccess: () => {
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
