import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const TopNav = () => {
  return (
    <div className="flex flex-row justify-between font-sans h-14 items-center">
      <div className="flex flex-row gap-x-5">
        <div>
          <a href="#">Login</a>
        </div>
        <div>
          <a href="#">Entries</a>
        </div>
      </div>
      <div>
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <MagnifyingGlassIcon className="h-7 w-7 text-red" />
            </button>
          </span>
          <input
            className="w-80 py-2 px-3 bg-black text-white leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder=""
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
