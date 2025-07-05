import { useContext } from 'react';
import { ClubContext } from '../context/ClubContext';

function Dashboard() {
  const { clubs } = useContext(ClubContext);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 2xl:px-20">
      <div className="w-full max-w-screen-sm sm:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-xl">
        <h2 className="text-2xl mb-4 text-center lg:text-left">All Clubs</h2>
        <ul className="flex flex-col gap-4">
          {clubs.map((club) => (
            <li key={club.id} className="border p-4 rounded shadow bg-white">
              <h3 className="font-bold">{club.name}</h3>
              <p>{club.description}</p>
              <p><strong>President:</strong> {club.president}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
