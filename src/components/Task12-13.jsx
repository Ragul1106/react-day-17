import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserFetcher = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setUserData(null);
    setError(null);

    const fetchUser = async () => {

      await new Promise(resolve => setTimeout(resolve, 800));

      const mockUsers = {
        '101': { name: 'John Doe', email: 'john.doe@example.com', bio: 'A passionate developer.' },
        '202': { name: 'Jane Smith', email: 'jane.smith@example.com', bio: 'Loves hiking and coding.' },
        '303': { name: 'Peter Jones', email: 'peter.j@example.com', bio: 'Enjoys learning new technologies.' },
      };

      if (mockUsers[id]) {
        setUserData(mockUsers[id]);
      } else {
        setError('User not found.');
      }
      setLoading(false);
    };

    fetchUser();
    return () => {
      console.log(`Cleaning up data for user ID: ${id}`);
    };
  }, [id]);

  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center">
      <h2 className="mb-3 h2 text-dark">Fetch User Data & Cleanup</h2>
      <p className="text-body fs-5 mb-4">
        Fetching data for User ID: <span className="fw-bold text-info">{id}</span>
      </p>

      {loading && (
        <div className="d-flex justify-content-center align-items-center my-4">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span className="ms-3 text-info">Loading user data...</span>
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          <strong className="fw-bold">Error:</strong>
          <span className="ms-2">{error}</span>
        </div>
      )}

      {userData && !loading && (
        <div className="text-start mt-4 p-3 border border-light rounded bg-light">
          <h3 className="h5 text-dark mb-2">{userData.name}</h3>
          <p className="text-body mb-1">Email: {userData.email}</p>
          <p className="text-body">Bio: {userData.bio}</p>
        </div>
      )}
      <p className="text-muted mt-2 small">
        (Data fetching simulated based on route parameter. Check console for cleanup messages.)
      </p>
    </div>
  );
};

export default UserFetcher;