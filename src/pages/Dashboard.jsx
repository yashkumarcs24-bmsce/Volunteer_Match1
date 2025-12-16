import React, { useEffect, useState } from "react";
import { getVolunteers } from "../api/volunteerApi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("user"));

  // Fetch volunteers list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getVolunteers();
        setVolunteers(res.data);
      } catch (err) {
        console.error("Error fetching volunteers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      {/* Welcome section */}
      <div className="max-w-4xl mx-auto bg-white shadow p-6 rounded-xl">
        <h1 className="text-3xl font-bold mb-2">Hello, {user?.name} 👋</h1>
        <p className="text-gray-600 mb-4">Welcome to your Volunteer Dashboard.</p>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6">
        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Total Volunteers</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{volunteers.length}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Opportunities</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">12</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Unique Skills</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {new Set(volunteers.flatMap(v => v.skills || [])).size}
          </p>
        </div>
      </div>

      {/* Recent volunteers */}
      <div className="max-w-4xl mx-auto bg-white shadow p-6 rounded-xl mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Volunteers</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="space-y-3">
            {volunteers.map((v) => (
              <li key={v._id} className="border p-4 rounded-md shadow-sm">
                <h3 className="text-lg font-semibold">{v.name}</h3>
                <p className="text-gray-600">{v.email}</p>
                <p className="text-sm mt-1">
                  <span className="font-semibold">Skills:</span> {v.skills.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;