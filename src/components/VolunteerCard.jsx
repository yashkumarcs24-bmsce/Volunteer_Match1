export default function VolunteerCard({ volunteer }) {
  return (
    <div className="border shadow p-4 rounded-lg">
      <h2 className="text-xl font-bold">{volunteer.name}</h2>
      <p className="text-gray-600">{volunteer.email}</p>

      <div className="mt-2">
        <strong>Skills:</strong>
        <ul className="list-disc ml-5 text-sm">
          {volunteer.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}