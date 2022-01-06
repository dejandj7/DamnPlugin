import React from 'react';
import { CheckboxWrapper } from './Style';

const Checkbox = (props) => {
  const { value, name, handleBlur, handleChange, error, children } = props;
  return (
    <CheckboxWrapper>
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label className="form-check-label" htmlFor="exampleCheck1">
        {children}
      </label>
      {error ? <p>{error}</p> : null}
    </CheckboxWrapper>
  );
};

export default Checkbox;
