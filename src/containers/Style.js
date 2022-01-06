import styled from 'styled-components'

const LayoutWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const RegisterWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 2rem;

  .form-container {
    border: 1px solid #eeeeee;
    padding: 2rem;
    width: 50%;

    .header-box {
      text-align: center;
      border-bottom: 1px solid #eeeeee;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      padding-top: 2rem;
      background: #a20c25;
      h4 {
        font-size: 1.5rem;
        color: #fff;
        font-weight: 400;
      }
    }

    .login-box {
      margin-top: 1rem;
      p {
        font-size: 0.85rem;
        font-weight: 700;

        .login-link {
          text-decoration: none;
          color: #a20c25;
          font-weight: 400;
          transition: 0.5s all ease-in-out;
          cursor: pointer;

          &:hover {
            margin-bottom: 0.8rem;
            border-bottom: 1px solid #a20c25;
          }
        }
      }
    }
  }

  @media (min-width: 320px) {
    .form-container {
      border: 1px solid #eeeeee;
      padding: 2rem;
      width: 100%;
    }
  }

  @media (min-width: 428px) {
    .form-container {
      border: 1px solid #eeeeee;
      padding: 2rem;
      width: 100%;
    }
  }

  @media (min-width: 576px) {
    .form-container {
      border: 1px solid #eeeeee;
      padding: 2rem;
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .form-container {
      border: 1px solid #eeeeee;
      padding: 2rem;
      width: 50%;
    }
  }

  @media (min-width: 992px) {
    .form-container {
      border: 1px solid #eeeeee;
      padding: 2rem;
      width: 50%;
    }
  }

  @media (min-width: 1200px) {
    .form-container {
      border: 1px solid #eeeeee;
      padding: 2rem;
      width: 50%;
    }
  }
`

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 100vh;
  flex-wrap: wrap;

  .login-container {
    display: flex;
    justify-content: center;
    border: 1px solid #eeeeee;
    width: 50%;
    flex-wrap: wrap;

    .fields {
      width: 50%;
      padding: 2rem;
      border-right: 2px solid #eeeeee;
      background: #fafafa;
      height: 400px;
      .header {
        margin-bottom: 2rem;
        h4 {
          font-size: 1.5rem;
          color: #a20c25;
          font-weight: 400;
        }
      }

      .login-box {
        margin-top: 1rem;
        p {
          font-size: 0.85rem;
          font-weight: 700;

          .login-link {
            text-decoration: none;
            color: #a20c25;
            font-weight: 400;
            transition: 0.5s all ease-in-out;
            cursor: pointer;

            &:hover {
              margin-bottom: 0.8rem;
              border-bottom: 1px solid #a20c25;
            }
          }
        }
      }
    }

    .enroll {
      width: 50%;
      display: flex;
      justify-content: center;
      height: 400px;
      align-items: center;

      .btn-container {
        .btn {
          border: 1px solid #a20c25;
          background-color: #a20c25;
          color: #fff;
          border-radius: 3px;
          padding: 1rem 2rem 1rem 2rem;
          font-weight: 300;
          text-transform: uppercase;
        }
      }
    }
  }

  @media (min-width: 320px) {
    .login-container {
      display: block;
      margin: 0 auto;
      width: 100%;

      .fields {
        width: 100%;
      }

      .enroll {
        width: 100%;
      }
    }
  }

  @media (min-width: 428px) {
    .login-container {
      display: block;
      margin: 0 auto;
      width: 100%;

      .fields {
        width: 100%;
      }

      .enroll {
        width: 100%;
      }
    }
  }

  @media (min-width: 576px) {
    .login-container {
      display: block;
      margin: 0 auto;
      width: 100%;

      .fields {
        width: 100%;
      }

      .enroll {
        width: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    .login-container {
      display: block;
      margin: 0 auto;
      width: 100%;

      .fields {
        width: 100%;
      }

      .enroll {
        width: 100%;
      }
    }
  }

  @media (min-width: 992px) {
    .login-container {
      display: flex;
      justify-content: center;
      border: 1px solid #eeeeee;
      width: 50%;
      flex-wrap: wrap;

      .fields {
        width: 50%;
      }

      .enroll {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    .login-container {
      display: flex;
      justify-content: center;
      border: 1px solid #eeeeee;
      width: 50%;
      flex-wrap: wrap;

      .fields {
        width: 50%;
      }

      .enroll {
        width: 50%;
      }
    }
  }
`

const VerificationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 100vh;
  flex-wrap: wrap;

  .login-container {
    border: 1px solid #eeeeee;
    width: 50%;
    padding: 2rem;
    background: #fafafa;

    .header {
      margin-bottom: 1rem;
      margin-top: 0.5rem;
      h4 {
        font-size: 1.5rem;
        color: #a20c25;
        font-weight: 400;
      }
    }

    .form-wrapper {
    }
  }

  .login-box {
    margin-top: 1rem;
    p {
      font-size: 0.85rem;
      font-weight: 700;

      .login-link {
        text-decoration: none;
        color: #a20c25;
        font-weight: 400;
        transition: 0.5s all ease-in-out;
        cursor: pointer;

        &:hover {
          margin-bottom: 0.8rem;
          border-bottom: 1px solid #a20c25;
        }
      }
    }
  }

  @media (min-width: 280px) {
    .login-container {
      width: 100%;
    }
  }

  @media (min-width: 320px) {
    .login-container {
      width: 100%;
    }
  }

  @media (min-width: 428px) {
    .login-container {
      width: 100%;
    }
  }

  @media (min-width: 576px) {
    .login-container {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .login-container {
      width: 80%;
    }
  }

  @media (min-width: 992px) {
    .login-container {
      width: 80%;
    }
  }

  @media (min-width: 1200px) {
    .add-card-box {
      width: 50%;
    }
  }
`
const LoadingContainer = styled.div`
  color: #a20c25;
  font-size: 2rem;
  text-align: center;

  h6 {
    color: #a20c25;
    font-size: 0.9rem;
    font-weight: 300;
  }
`

const VerificationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 100vh;
  flex-wrap: wrap;

  .login-container {
    background: #fafafa;
    padding: 2rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.3rem;
      font-weight: 400;
      color: #a20c25;
      margin-left: 1rem;
    }

    p {
      font-size: 1rem;
      text-align: left;
      line-height: 1.5rem;
      font-weight: 300;
      margin-left: 1rem;
    }
  }
`

const VerificationButtonLink = styled.div`
  text-align: left;
  margin-left: 1rem;

  .btn {
    background: #a20c25;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 300;
  }
`

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  align-items: center;
  flex-wrap: wrap;

  .profile-box {
    display: flex;
    justify-content: start;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    width: 70%;
    flex-wrap: wrap;
    background: #fafafa;
    margin-top: 10rem;
    padding: 2rem;

    .profile {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      width: 100%;
      padding-bottom: 2rem;
      border-bottom: 1px solid #eeeeee;

      .profile-image {
        width: 20%;

        img {
          cursor: pointer;
        }
      }

      .profile-details {
        width: 80%;
        margin-top: 0.8rem;
        h4 {
          font-size: 2rem;
          font-weight: 300;
        }
        h6 {
          font-weight: 700;
        }
        h3 {
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          color: #a20c25;

          span {
            color: #a20c25;
          }
        }
      }
    }

    .card-box {
      display: flex;
      justify-content: start;
      margin-top: 2rem;
      margin-right: 10px;

      .add-card {
        width: 20rem;
        height: 10rem;
        border: 1px solid #eeeeee;
        padding: 0.2rem;
        background: #fff;
        cursor: pointer;
        border-radius: 2px;
        .inner-card {
          border: 1px solid #eeeeee;
          display: flex;
          justify-content: center;
          height: 100%;
          align-items: center;
          background: #e0e0e0;
        }
        .inner-card-alt {
          background: rgb(162, 12, 37);
          background: linear-gradient(
            90deg,
            rgba(162, 12, 37, 1) 0%,
            rgba(162, 12, 37, 1) 0%,
            rgba(34, 34, 34, 1) 100%
          );
          border: none;

          text-align: center;
          display: flex;
          justify-content: center;
          flex-direction: row;
          height: 100%;
          align-items: center;
          svg {
            color: #fff;
          }
          h4 {
            color: #fff;
            font-size: 15px;
          }
        }
      }

      .spinner-border {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`

const AddCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  flex-wrap: wrap;

  .add-card-box {
    display: block;
    border: 1px solid #eeeeee;
    width: 30%;
    background: #fff;
    margin-top: 10rem;
    padding: 2rem;
    border-radius: 5px;

    .header-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      h4 {
        color: #757575;
        font-size: 1.2rem;
      }
      .close-button {
        i {
          font-size: 1.2rem;
          color: #a20c25;
          cursor: pointer;
        }
      }
    }
  }

  @media (min-width: 280px) {
    .add-card-box {
      width: 100%;
    }
  }

  @media (min-width: 320px) {
    .add-card-box {
      width: 100%;
    }
  }

  @media (min-width: 428px) {
    .add-card-box {
      width: 100%;
    }
  }

  @media (min-width: 576px) {
    .add-card-box {
      width: 80%;
    }
  }

  @media (min-width: 768px) {
    .add-card-box {
      width: 80%;
    }
  }

  @media (min-width: 992px) {
    .add-card-box {
      width: 50%;
    }
  }

  @media (min-width: 1200px) {
    .add-card-box {
      width: 30%;
    }
  }
`
const ViewProductWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  flex-wrap: wrap;

  .card-box {
    display: block;
    border: 1px solid #eeeeee;
    width: 50%;
    background: #fff;
    margin-top: 10rem;
    padding: 2rem;
    border-radius: 5px;

    .header-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 1rem;
      h4 {
        color: #222;
        font-size: 1.5rem;
        font-weight: 400;
      }
      .close-button {
        i {
          font-size: 1.2rem;
          color: #a20c25;
          cursor: pointer;
        }
      }
    }

    .card-details {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .justify-content-between {
        justify-content: space-between !important;
      }

      .align-items-start {
        align-items: flex-start !important;
      }

      .list-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;

        .list-group.numbered {
          list-style-type: none;
          counter-reset: section;

          > li:before {
            content: counters(section, '.') '. ';
            counter-increment: section;
          }
        }
      }

      .list-group-item {
        font-size: 1rem;
        position: relative;
        display: flex;
        padding: 0.5rem 1rem;
        color: #212529;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        transition: all ease-in-out 1s;

        &:hover {
          background-color: #ddd;
        }

        &:first-child {
          border-top-left-radius: inherit;
          border-top-right-radius: inherit;
        }
        .productName,
        .amount {
          font-weight: 700;
        }
        .purchaseBtn {
          background-color: #a20c25;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          i {
            font-size: 1rem;
            color: #fff;
            cursor: pointer;
          }
        }
      }

      .labels {
        width: 40%;
        text-align: right;

        p {
          font-size: 0.9rem;
          font-weight: 700;
        }

        .btn {
          border: 1px solid #a20c25;
          margin-top: 1rem;
          background: #a20c25;
          color: #fff;
          font-size: 0.85rem;
          padding: 0.5rem 1.2rem 0.5rem 1.2rem;
          font-weight: 300;
          text-transform: uppercase;
        }
      }

      .values {
        width: 60%;
        text-align: left;
        padding-left: 3rem;

        p {
          font-size: 0.9rem;
          font-weight: 400;
          color: #616161;
        }

        .btn {
          border: 1px solid #a20c25;
          margin-top: 1rem;
          background: #a20c25;
          color: #fff;
          font-size: 0.85rem;
          padding: 0.5rem 1.2rem 0.5rem 1.2rem;
          font-weight: 300;
          text-transform: uppercase;
        }
      }
    }
  }

  @media (min-width: 280px) {
    .card-box {
      width: 100%;
    }
  }

  @media (min-width: 320px) {
    .card-box {
      width: 100%;
    }
  }

  @media (min-width: 428px) {
    .card-box {
      width: 100%;
    }
  }

  @media (min-width: 576px) {
    .card-box {
      width: 80%;
    }
  }

  @media (min-width: 768px) {
    .card-box {
      width: 80%;
    }
  }

  @media (min-width: 992px) {
    .card-box {
      width: 80%;
    }
  }

  @media (min-width: 1200px) {
    .card-box {
      width: 50%;
    }
  }
`

const ViewProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  flex-wrap: wrap;

  .card-box {
    display: block;
    border: 1px solid #eeeeee;
    width: 50%;
    background: #fff;
    margin-top: 10rem;
    padding: 2rem;
    border-radius: 5px;

    .header-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 1rem;
      h4 {
        color: #222;
        font-size: 1.5rem;
        font-weight: 400;
      }
      .close-button {
        i {
          font-size: 1.2rem;
          color: #a20c25;
          cursor: pointer;
        }
      }
    }

    .card-details {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .labels {
        width: 40%;
        text-align: right;

        p {
          font-size: 0.9rem;
          font-weight: 700;
        }

        .btn {
          border: 1px solid #a20c25;
          margin-top: 1rem;
          background: #a20c25;
          color: #fff;
          font-size: 0.85rem;
          padding: 0.5rem 1.2rem 0.5rem 1.2rem;
          font-weight: 300;
          text-transform: uppercase;
        }
      }

      .values {
        width: 60%;
        text-align: left;
        padding-left: 3rem;

        p {
          font-size: 0.9rem;
          font-weight: 400;
          color: #616161;
        }

        .btn {
          border: 1px solid #a20c25;
          margin-top: 1rem;
          background: #a20c25;
          color: #fff;
          font-size: 0.85rem;
          padding: 0.5rem 1.2rem 0.5rem 1.2rem;
          font-weight: 300;
          text-transform: uppercase;
        }
      }
    }
  }

  @media (min-width: 280px) {
    .card-box {
      width: 100%;
    }
  }

  @media (min-width: 320px) {
    .card-box {
      width: 100%;
    }
  }

  @media (min-width: 428px) {
    .card-box {
      width: 100%;
    }
  }

  @media (min-width: 576px) {
    .card-box {
      width: 80%;
    }
  }

  @media (min-width: 768px) {
    .card-box {
      width: 80%;
    }
  }

  @media (min-width: 992px) {
    .card-box {
      width: 80%;
    }
  }

  @media (min-width: 1200px) {
    .card-box {
      width: 50%;
    }
  }
`

const EditProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  flex-wrap: wrap;

  .add-card-box {
    display: block;
    border: 1px solid #eeeeee;
    width: 30%;
    background: #fff;
    margin-top: 10rem;
    padding: 2rem;
    border-radius: 5px;

    .header-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid #eee;
      h4 {
        color: #757575;
        font-size: 1.2rem;
      }
      .close-button {
        i {
          font-size: 1.2rem;
          color: #a20c25;
          cursor: pointer;
        }
      }
    }

    .form-wrapper {
      .note {
        color: #757575;
      }
    }
  }

  @media (min-width: 280px) {
    .add-card-box {
      width: 100%;
    }
  }

  @media (min-width: 320px) {
    .add-card-box {
      width: 100%;
    }
  }

  @media (min-width: 428px) {
    .add-card-box {
      width: 100%;
    }
  }

  @media (min-width: 576px) {
    .add-card-box {
      width: 80%;
    }
  }

  @media (min-width: 768px) {
    .add-card-box {
      width: 80%;
    }
  }

  @media (min-width: 992px) {
    .add-card-box {
      width: 50%;
    }
  }

  @media (min-width: 1200px) {
    .add-card-box {
      width: 30%;
    }
  }
`

const ViewCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  flex-wrap: wrap;

  .card-box {
    display: block;
    border: 1px solid #eeeeee;
    width: 50%;
    background: #fff;
    margin-top: 10rem;
    padding: 2rem;
    border-radius: 5px;

    .header-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      border-bottom: 1px solid #eeeeee;
      padding-bottom: 1rem;
      h4 {
        color: #a20c25;
        font-size: 1rem;
        font-weight: 700;
      }
      .close-button {
        i {
          font-size: 1.2rem;
          color: #a20c25;
          cursor: pointer;
        }
      }
    }

    .card-details {
      border-bottom: 1px solid #eeeeee;
      .card-box-small {
        display: flex;
        justify-content: start;
        margin-bottom: 2rem;
        flex: 1;
        .add-card {
          height: 15rem;
          width: 100%;
          border: 1px solid #eeeeee;
          padding: 0.2rem;
          background: #fff;
          cursor: pointer;
          border-radius: 2px;
          .inner-card-alt {
            background: rgb(162, 12, 37);
            background: linear-gradient(
              90deg,
              rgba(162, 12, 37, 1) 0%,
              rgba(162, 12, 37, 1) 0%,
              rgba(34, 34, 34, 1) 100%
            );
            border: none;

            text-align: center;
            display: flex;
            justify-content: center;
            flex-direction: row;
            height: 100%;
            align-items: center;
            svg {
              color: #fff;
            }
            h4 {
              color: #fff;
              font-size: 12px;
            }
            h6 {
              margin-top: 20px;
              color: #fff;
              font-size: 16px;
            }
          }
        }
      }
    }

    .card-footer-alt {
      display: flex;
      justify-content: space-between;
      padding-top: 1rem;

      h4 {
        color: #a20c25;
        font-size: 14px;
        cursor: pointer;
        font-weight: 700;
      }
    }
  }

  @media (min-width: 280px) {
    .card-box {
      width: 100%;
    }
  }

  @media (min-width: 320px) {
    .card-box {
      width: 100%;
    }
  }

  @media (min-width: 428px) {
    .card-box {
      width: 100%;
    }
  }

  @media (min-width: 576px) {
    .card-box {
      width: 80%;
    }
  }

  @media (min-width: 768px) {
    .card-box {
      width: 80%;
    }
  }

  @media (min-width: 992px) {
    .card-box {
      width: 80%;
    }
  }

  @media (min-width: 1200px) {
    .card-box {
      width: 50%;
    }
  }
`

export {
  LayoutWarpper,
  RegisterWrapper,
  LoginWrapper,
  VerificationWrapper,
  LoadingContainer,
  VerificationContainer,
  VerificationButtonLink,
  ProfileWrapper,
  AddCardWrapper,
  ViewProductWrapper,
  ViewProfileWrapper,
  EditProfileWrapper,
  ViewCardWrapper
}
