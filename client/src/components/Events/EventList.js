import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events, currentPage, totalPages, onPageChange, editHandler, deleteHandler }) => {
    return (
        <>
            {events.length === 0 ? (
                <p className="text-gray-600 text-center">No events found.</p>
            ) : (
                <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {events.map((event) => (
                        <EventCard key={event._id} event={event} onEdit={editHandler} onDelete={deleteHandler} />
                    ))}
                </ul>
            )}

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={() => onPageChange('prev')}
                    disabled={currentPage === 1}
                    className="sm:px-4 sm:py-2 p-1 text-sm sm:text-base bg-custom-grey hover:bg-custom-dark-grey text-white rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => onPageChange('next')}
                    disabled={currentPage === totalPages}
                    className="sm:px-4 sm:py-2 p-1 text-sm sm:text-base bg-custom-grey hover:bg-custom-dark-grey text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default EventList;
