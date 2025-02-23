// src/components/Routes.js
import React, { useState, useEffect } from 'react';

function Routes() {
  const [routes, setRoutes] = useState([]);
  const [newRoute, setNewRoute] = useState({
    routeName: '',
    startPoint: '',
    endPoint: '',
    stops: '',
    estimatedTime: ''
  });

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const response = await fetch('http://192.168.100.215:3000/api/routes');
      const data = await response.json();
      setRoutes(data);
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.100.215:3000/api/routes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRoute),
      });
      if (response.ok) {
        fetchRoutes();
        setNewRoute({
          routeName: '',
          startPoint: '',
          endPoint: '',
          stops: '',
          estimatedTime: ''
        });
      }
    } catch (error) {
      console.error('Error adding route:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://192.168.100.215:3000/api/routes/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        fetchRoutes();
      }
    } catch (error) {
      console.error('Error deleting route:', error);
    }
  };

  return (
    <div className="routes">
      <h2>Route Management</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Route Name"
          value={newRoute.routeName}
          onChange={(e) => setNewRoute({...newRoute, routeName: e.target.value})}
        />
        <input
          type="text"
          placeholder="Start Point"
          value={newRoute.startPoint}
          onChange={(e) => setNewRoute({...newRoute, startPoint: e.target.value})}
        />
        <input
          type="text"
          placeholder="End Point"
          value={newRoute.endPoint}
          onChange={(e) => setNewRoute({...newRoute, endPoint: e.target.value})}
        />
        <input
          type="text"
          placeholder="Stops (comma separated)"
          value={newRoute.stops}
          onChange={(e) => setNewRoute({...newRoute, stops: e.target.value})}
        />
        <input
          type="text"
          placeholder="Estimated Time (minutes)"
          value={newRoute.estimatedTime}
          onChange={(e) => setNewRoute({...newRoute, estimatedTime: e.target.value})}
        />
        <button type="submit">Add Route</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Route Name</th>
            <th>Start Point</th>
            <th>End Point</th>
            <th>Stops</th>
            <th>Estimated Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.id}>
              <td>{route.routeName}</td>
              <td>{route.startPoint}</td>
              <td>{route.endPoint}</td>
              <td>{route.stops}</td>
              <td>{route.estimatedTime} min</td>
              <td>
                <button onClick={() => handleDelete(route.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Routes;