import { useEffect, useState } from "react";
import { getVolunteers } from "../api/volunteerApi";
import VolunteerCard from "../components/VolunteerCard";

export default function Opportunities() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    getVolunteers()
      .then((res) => {
        setVolunteers(res.data);
      })
      .catch((err) => {
        console.log("Error loading volunteers:", err);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Volunteers</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {volunteers.map((v) => (
          <VolunteerCard key={v._id} volunteer={v} />
        ))}
      </div>
    </div>
  );
}