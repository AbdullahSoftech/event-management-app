import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Welcome = ({ username }) => {
    const { userCredentials } = useContext(AppContext)
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-custom-grey mb-4">
                Welcome, {userCredentials?.username}!
            </h1>
            <p className="text-gray-700 text-lg">
                We're thrilled to have you on board. Start by creating or managing your events, exploring upcoming events, or updating your profile.
            </p>
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Get Started:</h2>
                <ul className="list-disc pl-6 text-gray-600">
                    <li>View <strong>“All Events”</strong> to explore what’s happening around you.</li>
                    <li>Create your first event by clicking <strong>“Create Event”</strong> in the sidebar after login your account.</li>
                    <li>Click the profile icon and select <strong>“Edit Profile”</strong> to update your account details and personalize your experience.</li>
                </ul>
            </div>
            <div className="mt-6 text-sm text-gray-500">
                Need help? Visit the <strong>Help Center</strong> or contact support.
            </div>
        </div>
    );
};

export default Welcome;
