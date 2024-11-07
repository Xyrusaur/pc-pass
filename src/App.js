import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Utilities/Navbar';
import Home from './Components/Pages/Home';
import Help from './Components/Pages/Help';
import StudentDashboard from './Components/Pages/StudentDashboard';
import TeacherDashboard from './Components/Pages/TeacherDashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
