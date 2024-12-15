import { useEffect, useState } from 'react';
import apiClient from '../../utils/apiClient';
import axios from 'axios';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://event-management-api-seven.vercel.app/api/events');
            setData(response.data);
        } catch (err) {
            setError(err.message || 'Failed to fetch data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [endpoint]);

    return { data, loading, error, refetch: fetchData, setData };
};

export default useFetch;
