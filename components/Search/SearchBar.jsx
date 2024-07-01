import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center rounded-md border border-gray-300 overflow-hidden w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-3 py-2 focus:outline-none text-sm text-gray-600 placeholder-gray-500 flex-1"
      />
      <button type="submit" className="px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-md focus:outline-none hover:bg-indigo-600 ml-2 mt-2 sm:mt-0">
        Search
      </button>
    </form>
  );
}
