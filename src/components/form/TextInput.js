import React from 'react';
import { TextInputWrapper } from './Style';

const TextInput = (props) => {
  const { type, placeholder, name, value, handleChange, handleBlur, error } =
    props;

  return (
    <TextInputWrapper>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error ? <p>{error}</p> : null}
    </TextInputWrapper>
  );
};

export default TextInput;
