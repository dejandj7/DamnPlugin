import React from 'react'
import { ButtonWrapper } from './Style'

const Button = (props) => {
  const { title, type, loading } = props
  return (
    <ButtonWrapper>
      <button
        className={`btn ${loading ? 'new-btn' : 'pressed-btn'}`}
        type={type}
        disabled={loading}
      >
        {loading ? <i className="fa fa-spinner fa-spin"></i> : null} {title}
      </button>
    </ButtonWrapper>
  )
}

export default Button
