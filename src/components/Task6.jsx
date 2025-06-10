import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailOptionalParam = () => {
  const { id } = useParams();

  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center"> 
      <h2 className="mb-3 h2 text-dark">User Profile with Optional Parameter</h2> 
      <p className="text-body"> 
        User ID: <span className="fw-bold text-info">{id ? id : 'Not Provided'}</span> 
      </p>
      <p className="text-muted mt-2"> 
        (Route defined as `/user-optional/:id?`)
      </p>
      <p className="text-secondary mt-2 small"> 
        Try navigating to `/user-optional/123` or `/user-optional`
      </p>
    </div>
  );
};

export default UserDetailOptionalParam;