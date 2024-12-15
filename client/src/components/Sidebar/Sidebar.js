import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Sidebar = () => {
    const { userCredentials, logOutHandler } = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <div className="fixed w-60 md:block hidden" style={{ height: 'calc(100vh - 64px)' }}>
            {/* Sidebar Container */}
            <div className="h-full bg-custom-dark-pista text-[#383737] font-semibold flex flex-col justify-between">
                {/* Navigation Links */}
                <div className="p-6">
                    <ul className="space-y-4">
                        {userCredentials?.isAdmin &&
                            <li className="p-2 rounded-md cursor-pointer bg-gradient-to-r from-transparent to-transparent hover:from-gray-100 hover:to-gray-300 
                            transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
                                <Link to={'/home/admin-panel'}>Admin Panel</Link>
                            </li>
                        }
                        <li className="p-2 rounded-md cursor-pointer bg-gradient-to-r from-transparent to-transparent hover:from-gray-100 hover:to-gray-300 
                        transitizon-all duration-300 ease-in-out shadow-sm hover:shadow-md">
                            <Link to={'/home/all-events'}> All Events</Link>
                        </li>
                        {userCredentials &&
                            <li className="p-2 rounded-md cursor-pointer bg-gradient-to-r from-transparent to-transparent hover:from-gray-100 hover:to-gray-300 
                            transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
                                <Link to={'/home/create-event'}> Create Event</Link>
                            </li>
                        }
                        {userCredentials &&
                            <li className="p-2 rounded-md cursor-pointer bg-gradient-to-r from-transparent to-transparent hover:from-gray-100 hover:to-gray-300 
                           transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
                                <Link to={'/home/profile'}>Profile</Link>
                            </li>
                        }
                    </ul>

                </div>

                {/* Logout Button */}
                {userCredentials ?
                    <div className="p-6 ">
                        <button
                            className="w-full flex items-center justify-center gap-2 p-2 bg-custom-grey text-white rounded-md hover:bg-[#383737] transition-all 
                            duration-300 ease-in-out"
                            onClick={() => logOutHandler()}
                        >
                            Logout
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-box-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                                />
                            </svg>
                        </button>
                    </div>
                    :
                    <div className="p-6 ">
                        <button
                            className="w-full flex items-center justify-center gap-2 p-2 bg-custom-grey text-white rounded-md hover:bg-[#383737] transition-all 
                            duration-300 ease-in-out"
                            onClick={() => navigate('/login')}
                        >
                            Sign in
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                                <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                            </svg>
                        </button>
                    </div>}
            </div>
        </div>
    );
};

export default Sidebar;
