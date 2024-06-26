// src/TermsAndConditions.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    // Logic to save the acceptance, e.g., calling an API or updating user metadata
    // For now, we'll just redirect to the success page
    navigate('/success');
  };

  return (
    <div>
      <h1>Terms and Conditions</h1>
      <p>Mediacorp Terms and Conditions. Here are the terms and conditions which you MUST accept before proceeding. </p>
      {/* Add more terms and conditions content here */}
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default TermsAndConditions;
