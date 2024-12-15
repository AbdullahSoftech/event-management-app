import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import UserTable from './UserTable';
import axios from 'axios';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('authToken'); 
      try {
        const response = await axios.get('http://localhost:5000/api/auth/users-profiles', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Ensure token is being added
          }
        });
        setUsers(response.data.users);
        setFilteredUsers(response.data.users); // Initialize filtered users
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search input
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-custom-dark-grey text-center">Admin Panel</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <UserTable users={filteredUsers} setFilteredUsers={setFilteredUsers} />
    </div>
  );
};

export default AdminPanel;
