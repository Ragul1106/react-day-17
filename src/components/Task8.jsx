import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProgrammaticNavigation = () => {
  const navigate = useNavigate();
  const [userIdInput, setUserIdInput] = useState('');
  const [userNameInput, setUserNameInput] = useState('');


  const [modalMessage, setModalMessage] = useState(null);


  const showAlert = (message) => {
    setModalMessage(message);
  };

 
  const closeModal = () => {
    setModalMessage(null);
  };

  const handleNavigateToUser = () => {
    if (userIdInput) {
      navigate(`/user/${userIdInput}`);
    } else {
    
      showAlert("Please enter a User ID for basic navigation.");
    }
  };

  const handleNavigateToMultiParamUser = () => {
    if (userIdInput && userNameInput) {
      navigate(`/user/${userIdInput}/${userNameInput}`);
    } else {
     
      showAlert("Please enter both User ID and User Name for multi-parameter navigation.");
    }
  };

  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center"> 
      <h2 className="mb-3 h2 text-dark">Programmatic Navigation with `useNavigate()`</h2> {/* Bootstrap heading, margin-bottom, text color */}
      <p className="text-body mb-4"> 
        Enter a User ID and/or Name to navigate programmatically.
      </p>

      <div className="d-grid gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter User ID"
          value={userIdInput}
          onChange={(e) => setUserIdInput(e.target.value)}
          className="form-control form-control-lg" 
        />
        <button
          onClick={handleNavigateToUser}
          className="btn btn-primary btn-lg shadow-sm" 
        >
          Navigate to Basic User Profile
        </button>

        <input
          type="text"
          placeholder="Enter User Name (for multi-param)"
          value={userNameInput}
          onChange={(e) => setUserNameInput(e.target.value)}
          className="form-control form-control-lg" 
        />
        <button
          onClick={handleNavigateToMultiParamUser}
          className="btn btn-info btn-lg shadow-sm" 
        >
          Navigate to Multi-Param User Profile
        </button>
      </div>

      {modalMessage && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body text-center p-4">
                <p className="fw-semibold h5 mb-3 text-dark">{modalMessage}</p> 
                <button
                  onClick={closeModal}
                  className="btn btn-danger" 
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgrammaticNavigation;