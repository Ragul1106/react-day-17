import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailValidation = () => {
  const { id } = useParams();
  let content;

  if (id && !isNaN(Number(id))) {
    content = (
      <p className="text-body fs-5">
        Valid User ID: <span className="fw-bold text-success">{id}</span>
      </p>
    );
  } else {
    content = (
      <div className="alert alert-danger" role="alert">
        <strong className="fw-bold">Error!</strong>
        <span className="ms-2">Invalid User ID provided. Please enter a numeric ID.</span>
      </div>
    );
  }

  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4 text-center">
      <h2 className="mb-3 h2 text-dark">URL Parameter Validation</h2>
      {content}
      <p className="text-muted mt-2">
        (Route defined as `/user-validate/:id`)
      </p>
      <p className="text-secondary mt-2 small">
        Try navigating to `/user-validate/abc` or `/user-validate/456`
      </p>
    </div>
  );
};

export default UserDetailValidation;