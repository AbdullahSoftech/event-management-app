import React, { useState, useMemo } from "react";
import Pagination from "./Pagination";
import { paginate } from "../../utils/pagination";
import SearchFilter from "./ProfileSearchFilter";
import EditEventModal from "./EditEventModal"; // Import the modal component

const ProfileEventList = ({ events, onEdit, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEvent, setSelectedEvent] = useState(null); // For tracking the event being edited
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
    const itemsPerPage = 5;

    // Filtered events based on search term
    const filteredEvents = useMemo(() => {
        return events.filter(
            (event) =>
                event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [events, searchTerm]);

    // Paginated events
    const paginatedEvents = useMemo(() => {
        return paginate(filteredEvents, currentPage, itemsPerPage);
    }, [filteredEvents, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEditClick = (event) => {
        setSelectedEvent(event); // Set the event to be edited
        setIsModalOpen(true); // Open the modal
    };

    const handleSave = (updatedEvent) => {
        onEdit(updatedEvent._id, updatedEvent); // Call the parent onEdit function
        setIsModalOpen(false); // Close the modal
    };

    

    return (
        <div>
            <SearchFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            <ul className="space-y-4">
                {paginatedEvents.length > 0 ?
                    <>
                        {paginatedEvents.map((event) => (
                            <li key={event._id} className="p-4 border rounded shadow-sm">
                                <h3 className="text-lg font-bold">{event.title}</h3>
                                <p>{event.description}</p>
                                <p>
                                    <strong>Date:</strong>{" "}
                                    {new Date(event.date).toLocaleString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                    })}
                                </p>
                                <p>
                                    <strong>Location:</strong> {event.location}
                                </p>
                                <div className="flex gap-4 mt-4">
                                    <button
                                        onClick={() => handleEditClick(event)}
                                        className="text-custom-grey hover:text-custom-dark-grey hover:underline flex items-center gap-1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                            />
                                        </svg>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(event._id)}
                                        className="text-custom-grey hover:text-custom-dark-grey hover:underline flex items-center gap-1"
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
                            </li>
                        ))
                        }
                    </>
                    :
                    <li className="text-center w-full">No events created</li>
                }
            </ul>

            <Pagination
                currentPage={currentPage}
                totalItems={filteredEvents.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />

            {/* Render the modal */}
            {isModalOpen && (
                <EditEventModal
                    event={selectedEvent}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default ProfileEventList;
