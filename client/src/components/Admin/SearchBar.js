import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by username or email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 focus:!border-gray-300 px-4 py-2 focus:!outline-none focus:!ring-0"
      />
    </div>
  );
};

export default SearchBar;
