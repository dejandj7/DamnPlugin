import React from 'react';
import { VerificationContainer, VerificationButtonLink } from './Style';

const VerificationFailure = () => {
  return (
    <VerificationContainer>
      <div className="login-container shadow-sm">
        <h2> Verification Failed</h2>
        <p>
          Oops..unfortunately your email verification was not successful. You
          can login to verify your email.
        </p>
        <VerificationButtonLink>
          <a href="#jsp">
            <button className="btn">Return to Login</button>
          </a>
        </VerificationButtonLink>
      </div>
    </VerificationContainer>
  );
};

export default VerificationFailure;
