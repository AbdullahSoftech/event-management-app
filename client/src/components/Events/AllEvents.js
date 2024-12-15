import React, { useMemo, useState } from 'react';
import { paginate } from '../../utils/pagination';
import EventList from './EventList';
import SearchFilter from './SearchFilter';
import useFetch from '../custom hooks/useFetch';
import apiClient from '../../utils/apiClient';

const AllEvents = () => {
  const { data: events, loading, error, refetch, setData } = useFetch('/events');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('title'); // Default search field
  const itemsPerPage = 9;

  // Filtered events based on search term and field
  const filteredEvents = useMemo(() => {
    if (!searchTerm) return events;

    return events.filter((event) => {
      const field = event[searchField]?.toString().toLowerCase();
      return field?.includes(searchTerm.toLowerCase());
    });
  }, [events, searchField, searchTerm]);

  // Paginated events
  const paginatedEvents = useMemo(() => paginate(filteredEvents, currentPage, itemsPerPage), [
    filteredEvents,
    currentPage,
  ]);

  const handlePageChange = (direction) => {
    setCurrentPage((prev) =>
      direction === 'next' ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await apiClient.delete(`/events/admin/${eventId}`);
      setData((prevEvents) => prevEvents.filter((event) => event._id !== eventId))

    } catch (err) {
      alert("Failed to delete event.");
    }
  };

  const handleEditEvent = async (eventId, updatedEvent) => {
    try {
      // Call the API to update the event on the server
      const { data: updatedEventFromServer } = await apiClient.put(`/events/admin/${eventId}`, updatedEvent);

      // Update the state with the updated event
      setData((prevEvents) =>
        prevEvents.map((event) =>
            event._id === eventId ? { ...event, ...updatedEventFromServer } : event
        ))

      alert("Event updated successfully.");
    } catch (err) {

      console.error("Failed to update the event:", err);
      alert("Failed to update the event. Please try again.");
    }
  };

  if (loading) return <div className="text-center">Loading events...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-custom-dark-grey">All Events</h1>

      </header>

      {/* Search and Filter */}
      <SearchFilter
        searchField={searchField}
        setSearchField={setSearchField}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        refetch={refetch}
      />

      {/* Event List */}
      <EventList
        events={paginatedEvents}
        currentPage={currentPage}
        totalPages={Math.ceil(filteredEvents.length / itemsPerPage)}
        onPageChange={handlePageChange}
        editHandler={handleEditEvent}
        deleteHandler={handleDeleteEvent}
      />
    </div>
  );
};

export default AllEvents;
