import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">CIMP Admin</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/create-club" className="hover:underline">Create Club</Link>
        <Link to="/manage-members" className="hover:underline">Manage Members</Link>
        <Link to="/assign-roles" className="hover:underline">Assign Roles</Link>
      </div>
    </nav>
  );
}

export default Navbar;
