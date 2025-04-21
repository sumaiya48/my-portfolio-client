import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const DashboardLayout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      alert("Logout successful");
      // Optional: navigate to login page if needed
      // navigate('/admin');
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="drawer drawer-mobile md:drawer-open">
      {/* Drawer Toggle for mobile */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col p-6 bg-[#f9f9f9] min-h-screen">
        {/* Top Nav (only visible on small screens) */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Dashboard Overview</h2>
          <label htmlFor="dashboard-drawer" className="btn btn-sm btn-primary drawer-button">
            ☰ Menu
          </label>
        </div>

        {/* Main Dashboard Content */}
        <div className="bg-white p-6 rounded shadow">
          <Outlet /> {/* Render nested route components */}
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#0f1117] text-white space-y-2">
          <Link className="hover:bg-gray-800 rounded mx-3 py-3 px-3" to='/admin/dashboard/overview'>
            Dashboard Overview
          </Link>
          <Link className="hover:bg-gray-800 rounded mx-3 py-3 px-3" to='/admin/dashboard/addproject'>
            Add Project
          </Link>
          <Link className="hover:bg-gray-800 rounded mx-3 py-3 px-3" to='/admin/dashboard/editordeleteproject'>
            Edit / Delete Project
          </Link>
          <button onClick={handleLogout} className="hover:bg-gray-800 rounded mx-3 py-3 px-3 text-left">
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
