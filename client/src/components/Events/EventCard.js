import React, { useContext, useState } from 'react';
import { truncateText } from '../../utils/truncateText';
import { AppContext } from '../../context/AppContext';
import EditEventModal from '../Profile/EditEventModal';

const EventCard = ({ event, onEdit, onDelete }) => {
    const { userCredentials } = useContext(AppContext);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditClick = () => {
        setIsEditModalOpen(true);
    };

    const handleEditSave = (updatedEvent) => {
        onEdit(event._id, updatedEvent); // Call the parent handler
        setIsEditModalOpen(false); // Close modal after saving
    };

    return (
        <li
            className="p-4 bg-white shadow-md rounded-md flex flex-col justify-between"
            aria-label={`Event: ${event.title}`}
        >
            <h2 className="text-xl font-semibold mb-2">{truncateText(event.title, 25)}</h2>
            <p className="text-gray-700 mb-2">{truncateText(event.description, 100)}</p>
            <p className="text-sm text-gray-600">
                <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
                <strong>Location:</strong> {event.location}
            </p>
            <small className="font-semibold mt-5">
                <>By:</> {event.createdBy}
            </small>

            {/* Buttons Section */}
            {userCredentials?.isAdmin && (
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={handleEditClick}
                        className="flex items-center gap-1 text-custom-dark-grey focus:outline-none focus:ring-0 hover:underline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg>
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(event._id)}
                        className="flex items-center gap-1 text-custom-dark-grey focus:outline-none focus:ring-0 hover:underline"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash3"
                            viewBox="0 0 16 16"
                        >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                        Delete
                    </button>
                </div>
            )}

            {/* Edit Modal */}
            {isEditModalOpen && (
                <EditEventModal
                    event={event}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={handleEditSave}
                />
            )}
        </li>
    );
};

export default EventCard;
