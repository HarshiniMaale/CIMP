import { useContext, useState } from 'react';
import { ClubContext } from "../context/ClubContext";


function CreateClub() {
  const { clubs, setClubs, students, setStudents, facultyList, setFacultyList, categoryList, setCategoryList } = useContext(ClubContext);
  const [form, setForm] = useState({ name: '', description: '', category: '', president: '', faculty: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new president if not already in list
    if (form.president && !students.includes(form.president)) {
      setStudents([...students, form.president]);
    }

    // Add new faculty if not already in list
    if (form.faculty && !facultyList.includes(form.faculty)) {
      setFacultyList([...facultyList, form.faculty]);
    }

    if (form.category && !categoryList.includes(form.category)) {
      setCategoryList([...categoryList, form.category]);
    }

    const newClub = {
      id: clubs.length + 1,
      ...form,
      members: [form.president],
    };

    setClubs([...clubs, newClub]);
    alert('Club Created!');

    // Optionally reset form
    setForm({ name: '', description: '', category: '', president: '', faculty: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Club Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border px-3 py-2"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full border px-3 py-2"
      />
      <select
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}>
          <option>Select Category</option>
          {categoryList.map((f, i) => <option key={i}>{f}</option>)}
        className="w-full border px-3 py-2"
      </select>
      <input
        type="text"
        name="president"
        placeholder="President Name"
        value={form.president}
        onChange={handleChange}
        className="w-full border px-3 py-2"
        required
      />
      <input
        type="text"
        name="faculty"
        placeholder="Faculty Name"
        value={form.faculty}
        onChange={handleChange}
        className="w-full border px-3 py-2"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create Club</button>
    </form>
  );
}

export default CreateClub;
