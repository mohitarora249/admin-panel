import { SearchIcon } from "lucide-react";

const Search = () => {
    return (
        <>
            <SearchIcon className="w-5 h-5 text-gray-400" />
            <input
                type="text"
                placeholder="Search for something..."
                className="bg-transparent outline-none ml-2 text-gray-700 w-full"
            />
        </>
    )
}

export default Search;