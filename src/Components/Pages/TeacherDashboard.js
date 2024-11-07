import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeacherDashboard = () => {
  useEffect(() => {
    toast.success('You are now logged in as a teacher.', { position: toast.TOP_RIGHT, autoClose: 3000 });
  }, []);

  return (
    <div className='content'>
      <div className='header'>
        <h1>Welcome to the Teacher Dashboard!</h1>
        <p>Here you can monitor requests from students.</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TeacherDashboard;
