// import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
// import { debounce } from 'lodash';

// type HeaderProps = {
//   onSearch?: (value: string) => void;
// };

// export const Header: React.FC<HeaderProps> = props => {
//   const { onSearch } = props;

//   return (
//     <div className="border-b border-gray-700 p-4">
//       <div className="sm:flex sm:items-baseline sm:justify-between">
//         <div className="sm:w-0 sm:flex-1">
//           <h1
//             id="message-heading"
//             className="text-base font-semibold leading-6 text-white"
//           >
//             Tokopedia Play
//           </h1>
//         </div>

//         <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
//           {onSearch && (
//             <div className="relative flex flex-1">
//               <label htmlFor="search-field" className="sr-only">
//                 Search
//               </label>
//               <MagnifyingGlassIcon
//                 className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//               <input
//                 id="search-field"
//                 className="block h-full w-full border-0 py-0 pl-8 pr-0 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm bg-transparent"
//                 placeholder="Search..."
//                 type="search"
//                 name="search"
//                 onChange={debounce(
//                   (e: { target: { value: string } }) =>
//                     onSearch(e.target.value),
//                   500
//                 )}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

import {
  createStyles,
  Header as MantineHeader,
  Container,
  rem,
  Input,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { debounce } from 'lodash';

const useStyles = createStyles(theme => ({
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
