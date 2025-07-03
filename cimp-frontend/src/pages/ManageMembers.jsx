import { useContext, useState } from 'react';
import { ClubContext } from '../context/ClubContext';

function ManageMembers() {
  const { clubs, setClubs, students } = useContext(ClubContext);
  const [selectedClubId, setSelectedClubId] = useState(clubs[0]?.id || 1);
  const [newMember, setNewMember] = useState('');

  const selectedClub = clubs.find(club => club.id === selectedClubId);

  const addMember = () => {
    if (newMember && !selectedClub.members.includes(newMember)) {
      const updatedClubs = clubs.map(club =>
        club.id === selectedClubId
          ? { ...club, members: [...club.members, newMember] }
          : club
      );
      setClubs(updatedClubs);
      setNewMember('');
    }
  };

  const removeMember = (name) => {
    const updatedClubs = clubs.map(club =>
      club.id === selectedClubId
        ? { ...club, members: club.members.filter(m => m !== name) }
        : club
    );
    setClubs(updatedClubs);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl mb-2">Manage Members of {selectedClub.name}</h2>
      <div className="flex gap-2 mb-4">
        <select onChange={(e) => setSelectedClubId(Number(e.target.value))}>
          {clubs.map(club => <option key={club.id} value={club.id}>{club.name}</option>)}
        </select>
        <select value={newMember} onChange={(e) => setNewMember(e.target.value)}>
          <option>Select student</option>
          {students.map((s, i) => <option key={i}>{s}</option>)}
        </select>
        <button onClick={addMember} className="bg-green-600 text-white px-3 py-1 rounded">Add</button>
      </div>

      <ul className="space-y-2">
        {selectedClub.members.map((m, i) => (
          <li key={i} className="flex justify-between bg-white shadow p-2 rounded">
            {m}
            <button onClick={() => removeMember(m)} className="text-red-500 hover:underline">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageMembers;
