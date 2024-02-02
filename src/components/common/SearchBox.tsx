import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
    return (
        <>
            <form>
                <label
                    htmlFor="default-search"
                    className="w-full text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0  cursor-pointer flex items-center ps-2">
                        <button className="p-1.5 hover:bg-gray-200 rounded-full">
                            <BsSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </button>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full overflow-ellipsis p-2 ps-10  text-gray-900 border border-gray-100 rounded-lg bg-gray-50 focus:ring-0 focus:border-gray-200  focus:shadow"
                        placeholder="Search Waanverse Account"
                        required
                    />
                </div>
            </form>
        </>
    );
};

export default SearchBox;
