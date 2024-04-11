import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
import Guest from './pages/Guest';
import Teacher from './pages/Teacher';
import Student from './pages/Student';

function App() {
  const [selectvalue, setSelectvalue] = useState<string>('');

  function hadnlechange(e: any) {
    setSelectvalue(e.target.value);
    localStorage.setItem('role', e.target.value)
  }

  console.log(selectvalue);


  return (
    <BrowserRouter>
      <select id="role" onChange={hadnlechange} defaultValue="select">
        <option selected value="select" disabled>Select Role</option>
        <option value="guest">Guest</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>

      <Link to={selectvalue == 'guest' ? ('guest') : selectvalue == 'teacher' ? ('teacher') : selectvalue == 'student' ? ('student') : ('')}>kirish</Link>
      <Routes>
        <Route path='/guest' element={<Guest />}></Route>
        <Route path='/teacher' element={<Teacher />}></Route>
        <Route path='/student' element={<Student />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
