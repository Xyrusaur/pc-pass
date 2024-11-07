import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ show, onClose }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'teacher' && password === 'teacher') {
      navigate('/teacherdashboard');
    } else {
      navigate('/studentdashboard');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input 
              type="text" 
              placeholder="Enter your username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <button className="btn btn-close" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default LoginModal;
