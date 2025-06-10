import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailDefaultParam = () => {
  const { id } = useParams();

  
  const userId = id || 'Guest User';

  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center"> 
      <h2 className="mb-3 h2 text-dark">User Profile with Default Parameter</h2> 
      <p className="text-body fs-5"> 
        Currently viewing: <span className="fw-bold text-warning">{userId}</span> 
      </p>
      <p className="text-muted mt-2"> 
        (Route defined as `/user-default/:id?`)
      </p>
      <p className="text-secondary mt-2 small"> 
        Try navigating to `/user-default/123` or `/user-default`
      </p>
    </div>
  );
};

export default UserDetailDefaultParam;