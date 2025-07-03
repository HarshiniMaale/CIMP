import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CreateClub from './pages/CreateClub.jsx';
import ManageMembers from './pages/ManageMembers.jsx';
import AssignRoles from './pages/AssignRoles.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-club" element={<CreateClub />} />
          <Route path="/manage-members" element={<ManageMembers />} />
          <Route path="/assign-roles" element={<AssignRoles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
