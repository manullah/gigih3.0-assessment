import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

type HeaderProps = {
  onSearch?: (value: string) => void;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { onSearch } = props;

  return (
    <div className="border-b border-gray-700 p-4">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="sm:w-0 sm:flex-1">
          <h1
            id="message-heading"
            className="text-base font-semibold leading-6 text-white"
          >
            Tokopedia Play
          </h1>
        </div>

        <div className="mt-4 flex items-center justify-between sm:ml-6 sm:mt-0 sm:flex-shrink-0 sm:justify-start">
          {onSearch && (
            <div className="relative flex flex-1">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <MagnifyingGlassIcon
                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
              <input
                id="search-field"
                className="block h-full w-full border-0 py-0 pl-8 pr-0 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm bg-transparent"
                placeholder="Search..."
                type="search"
                name="search"
                onChange={(value) => onSearch(value.currentTarget.value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
