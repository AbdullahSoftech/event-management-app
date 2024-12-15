import React, { useState } from "react";
import { updateUserRole } from "../../services/userService";

const UserTable = ({ users, setFilteredUsers }) => {
    const [editableUserId, setEditableUserId] = useState(null); // Tracks the user being edited
    const [roleSelections, setRoleSelections] = useState({}); // Tracks role selection changes

    // Handle role change in the select dropdown
    const handleRoleChange = (userId, newRole) => {
        setRoleSelections({ ...roleSelections, [userId]: newRole });
    };

    // Handle edit/save button click
    const handleEditSave = async (userId, currentRole) => {
        if (editableUserId === userId) {
            // Save the updated role
            try {
                const updatedRole = roleSelections[userId] || (currentRole ? "Admin" : "User");
                const response = await updateUserRole(userId, updatedRole); // API call to update the role
                if (response) {
                    setFilteredUsers(response)
                }
                alert(`Role updated to ${updatedRole}`);
            } catch (error) {
                console.error("Error updating user role:", error);
            }
            setEditableUserId(null); // Exit edit mode
        } else {
            // Enter edit mode
            setEditableUserId(userId);
            setRoleSelections({ ...roleSelections, [userId]: currentRole ? "Admin" : "User" });
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-custom-dark-pista text-custom-dark-grey">
                        <th className="p-2 text-left border">Username</th>
                        <th className="p-2 text-left border">Email</th>
                        <th className="p-2 text-left border">Role</th>
                        <th className="p-2 text-left border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-100">
                                <td className="p-2 border">{user.username}</td>
                                <td className="p-2 border">{user.email}</td>
                                <td className="p-2 border">
                                    {editableUserId === user._id ? (
                                        <select
                                            value={roleSelections[user._id] || (user.isAdmin ? "Admin" : "User")}
                                            onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                            className="px-2 py-1 border rounded"
                                        >
                                            <option value="Admin">Admin</option>
                                            <option value="User">User</option>
                                        </select>
                                    ) : user.isAdmin ? (
                                        "Admin"
                                    ) : (
                                        "User"
                                    )}
                                </td>
                                <td className="p-2 border">
                                    <button
                                        onClick={() => handleEditSave(user._id, user.isAdmin)}
                                        className={`px-4 py-1 text-custom-dark-grey rounded ${editableUserId === user._id ? "bg-custom-dark-pista" : "hover:underline"
                                            }`}
                                    >
                                        {editableUserId === user._id ? "Save"
                                            :
                                            <span className="flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>
                                                Edit
                                            </span>
                                        }
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="p-2 text-center">
                                No users found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    );
};

export default UserTable;
