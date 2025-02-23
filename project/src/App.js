// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Buses from './components/Buses';
import Routes from './components/Routes';
import Payments from './components/Payments';

function App() {
  return (
    <Router>
      <div className="wrapper">
        {/* Sidebar */}
        <nav className="sidebar">
          <div className="sidebar-header">
            <h3>School Bus Admin</h3>
          </div>
          <ul className="list-unstyled">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/buses">Buses</Link></li>
            <li><Link to="/routes">Routes</Link></li>
            <li><Link to="/payments">Payments</Link></li>
          </ul>
        </nav>

        {/* Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/buses" element={<Buses />} />
            <Route path="/routes" element={<Routes />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;