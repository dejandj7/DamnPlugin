import React from 'react';
import { VerificationContainer, VerificationButtonLink } from './Style';

const RegisterSuccess = () => {
  return (
    <VerificationContainer>
      <div className="login-container shadow-sm">
        <h2>Your sign up was successful</h2>
        <p>
          We have sent a verification email to the email address you provided
          during the sign up. Kindly check your email and click on the link
          there to verify your account.
        </p>
        <VerificationButtonLink>
          <a href="#jsp">
            <button className="btn"> Proceed to Login</button>
          </a>
        </VerificationButtonLink>
      </div>
    </VerificationContainer>
  );
};

export default RegisterSuccess;
