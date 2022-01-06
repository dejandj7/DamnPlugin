import React, { useState, useEffect, useCallback } from 'react'
import { VerificationWrapper } from './Style'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/form/TextInput'
import Button from '../components/form/Button'
import { useTranslation } from 'react-i18next'
import appActions from '../store/app/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Alert } from 'reactstrap'
import { views } from '../constants/views'

const { resetPasswordRequest, clearStates } = appActions

const ResetPassword = ({ onClickSetView }) => {
  const appStore = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useTranslation()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const onSubmit = useCallback(
    (values) => {
      dispatch(resetPasswordRequest(values))
    },
    [dispatch]
  )

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('Enter a valid email'))
      .required(t('Email is required')),
    password: Yup.string()
      .min(6, t('Password must be at least 6 characters'))
      .required(t('Password is required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('Passwords do not match'))
      .required(t('Confirm password is required'))
  })

  useEffect(() => {
    const t = new URL(window.location.href).searchParams.get('t')
    const page = new URL(window.location.href).searchParams.get('page')
    dispatch(clearStates())
    // Clear query strings
    if (t || page) {
      window.location.search = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { submitting, isResetPassword, error } = appStore
    setIsSubmitting(submitting)
    if (isResetPassword) {
      setSuccess(isResetPassword)
    }
    if (error && error.response) {
      setError(error.response.data)
    }
  }, [appStore, dispatch])

  return (
    <VerificationWrapper>
      <div className="login-container shadow-sm">
        <div className="header">
          <h4>{t('Reset password')}</h4>
          {error ? <Alert color="danger">{error}</Alert> : null}
          {success ? (
            <Alert color="success">
              {t(
                'Your password has been reset successfully. You can now login with new password'
              )}
            </Alert>
          ) : null}
        </div>
        <div className="form-wrapper">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => onSubmit(values)}
            validationSchema={validationSchema}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <TextInput
                    type="email"
                    placeholder={t('Email Address')}
                    name="email"
                    value={values.email}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={errors.email && touched.email ? errors.email : null}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="password"
                    placeholder={t('Password')}
                    name="password"
                    value={values.password}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="password"
                    placeholder={t('Confirm Password')}
                    name="confirmPassword"
                    value={values.confirmPassword}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : null
                    }
                  />
                </div>
                <div className="mt-4">
                  <Button
                    title={t('Submit')}
                    type="submit"
                    loading={isSubmitting}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="login-box">
          <p>
            <span
              className="login-link"
              onClick={() => onClickSetView(views.LOGIN)}
            >
              {t('Log in')}
            </span>
          </p>
        </div>
      </div>
    </VerificationWrapper>
  )
}

export default ResetPassword
