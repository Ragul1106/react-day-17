import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailMultiParam = () => {
  const { id, name } = useParams();

  if (!id || !name) {
    return (
      <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center"> 
        <h2 className="mb-3 h2 text-dark">Incomplete Route Parameters</h2> 
        <p className="text-body text-danger"> 
          {!id && "Missing User ID"}
          {!id && !name && " and "}
          {!name && "Missing User Name"}
        </p>
        <p className="text-muted mt-2"> 
          Expected route format: <code className="bg-light p-1 rounded">/user/:id/:name</code> 
        </p>
      </div>
    );
  }

  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center"> 
      <h2 className="mb-3 h2 text-dark">User Profile with Multiple Parameters</h2> 
      <p className="text-body"> 
        User ID: <span className="fw-bold text-primary">{id}</span> 
      </p>
      <p className="text-body"> 
        User Name: <span className="fw-bold text-success">{decodeURIComponent(name)}</span> 
      </p>
      <p className="text-muted mt-2"> 
        (Route defined as <code className="bg-light p-1 rounded">/user/:id/:name</code>) 
      </p>
    </div>
  );
};

export default UserDetailMultiParam;