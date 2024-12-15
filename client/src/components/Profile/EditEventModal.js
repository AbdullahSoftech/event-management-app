import React, { useState } from "react";

const EditEventModal = ({ event, onClose, onSave }) => {
    const [updatedEvent, setUpdatedEvent] = useState(event);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedEvent({ ...updatedEvent, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(updatedEvent);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-55 flex items-center justify-center mt-10">
            <div className="bg-custom-dark-pista px-6 rounded shadow-lg sm:w-96 xl:h-auto lg:!h-[370px] md:!h-[300px] !h-[330px] overflow-auto">
                <h2 className="text-2xl font-bold mb-4 text-custom-dark-grey text-center sticky top-0 bg-custom-dark-pista py-2 z-50">Edit Event</h2>
                <form onSubmit={handleSubmit}>
                    {/* Title Field */}
                    <div className="mb-4">
                        <label htmlFor="title" className="block font-semibold">
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={updatedEvent.title}
                            onChange={handleChange}
                            className="border !border-gray-300 focus:!outline-none focus:!ring-0 px-3 py-2 w-full"
                        />
                    </div>
                    
                    {/* Description Field */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block font-semibold">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={updatedEvent.description}
                            onChange={handleChange}
                            className="border !border-gray-300 focus:!outline-none focus:!ring-0 px-3 py-2 w-full"
                        />
                    </div>

                    {/* Location Field */}
                    <div className="mb-4">
                        <label htmlFor="location" className="block font-semibold">
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            value={updatedEvent.location}
                            onChange={handleChange}
                            className="border !border-gray-300 focus:!outline-none focus:!ring-0 px-3 py-2 w-full"
                        />
                    </div>

                    {/* Date Field */}
                    <div className="mb-4">
                        <label htmlFor="date" className="block font-semibold">
                            Date
                        </label>
                        <input
                            id="date"
                            name="date"
                            type="date"
                            value={new Date(updatedEvent.date).toISOString().split("T")[0]} // Convert date to YYYY-MM-DD format
                            onChange={handleChange}
                            className="border !border-gray-300 focus:!outline-none focus:!ring-0 px-3 py-2 w-full"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2 sticky bottom-0 bg-custom-dark-pista py-2 z-50">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-200 px-2 py-1 "
                        >
                            Cancel
                        </button>
                        <button type="submit" className="!bg-custom-grey hover:!bg-custom-dark-grey text-white px-2 py-1 ">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEventModal;
