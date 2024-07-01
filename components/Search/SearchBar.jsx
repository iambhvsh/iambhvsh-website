import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to search results page with query params
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      <button type="submit" className="ml-2 px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none">
        Search
      </button>
    </form>
  );
}
