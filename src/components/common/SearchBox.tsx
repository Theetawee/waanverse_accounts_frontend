import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
    return (
        <>
            <form>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                        <button>
                            <BsSearch className="w-5 h-5 text-gray-600" aria-hidden="true" />
                        </button>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full px-4 py-2.5 ps-10 text-gray-900 border border-gray-50 rounded  bg-gray-50 focus:ring-0 focus:border-gray-100 focus:shadow dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search WaanVerse Account..."
                        required
                    />
                </div>
            </form>
        </>
    );
};

export default SearchBox;
