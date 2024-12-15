
import React, { useState, useEffect, useContext } from "react";
import ProfileForm from "./ProfileForm";
import ProfileEventList from "./ProfileEventList";
import apiClient from "../../utils/apiClient";
import { AppContext } from "../../context/AppContext";

const Profile = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { userCredentials, setUserCredentials } = useContext(AppContext);



    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                setLoading(true);
                const { data: userEvents } = await apiClient.get(`/events/${userCredentials?._id}`);
                setEvents(userEvents);
            } catch (err) {
                setError("Failed to fetch profile data.");
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [userCredentials?._id]);

    const handleEditProfile = async (updatedUser) => {
        try {
            // Call API to update username and email
            const { email, username } = updatedUser;
            const response = await apiClient.put(`/auth/profile`, { email, username });

            setUserCredentials(response.data);
            alert("Profile updated successfully.");
        } catch (err) {
            alert("Failed to update profile.");
        }
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await apiClient.delete(`/events/${eventId}`);
            setEvents((prevEvents) => prevEvents.filter((event) => event._id !== eventId));
            
        } catch (err) {
            alert("Failed to delete event.");
        }
    };

    const handleEditEvent = async (eventId, updatedEvent) => {
        try {
            // Call the API to update the event on the server
            const { data: updatedEventFromServer } = await apiClient.put(`/events/${eventId}`, updatedEvent);

            // Update the state with the updated event
            setEvents((prevEvents) =>
                prevEvents.map((event) =>
                    event._id === eventId ? { ...event, ...updatedEventFromServer } : event
                )
            );

            alert("Event updated successfully.");
        } catch (err) {
            
            console.error("Failed to update the event:", err);
            alert("Failed to update the event. Please try again.");
        }
    };



    if (loading) return <p>Loading profile...</p>;
    if (error) return <p className="text-red-600">{error}</p>;

    return (
        <div className="p-6">
            <div className="flex md:flex-row flex-col justify-between mb-4 items-center">
                <h1 className="text-2xl font-bold text-custom-dark-grey">User Profile</h1>
                <small className="text-center"> <strong className="text-custom-dark-grey">Last Update:</strong> {new Date(userCredentials.updatedAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })}</small>
            </div>
            <ProfileForm user={userCredentials} onSubmit={handleEditProfile} />
            <h2 className="text-2xl text-center font-bold mt-8 mb-4 text-custom-dark-grey">My Events</h2>
            <ProfileEventList events={events} onEdit={handleEditEvent} onDelete={handleDeleteEvent} />
        </div>
    );
};

export default Profile;
