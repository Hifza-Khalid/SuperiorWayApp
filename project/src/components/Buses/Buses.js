// src/components/Buses.js
import React, { useState, useEffect } from 'react';

function Buses() {
  const [buses, setBuses] = useState([]);
  const [newBus, setNewBus] = useState({
    busNumber: '',
    driverName: '',
    capacity: '',
    route: ''
  });

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    try {
      const response = await fetch('http://192.168.100.215:3000/api/buses');
      const data = await response.json();
      setBuses(data);
    } catch (error) {
      console.error('Error fetching buses:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.100.215:3000/api/buses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBus),
      });
      if (response.ok) {
        fetchBuses();
        setNewBus({ busNumber: '', driverName: '', capacity: '', route: '' });
      }
    } catch (error) {
      console.error('Error adding bus:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://192.168.100.215:3000/api/buses/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        fetchBuses();
      }
    } catch (error) {
      console.error('Error deleting bus:', error);
    }
  };

  return (
    <div className="buses">
      <h2>Bus Management</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Bus Number"
          value={newBus.busNumber}
          onChange={(e) => setNewBus({...newBus, busNumber: e.target.value})}
        />
        <input
          type="text"
          placeholder="Driver Name"
          value={newBus.driverName}
          onChange={(e) => setNewBus({...newBus, driverName: e.target.value})}
        />
        <input
          type="number"
          placeholder="Capacity"
          value={newBus.capacity}
          onChange={(e) => setNewBus({...newBus, capacity: e.target.value})}
        />
        <input
          type="text"
          placeholder="Route"
          value={newBus.route}
          onChange={(e) => setNewBus({...newBus, route: e.target.value})}
        />
        <button type="submit">Add Bus</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Bus Number</th>
            <th>Driver Name</th>
            <th>Capacity</th>
            <th>Route</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.busNumber}</td>
              <td>{bus.driverName}</td>
              <td>{bus.capacity}</td>
              <td>{bus.route}</td>
              <td>
                <button onClick={() => handleDelete(bus.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Buses;