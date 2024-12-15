import apiClient from "../utils/apiClient";

export const getUsers = async () => {
    try {
        
        const response = await apiClient.get('/auth/users-profiles');
        return response.data.users; // Assuming the API returns an array of users
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const updateUserRole = async (userId, role) => {
    try {
        const response = await apiClient.put(`/auth/admin/users/${userId}`, { role });
        if (response.data.success) {   
            return response.data.users;
        }
        return null; // Assuming the API returns a boolean indicating success or failure
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};