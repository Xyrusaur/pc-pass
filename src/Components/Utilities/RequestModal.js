import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RequestModal = ({ show, onClose, onSubmit }) => {
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [otherText, setOtherText] = useState('');

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    navigate('/studentdashboard');
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Submit a request</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Reason: </label>
            <select value={reason} onChange={handleReasonChange} required>
              <option value="" disabled>Select a reason</option>
              <option value="reason1">Reason 1</option>
              <option value="reason2">Reason 2</option>
              <option value="reason3">Reason 3</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          {reason === 'other' && (
            <div className="form-group">
              <label>Specify Reason: </label>
              <input 
                type="text" 
                value={otherText} 
                onChange={(e) => setOtherText(e.target.value)} 
                placeholder="Please specify your reason" 
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <button className="btn btn-close" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default RequestModal;
