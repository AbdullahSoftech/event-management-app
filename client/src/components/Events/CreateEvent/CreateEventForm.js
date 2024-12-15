import React from 'react';
import useEventForm from '../../custom hooks/useEventForm';

const CreateEventForm = ({ onSubmit, loading }) => {
    const { formValues, handleChange, handleSubmit } = useEventForm(onSubmit);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formValues.title}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-0 "
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formValues.description}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-0 "
                ></textarea>
            </div>

            <div>
                <label htmlFor="date" className="block text-sm font-medium">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formValues.date}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-0 "
                />
            </div>

            <div>
                <label htmlFor="location" className="block text-sm font-medium">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formValues.location}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-0 "
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="!bg-custom-grey hover:!bg-custom-dark-grey text-white px-4 py-2 focus:outline-none disabled:bg-gray-300"
            >
                {loading ? 'Creating...' : 'Create Event'}
            </button>
        </form>
    );
};

export default CreateEventForm;
