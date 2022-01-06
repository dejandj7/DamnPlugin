import React from 'react';
import { VerificationContainer, LoadingContainer } from './Style';

const VerificationSuccess = () => {
  return (
    <VerificationContainer>
      <div className="login-container shadow-sm">
        <h2>Account Verified</h2>
        <p>
          Nice! We have successfully verified your account. Go ahead and login
          with password you used to sign up.
        </p>
        <LoadingContainer>
          <div className="fa fa-spinner fa-spin fa-fw text-center">
            <span className="sr-only">Loading...</span>
          </div>
          <h6>Redirecting to login...please wait..</h6>
        </LoadingContainer>
      </div>
    </VerificationContainer>
  );
};

export default VerificationSuccess;
