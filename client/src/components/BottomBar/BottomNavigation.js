import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const BottomNavigation = () => {
    const { userCredentials, logOutHandler } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full bg-white shadow-lg md:hidden ">
            <nav className="flex justify-around items-center py-2">
                {/* Admin Panel */}
                {userCredentials?.isAdmin && (
                    <Link to="/home/admin-panel" className="flex flex-col items-center text-custom-dark-grey hover:text-custom-dark-pista">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mb-1"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M14 4.5V14H2V4.5L8 1l6 3.5z" />
                            <path d="M6.5 6.5v3h3v-3h-3z" />
                        </svg>
                        <span className="text-xs">Admin</span>
                    </Link>
                )}

                {/* All Events */}
                <Link to="/home/all-events" className="flex flex-col items-center text-custom-dark-grey hover:text-custom-dark-pista">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mb-1"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2z" />
                        <path d="M0 4v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4H0z" />
                    </svg>
                    <span className="text-xs">Events</span>
                </Link>

                {/* Create Event */}
                {userCredentials && (
                    <Link to="/home/create-event" className="flex flex-col items-center text-custom-dark-grey hover:text-custom-dark-pista">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mb-1"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M9.5 1a.5.5 0 0 1 .5.5V7h5.5a.5.5 0 0 1 0 1H10v5.5a.5.5 0 0 1-1 0V8H3.5a.5.5 0 0 1 0-1H9V1.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <span className="text-xs">Create</span>
                    </Link>
                )}

                {/* Profile */}
                {userCredentials && (
                    <Link to="/home/profile" className="flex flex-col items-center text-custom-dark-grey hover:text-custom-dark-pista">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mb-1"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm6-9a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
                        </svg>
                        <span className="text-xs">Profile</span>
                    </Link>
                )}

                {/* Logout */}
                {userCredentials ? (
                    <button
                        onClick={logOutHandler}
                        className="flex flex-col items-center text-gray-600 hover:text-red-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mb-1"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                            <path d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                        </svg>
                        <span className="text-xs">Logout</span>
                    </button>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="flex flex-col items-center text-gray-600 hover:text-green-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mb-1"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                            <path d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                        </svg>
                        <span className="text-xs">Login</span>
                    </button>
                )}
            </nav>
        </div>
    );
};

export default BottomNavigation;
