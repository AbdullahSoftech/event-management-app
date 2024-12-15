import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { userCredentials, logOutHandler } = useContext(AppContext)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };



    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center cursor-pointer" onClick={() => navigate('/home')}>
                    <img src={logo} alt="Logo" className="sm:h-12 h-8 w-auto" />
                </div>

                {/* Desktop Links */}
                <nav className="hidden md:flex items-center space-x-6">
                    {!userCredentials && <Link to={"/login"} className="text-[#383737] font-semibold transition duration-200">Sign in</Link>}

                    {/* Profile Icon */}
                    {userCredentials &&
                        <span
                            className="cursor-pointer relative"
                            onClick={toggleDropdown}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person-circle text-custom-grey" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>

                            {/* Dropdown */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 bg-white shadow-2xl border rounded-md w-48 z-10">
                                    <ul className="flex flex-col py-3">
                                        <li className='ps-4 pb-2 border-b'>
                                            <p>{userCredentials?.username}</p>
                                            {/* <p>{userCredentials?.email}</p> */}
                                        </li>
                                        <li className='ps-4 py-4 font-semibold text-custom-grey hover:!text-[#383737]'>
                                            <Link to={'/home/profile'} className=' flex items-center gap-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                </svg>
                                                Edit Profile
                                            </Link>
                                        </li>
                                        <li className='self-center'>
                                            <button
                                                className="flex justify-center items-center gap-2 text-sm mt-4 py-1 px-4 !bg-custom-grey text-white rounded-[10px]
                                             hover:text-white hover:!bg-[#383737] focus:outline-none"
                                                onClick={() => logOutHandler()}
                                            >
                                                Logout
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </span>
                    }
                </nav>

                {/* Hamburger Menu (Mobile) */}
                <button className="md:hidden flex items-center text-gray-600" onClick={toggleMenu}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white border-t border-gray-200">
                    <ul className="flex flex-col space-y-2 py-4">
                        <li>
                            <Link to="/home/profile" className="block text-custom-grey hover:text-custom-dark-grey hover:underline px-4 py-2 transition duration-200">
                                Edit Profile
                            </Link>
                        </li>
                        <li>
                            <button
                                className="font-bold px-4 py-2 rounded-md transition duration-200 flex items-center gap-2"
                                onClick={() => logOutHandler()}
                            >
                                Logout
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
