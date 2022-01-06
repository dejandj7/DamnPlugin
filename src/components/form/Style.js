import styled from 'styled-components'

const TextInputWrapper = styled.div`
  .form-control {
    border-radius: 3px;
    border: 1px solid #e0e0e0 !important;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    color: #222 !important;
    font-weight: 400;

    &::placeholder {
      font-size: 0.95rem;
      color: #888;
      font-weight: 300;
    }
  }
  p {
    color: #ff0000;
    font-size: 0.8rem;
  }
`

const CheckboxWrapper = styled.div`
  .form-check-input {
    border-radius: 3px;

    &:checked {
      background-color: #a20c25;
      border-color: #a20c25;
    }
  }

  .form-check-label {
    font-weight: 700;
    font-size: 0.85rem;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #a20c25;
    }
  }

  p {
    color: #ff0000;
    font-size: 0.8rem;
  }
`

const ButtonWrapper = styled.div`
  .btn {
    border: 1px solid #a20c25;
    background-color: #a20c25;
    color: #fff;
    border-radius: 3px;
    padding: 0.3rem 5rem 0.3rem 5rem;
    font-weight: 300;
    width: 100%;
  }
`

const SelectWrapper = styled.div`
  .form-control {
    border-radius: 3px;
    border: 1px solid #e0e0e0 !important;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    color: #222 !important;
    font-weight: 400;

    .title {
      font-size: 0.95rem;
      color: #888;
      font-weight: 300;
    }
  }
  p {
    color: #ff0000;
    font-size: 0.8rem;
  }
`

export { TextInputWrapper, CheckboxWrapper, ButtonWrapper, SelectWrapper }
