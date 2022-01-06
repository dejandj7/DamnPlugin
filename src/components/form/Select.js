import React from 'react'
import { SelectWrapper } from './Style'
import { useTranslation } from 'react-i18next'

const Select = (props) => {
  const { name, value, handleChange, handleBlur, error, options, placeholder } =
    props
  const { t } = useTranslation()
  return (
    <SelectWrapper>
      <select
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option>--{placeholder}--</option>
        {options.map((o) => (
          <option value={o.value} key={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error ? <p>{error}</p> : null}
    </SelectWrapper>
  )
}

export default Select
