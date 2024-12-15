// components/SearchFilter.js
import React from "react";

const SearchFilter = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search by title or description"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="border !border-gray-300 focus:!outline-none focus:!ring-0 px-3 py-2 w-full"
            />
        </div>
    );
};

export default SearchFilter;