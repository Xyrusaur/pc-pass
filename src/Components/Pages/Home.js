import { useState } from 'react';
import LoginModal from '../Utilities/LoginModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='content'>
      <div className='header'>
        <h1>Welcome to the PC-PASS dashboard!</h1>
        <p>Please login below to continue.</p>
        <button className='btn btn-primary' onClick={handleLoginClick}>Login</button>
      </div>
      <LoginModal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;