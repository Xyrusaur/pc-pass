import { useState } from "react";
import RequestModal from "../Utilities/RequestModal";
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentDashboard = () => {
  useEffect(() => {
    toast.success('You are now logged in as a student.', { position: toast.TOP_RIGHT });
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRequestSubmit = () => {
    setShowModal(false);
    toast.success('Your request has been submitted.', { position: toast.TOP_RIGHT });
  };

  return (
    <div className='content'>
      <div className='header'>
        <h1>Welcome to the Student Dashboard!</h1>
        <p>To submit a request, press the button below.</p>
        <button className='btn btn-primary' style={{ width: '200px' }} onClick={handleLoginClick}>Submit a request</button>
      </div>
      <RequestModal show={showModal} onClose={handleCloseModal} onSubmit={handleRequestSubmit} />
      <ToastContainer />
    </div>
  );
};

export default StudentDashboard;