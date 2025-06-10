import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center">
        <h2 className="mb-3 h2 text-dark">User Not Found</h2>
        <p className="text-body">
          No user ID specified in the URL or an unexpected route was accessed.
        </p>
      </div>
    );
  }

  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center">
      <h2 className="mb-3 h2 text-dark">Basic User Profile</h2>
      <p className="text-body">
        You are viewing the profile for User ID: <span className="fw-bold text-primary">{id}</span>
      </p>
      <p className="text-muted mt-2">
        (Route defined as `/user/:id`)
      </p>
    </div>
  );
};

export default UserDetail;