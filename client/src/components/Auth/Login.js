import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import BirdIllustration from './BirdIllustration';
import { AppContext } from '../../context/AppContext';

const Login = () => {
    const { setUserCredentials, setIsAuthenticated } = useContext(AppContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setError(null)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
           
            const token = response.data.token;
            // Store the token in localStorage
            localStorage.setItem('authToken', token);
            setUserCredentials(response.data.user)
            // Clear form data
            setFormData({
                username: '',
                email: '',
                password: '',
            });

            setIsAuthenticated(!!localStorage.getItem('authToken'));

            navigate('/home');

        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center min-h-screen">
            {/* Left Side - Illustration */}
            <BirdIllustration />

            {/* Right Side - Login Form */}
            <div className=" w-full bg-white min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">Login to <strong className='text-[#7dc2a4]'> GoEvent</strong></h1>
                {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center  w-2/4 '>
                    <div className="mb-4 w-full">
                        <label
                            className="block text-gray-600 text-sm font-medium mb-2"
                            htmlFor="email"
                        >
                            email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 !border-b text-gray-700 focus:outline-none focus:!ring-0"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label
                            className="block text-gray-600 text-sm font-medium mb-2"
                            htmlFor="password"
                        >
                            password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 !border-b text-gray-700 focus:outline-none focus:!ring-0"
                        />
                    </div>
                    <button
                        type="submit"
                        className="md:w-3/4 mt-4 py-2 px-6 !bg-custom-grey text-white rounded-[2px] hover:text-white focus:outline-none focus:ring-2
                         focus:ring-teal-300"
                    >
                        Sign in
                    </button>
                </form>
                <small className='pt-10'>Don't have an account? <Link className='text-[#7dc2a4] font-semibold hover:underline hover:cursor-pointer' to={'/register'}> SignUp</Link></small>
            </div>
        </div>
    );
};

export default Login;
