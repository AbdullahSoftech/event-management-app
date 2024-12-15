
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const ProfileForm = ({ user, onSubmit }) => {
    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            <label>
                Username
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="border !border-gray-300 focus:!outline-none focus:!ring-0 px-3 py-2 w-full"
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border !border-gray-300 focus:!outline-none focus:!ring-0 px-3 py-2 w-full"
                />
            </label>
            <button type="submit" className="!bg-custom-grey hover:!bg-custom-dark-grey text-white px-4 py-2">
                Save Changes
            </button>
        </form>
    );
};

export default ProfileForm;
