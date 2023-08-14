import { TVideoResponse } from '../../../services/videos/entities/response';
import {
  createStyles,
  rem,
  getStylesRef,
  Text,
  Card,
  Center,
  Group,
} from '@mantine/core';
import { IconEye } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  card: {
    position: 'relative',
    height: rem(400),
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease',
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },
}));

type VideoCardProps = {
  title: TVideoResponse['title'];
  viewed: TVideoResponse['viewed'];
  badges: TVideoResponse['badges'][number]['name'][];
  shop: TVideoResponse['shop'];
  urlThumbnail: TVideoResponse['urlThumbnail'];
};

export const VideoCard: React.FC<VideoCardProps> = props => {
  const { title, viewed, urlThumbnail, badges, shop } = props;

  const { classes, theme } = useStyles();

  return (
    <>
      <Card p="lg" shadow="lg" className={classes.card} radius="md">
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${urlThumbnail})` }}
        />
        <div className={classes.overlay} />

        <div className={classes.content}>
          <div>
            <Text
              size="lg"
              className={classes.title}
              weight={500}
              lineClamp={2}
            >
              {title}
            </Text>

            <Group position="apart" spacing="xs">
              <Text size="xs" className={classes.author}>
                {shop}
              </Text>

              <Group spacing="lg">
                <Center>
                  <IconEye
                    size="1rem"
                    stroke={1.5}
                    color={theme.colors.dark[2]}
                  />
                  <Text size="sm" className={classes.bodyText}>
                    {viewed}
                  </Text>
                </Center>
              </Group>
            </Group>
          </div>
        </div>
      </Card>
    </>
  );
};
