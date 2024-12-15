import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '../components/BottomBar/BottomNavigation';

const EventHomePage = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Content Area */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <Sidebar />
                <BottomNavigation />
                {/* Main Content */}
                <div className="md:ml-60 mb-16 md:mb-0 w-full bg-gray-100 p-6 overflow-auto">
                    {children || (
                        <Outlet />
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventHomePage;