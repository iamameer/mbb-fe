import React, { useState } from 'react';

const Searchbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-2 m-4 shadow-sm w-200 
    sm:max-w-xs focus-within:bg-white focus-within:ring-2 
    focus-within:ring-blue-500">
      🔎 
      <input
        type="text"
        placeholder=" Find book title..."
        value={searchTerm}
        onChange={handleChange}
        className="bg-transparent focus:outline-none w-full text-gray-700 placeholder-gray-500"
      />
    </div>
  );
};

export default Searchbar;
