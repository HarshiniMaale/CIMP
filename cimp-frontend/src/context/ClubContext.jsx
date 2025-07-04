import { createContext, useState } from 'react';
import CreateClub from '../pages/CreateClub';
import Dashboard from '../pages/Dashboard';
import AssignRoles from '../pages/AssignRoles.jsx';



export const ClubContext = createContext();

export const ClubProvider = ({ children }) => {
  const [clubs, setClubs] = useState([
    {
      id: 1,
      name: "Dance Club",
      description: "All things dance!",
      category: "Cultural",
      president: "Alice",
      faculty: "Prof. Sharma",
      members: ["Alice", "Bob"]
    }
  ]);

  const [students, setStudents] = useState(["Alice", "Bob", "Charlie"]);
  const [facultyList, setFacultyList] = useState(["Prof. Sharma", "Prof. Iyer"]);
  const [categoryList, setCategoryList] = useState(["Technical Club", "Social Club", "Cultural Club", "Literary Club", "Special Teams"]);

  return (
    <ClubContext.Provider value={{ clubs, setClubs, students, setStudents, facultyList, setFacultyList, categoryList, setCategoryList }}>
      {children}
    </ClubContext.Provider>
  );
};
