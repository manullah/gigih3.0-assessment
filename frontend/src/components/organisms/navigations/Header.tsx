import {
  createStyles,
  Header as MantineHeader,
  rem,
  Input,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { debounce } from 'lodash';

const useStyles = createStyles(() => ({
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

interface HeaderSearchProps {
  onSearch?: (value: string) => void;
}

export const Header: React.FC<HeaderSearchProps> = props => {
  const { onSearch } = props;

  const { classes } = useStyles();

  return (
    <MantineHeader height={56} px={16}>
      <div className={classes.inner}>
        <div>Tokopedia Play</div>

        <Input
          icon={<IconSearch size={12} />}
          placeholder="Search"
          size="xs"
          onChange={debounce(e => onSearch && onSearch(e.target.value), 500)}
        />
      </div>
    </MantineHeader>
  );
};
