import React, { useState } from 'react';
import CreateEventForm from './CreateEventForm';
import './CreateEvent.module.css';
import apiClient from '../../../utils/apiClient';

const CreateEvent = () => {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (eventData) => {
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await apiClient.post('/events', eventData);

            if (response.status === 201 || response.status === 200) {
                setSuccessMessage('Event created successfully!');
            } else {
                setErrorMessage('Failed to create event.');
            }
        } catch (error) {
            // Handle Axios error response
            setErrorMessage(
                error.response?.data?.message || 'Something went wrong.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="create-event-container">
            <h1 className="text-2xl font-bold mb-4 text-custom-dark-grey text-center">Create New Event</h1>
            <CreateEventForm onSubmit={handleSubmit} loading={loading} />
            {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
        </div>
    );
};

export default CreateEvent;
