import { Card, Image, Text, createStyles, rem } from '@mantine/core';
import { TProductResponse } from '../../../services/products/entities/response';
import { convertIdr } from '../../../utils/string';

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

type ProductCardProps = {
  title: TProductResponse['title'];
  urlThumbnail: TProductResponse['urlThumbnail'];
  price: TProductResponse['price'];
};

export const ProductCard: React.FC<ProductCardProps> = props => {
  const { title, urlThumbnail, price } = props;

  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={urlThumbnail} alt={title} height={180} />
      </Card.Section>

      <Text fw={500} className={classes.title} mt="xs" lineClamp={2} size="sm">
        {title}
      </Text>

      <Text size="lg" fw={700} mt="xs">
        {convertIdr(price)}
      </Text>
    </Card>
  );
};
