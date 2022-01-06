import React, { useState, useEffect, useCallback } from 'react'
import { RegisterWrapper } from './Style'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/form/TextInput'
import Checkbox from '../components/form/Checkbox'
import Button from '../components/form/Button'
import { views } from '../constants/views'
import { useSelector, useDispatch } from 'react-redux'
import appActions from '../store/app/actions'
import { useTranslation } from 'react-i18next'
import { Alert } from 'reactstrap'

const { registerRequest, setViewAction, clearStates } = appActions

const phoneRegExp = /^(\+\d{1,3})?\s?\(?\d{2,3}\)?[\s.-]?\d{3}[\s.-]?\d{3,4}$/ ///^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const Register = ({ onClickSetView }) => {
  const dispatch = useDispatch()
  const appStore = useSelector((state) => state.app)
  const initialValues = {
    activationUrl: `${window.location.origin}/skopje/en/user-account/`,
    cultureInfo: 'en-US',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    msisdn: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    terms: ''
  }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t } = useTranslation()
  const [error, setError] = useState('')

  const onSubmit = useCallback(
    (values) => {
      dispatch(registerRequest(values))
    },
    [dispatch]
  )

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('Enter a valid email'))
      .required(t('Email is required')),
    confirmEmail: Yup.string()
      .email(t('Enter a valid email'))
      .oneOf([Yup.ref('email'), null], t('Email addresses do not match'))
      .required(t('Confirm Email is required')),
    password: Yup.string()
      .min(6, t('Password must be at least 6 characters'))
      .required(t('Password is required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], t('Passwords do not match'))
      .required(t('Confirm password is required')),
    terms: Yup.bool()
      .oneOf([true], t('You must agree to the terms and conditions!'))
      .required(t('You must agree to the terms and conditions!')),
    firstName: Yup.string()
      .min(2, t('First name is too short!'))
      .max(50, t('First name is too long!'))
      .required(t('This field is required')),
    lastName: Yup.string()
      .min(2, t('Last name is too short!'))
      .max(50, t('Last name is too long!'))
      .required(t('This field is required')),
    msisdn: Yup.string()
      .matches(
        phoneRegExp,
        t(
          'Please enter a valid phone number.'
        )
      )
      .min(10, t('Phone number is too short!'))
      .max(17, t('Phone number is too long!'))
  })

  useEffect(() => {
    dispatch(clearStates())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { submitting, isRegistered, error } = appStore
    setIsSubmitting(submitting)
    if (isRegistered) {
      dispatch(setViewAction(views.LOGIN))
    }
    if (error && error.response) {
      setError(error.response.data)
    }
  }, [appStore, dispatch])

  return (
    <RegisterWrapper>
      <div className="form-container shadow-sm p-3 mb-5">
        <div className="header-box">
          <h4>{t('Register Person')}</h4>
          {error ? <Alert color="danger">{error}</Alert> : null}
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
                    type="email"
                    placeholder={t('Confirm Email Address')}
                    name="confirmEmail"
                    value={values.confirmEmail}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={
                      errors.confirmEmail && touched.confirmEmail
                        ? errors.confirmEmail
                        : null
                    }
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
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('First Name')}
                    name="firstName"
                    value={values.firstName}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : null
                    }
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('Last Name')}
                    name="lastName"
                    value={values.lastName}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={
                      errors.lastName && touched.lastName
                        ? errors.lastName
                        : null
                    }
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('Mobile Number')}
                    name="msisdn"
                    value={values.msisdn}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={
                      errors.msisdn && touched.msisdn ? errors.msisdn : null
                    }
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('Address')}
                    name="address"
                    value={values.address}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('City')}
                    name="city"
                    value={values.city}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('Zip')}
                    name="zip"
                    value={values.zip}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('Country')}
                    name="country"
                    value={values.country}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
                <div className="mb-3 form-check">
                  <Checkbox
                    value={values.terms}
                    name="terms"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={errors.terms && touched.terms ? errors.terms : null}
                  >
                    {t('I agree with the Terms and Conditions of this service')}{' '}
                    <a href="http://topup.skopska.mk/Downloads/%d0%a3%d1%81%d0%bb%d0%be%d0%b2%d0%b8_%d0%bd%d0%b0_%d1%83%d0%bf%d0%be%d1%82%d1%80%d0%b5%d0%b1%d0%b0.pdf">
                      {t('Terms and Conditions')}
                    </a>
                  </Checkbox>
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
            {t('Already registered?')}{' '}
            <span
              className="login-link"
              onClick={() => onClickSetView(views.LOGIN)}
              rel="noreferrer"
            >
              {t('Log in')}
            </span>
          </p>
        </div>
      </div>
    </RegisterWrapper>
  )
}

export default Register
