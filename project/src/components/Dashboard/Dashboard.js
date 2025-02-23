// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalBuses: 0,
    totalRoutes: 0,
    pendingPayments: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('http://192.168.100.215:3000/api/stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Students</h3>
          <p>{stats.totalStudents}</p>
        </div>
        <div className="stat-card">
          <h3>Total Buses</h3>
          <p>{stats.totalBuses}</p>
        </div>
        <div className="stat-card">
          <h3>Total Routes</h3>
          <p>{stats.totalRoutes}</p>
        </div>
        <div className="stat-card">
          <h3>Pending Payments</h3>
          <p>{stats.pendingPayments}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;