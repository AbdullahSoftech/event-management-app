import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const SearchFilter = ({ searchField, setSearchField, searchTerm, setSearchTerm, refetch }) => {
    const { userCredentials } = useContext(AppContext)
    return (
        <div className="lg:flex lg:flex-row grid grid-cols-4 items-center justify-between gap-4 mb-6">
            <select
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                className="border border-gray-300 focus:border-gray-300 md:px-4 md:py-2 focus:outline-none focus:ring-0"
            >
                <option value="title">Title</option>
                <option value="description">Description</option>
                <option value="date">Date</option>
                <option value="location">Location</option>
                <option value="createdBy">Created By</option>
            </select>
            <input
                type="text"
                value={searchTerm}
                name='search'
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={`Search by ${searchField}`}
                className="flex-grow border col-span-3 border-gray-300 focus:!border-gray-300 px-4 py-2 focus:!outline-none focus:!ring-0"
            />
            <button
                onClick={refetch}
                className="text-custom-grey hover:text-custom-dark-grey"
                title='refetch events'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </svg>
            </button>
            {userCredentials &&
                <Link to={'/home/create-event'} className='flex items-end justify-center gap-1 bg-custom-grey hover:bg-custom-dark-grey text-[#f8f8f8]
            hover:text-white py-2 px-2 col-span-3'>
                    <span>create event</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                </Link>
            }
        </div>
    );
};

export default SearchFilter;
