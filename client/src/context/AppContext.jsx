import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create the context
export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [userCredentials, setUserCredentials] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
    // Authenticate user using token in localStorage
    const authenticateUser = async () => {
        const token = localStorage.getItem('authToken');

        if (token) {
            try {
                const response = await axios.get('https://event-management-api-seven.vercel.app/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // If the request is successful, update the userCredentials state
                setUserCredentials(response.data);

                // Navigate to /home
                navigate("/home");
            } catch (err) {
                console.error(err);
                setError('Failed to fetch user profile.');
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false); // No token found, stop loading
        }
    };

    // Call authenticateUser on component mount
    useEffect(() => {
        authenticateUser();
    }, []); // Runs once on initial load

    const logOutHandler = ()=>{
        localStorage.removeItem('authToken');
        setUserCredentials(null);
        navigate("/home");
    }

    return (
        <AppContext.Provider value={{ userCredentials, setUserCredentials, loading, error, authenticateUser, logOutHandler, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
