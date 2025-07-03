import { useContext } from 'react';
import { ClubContext } from '../context/ClubContext';

function Dashboard() {
  const { clubs } = useContext(ClubContext);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4">All Clubs</h2>
      <ul className="space-y-2">
        {clubs.map((club) => (
          <li key={club.id} className="border p-4 rounded shadow">
            <h3 className="font-bold">{club.name}</h3>
            <p>{club.description}</p>
            <p><strong>President:</strong> {club.president}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
