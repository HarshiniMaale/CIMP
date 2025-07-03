import { useState } from 'react';

function AssignRoles() {
  const [club, setClub] = useState("");
  const [president, setPresident] = useState("");
  const [faculty, setFaculty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (president === faculty) {
      alert("President and Faculty Coordinator cannot be the same person!");
      return;
    }
    alert(`Roles assigned to club ${club}:\nPresident: ${president}\nFaculty: ${faculty}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-semibold mb-4">Assign Club Roles</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select value={club} onChange={(e) => setClub(e.target.value)} className="w-full p-2 border rounded" required>
          <option value="">Select Club</option>
          <option value="dance">Dance Club</option>
          <option value="coding">Coding Club</option>
        </select>
        <select value={president} onChange={(e) => setPresident(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Assign President</option>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
        <select value={faculty} onChange={(e) => setFaculty(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Assign Faculty</option>
          <option value="Prof. Sharma">Prof. Sharma</option>
          <option value="Bob">Bob</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Assign Roles
        </button>
      </form>
    </div>
  );
}

export default AssignRoles;
