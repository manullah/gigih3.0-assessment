import { useParams } from 'react-router-dom';
import {
  CommentForm,
  CommentList,
  ProductList,
  LoginForm,
} from '../../components';
import { useState } from 'react';
import { useGetVideoDetails } from '../../services/videos/hook';
import {
  Flex,
  Grid,
  Paper,
  ScrollArea,
  createStyles,
  rem,
} from '@mantine/core';
import { TUserResponse } from '../../services/users/entities/response';

const useStyles = createStyles(theme => ({
  box: {
    backgroundColor: theme.colors.dark[9],
    height: '100%',
    padding: rem(16),
    borderRadius: theme.radius.lg,
  },

  iframeBox: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },

  iframe: {
    border: 0,
    width: '100%',
    height: '80%',
    borderRadius: theme.radius.lg,
  },

  commentBox: {
    backgroundColor: theme.colors.dark[5],
    height: '100%',
  },
}));

const DetailPage = () => {
  const { videoId } = useParams();
  const VIDEO_ID = videoId as unknown as string;

  const { classes } = useStyles();

  const [username, setUsername] = useState<TUserResponse | null>(null);

  const videoDetailHook = useGetVideoDetails(VIDEO_ID);

  if (videoDetailHook.isFetching) {
    return <div>Loading...</div>;
  }

  if (!videoDetailHook.data?.data) {
    return <div>No Data.</div>;
  }

  return (
    <>
      <Grid m={0} style={{ minHeight: '100vh' }}>
        <Grid.Col span={12} xl={3}>
          <Paper className={classes.box}>
            <ProductList products={videoDetailHook.data.data.products} />
          </Paper>
        </Grid.Col>
        <Grid.Col span={12} xl={6}>
          <Paper className={classes.iframeBox}>
            {videoDetailHook.data.data.urlVideo ? (
              <iframe
                src={videoDetailHook.data.data.urlVideo}
                className={classes.iframe}
              />
            ) : null}
          </Paper>
        </Grid.Col>
        <Grid.Col span={12} xl={3}>
          <Paper className={classes.box}>
            <Flex direction="column" gap={12} h="100%">
              <LoginForm
                username={username?.username}
                setUsername={setUsername}
              />

              <Paper className={classes.commentBox}>
                <CommentList username={username?.username} />
              </Paper>

              <Paper>
                <CommentForm username={username?.username} videoId={VIDEO_ID} />
              </Paper>
            </Flex>
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default DetailPage;
