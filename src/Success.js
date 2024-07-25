import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

function Success() {
  return (
    <div className="success-container">
      <h2>Submission Successful!</h2>
      <p>Your information has been submitted successfully.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default Success;
