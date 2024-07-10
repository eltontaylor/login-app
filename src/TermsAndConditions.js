// src/TermsAndConditions.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const [acceptTerms1, setAcceptTerms1] = useState(false);
  const [acceptTerms2, setAcceptTerms2] = useState(false);
  const [acceptTerms3, setAcceptTerms3] = useState(false);

  const handleAccept = () => {
    if (acceptTerms1 && acceptTerms2 && acceptTerms3) {
      // Logic to save the acceptance, e.g., calling an API or updating user metadata
      // For now, we'll just redirect to the success page
      navigate('/success');
    } else {
      alert('You must accept all terms and conditions to proceed.');
    }
  };

  return (
    <div>
      <h1>Terms and Conditions</h1>
      <div>
        <input
          type="checkbox"
          id="terms1"
          checked={acceptTerms1}
          onChange={() => setAcceptTerms1(!acceptTerms1)}
        />
        <label htmlFor="terms1">Receive news, updates and promotions from MediaCorp</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="terms2"
          checked={acceptTerms2}
          onChange={() => setAcceptTerms2(!acceptTerms2)}
        />
        <label htmlFor="terms2">Receive promotions from MediaCorp partners</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="terms3"
          checked={acceptTerms3}
          onChange={() => setAcceptTerms3(!acceptTerms3)}
        />
        <label htmlFor="terms3">The products or services provided are not intended for persons residing in the EU. By creating a new MeConnect account, you agree to our Terms and Conditions.</label>
      </div>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default TermsAndConditions;
/*

// src/TermsAndConditions.js - ACCEPT button only

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
      {/* Add more terms and conditions content here }
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default TermsAndConditions;
*/