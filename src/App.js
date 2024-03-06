import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentLogin from './pages/StudentLogin';
import AdminLogin from './pages/AdminLogin';
import StudentSignup from './pages/StudentSignup';
import AdminSignup from './pages/AdminSignup';


import AdminStudent from './pages/AdminStudent';
import StudentHomepage from './pages/StudentHomepage';
import AdminDashboard from './pages/AdminDashboard';
import AdminSideBar from './components/AdminSideBar';
import AdminAnnouncements from './pages/AdminAnnouncements';
import AdminEvents from './pages/AdminEvents';
import AdminArticles from './pages/AdminArticles';
import AdminTeachers from './pages/AdminTeachers';
import StudentLayout from './components/StudentLayout';



function App() {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<AdminStudent />} />
    <Route path="/Student/Login" element={<StudentLogin />} />
    <Route path="/Student/SignUp" element={<StudentSignup />} />
    <Route path="/Admin/Login" element={<AdminLogin />} />
    <Route path="/Admin/SignUp" element={<AdminSignup />} />

    <Route path="/StudentHomepage" element={<StudentHomepage />} />

    <Route path="/AdminDashboard" element={<AdminDashboard />} />
    <Route path="/AdminAnnouncements" element={<AdminAnnouncements />} />
    <Route path="/AdminEvents" element={<AdminEvents />} />
    <Route path="/AdminArticles" element={<AdminArticles />} />
    <Route path="/AdminTeachers" element={<AdminTeachers />} />
    </Routes>
  </Router>
);
}

export default App;
