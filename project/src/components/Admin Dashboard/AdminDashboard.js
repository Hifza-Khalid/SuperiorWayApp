import React, { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  Settings, 
  Package, 
  Bell, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="flex items-center justify-between p-4">
          <h2 className={`font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Admin Panel</h2>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <button className="flex items-center w-full p-3 hover:bg-gray-700 rounded-lg">
              <BarChart3 size={20} />
              <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>Dashboard</span>
            </button>
            <button className="flex items-center w-full p-3 hover:bg-gray-700 rounded-lg">
              <Users size={20} />
              <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>Users</span>
            </button>
            <button className="flex items-center w-full p-3 hover:bg-gray-700 rounded-lg">
              <Package size={20} />
              <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>Services</span>
            </button>
            <button className="flex items-center w-full p-3 hover:bg-gray-700 rounded-lg">
              <Settings size={20} />
              <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>Settings</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell size={20} />
              </button>
              <button className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg">
                <LogOut size={20} />
                <span className="ml-2">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm">Total Users</h3>
              <p className="text-2xl font-semibold mt-2">1,234</p>
              <span className="text-green-500 text-sm">↑ 12% from last month</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm">Active Services</h3>
              <p className="text-2xl font-semibold mt-2">856</p>
              <span className="text-green-500 text-sm">↑ 8% from last month</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm">Revenue</h3>
              <p className="text-2xl font-semibold mt-2">$12,345</p>
              <span className="text-red-500 text-sm">↓ 3% from last month</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm">Support Tickets</h3>
              <p className="text-2xl font-semibold mt-2">45</p>
              <span className="text-green-500 text-sm">↑ 5% from last month</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-medium">User Activity {item}</p>
                      <p className="text-sm text-gray-500">Action performed by user</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;