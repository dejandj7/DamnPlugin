import React, { useState, useCallback, useEffect } from 'react'
import { VerificationWrapper } from './Style'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/form/TextInput'
import Button from '../components/form/Button'
import { views } from '../constants/views'
import { useTranslation } from 'react-i18next'
import appActions from '../store/app/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Alert } from 'reactstrap'

const { forgottenPasswordRequest, clearStates } = appActions

const BASE_URL = () => {
  const getUrl = window.location
  return `${getUrl.protocol}//${getUrl.host}`
}

const ForgottenPassword = ({ onClickSetView }) => {
  const { t } = useTranslation()
  const appStore = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const initialValues = {
    email: ''
  }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('Enter a valid email'))
      .required(t('Email is required'))
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

  const onSubmit = useCallback(
    (values) => {
      const payload = {
        email: values.email,
        forgotUrl: `${BASE_URL()}?page=passwordreset`,
        culture: 'en'
      }
      dispatch(forgottenPasswordRequest(payload))
    },
    [dispatch]
  )

  useEffect(() => {
    const { submitting, isForgottenPassword, error } = appStore
    setIsSubmitting(submitting)
    if (isForgottenPassword) {
      setSuccess(isForgottenPassword)
    }
    if (error) {
      setError(error)
    }
  }, [appStore, dispatch])

  return (
    <VerificationWrapper>
      <div className="login-container shadow-sm">
        <div className="header">
          <h4>{t('Enter your email address')}</h4>
          {error ? <Alert color="danger">{error.title}</Alert> : null}
          {success ? (
            <Alert color="success">
              {t(
                'An email has been sent to you for instructions to reset password'
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
            {t('Remembered password?')}{' '}
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

export default ForgottenPassword
