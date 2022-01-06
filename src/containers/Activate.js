import React, { useEffect, useCallback, useState } from 'react'
import { RegisterWrapper } from './Style'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/form/TextInput'
import Button from '../components/form/Button'
import { views } from '../constants/views'
import { useSelector, useDispatch } from 'react-redux'
import appActions from '../store/app/actions'
import { Alert } from 'reactstrap'
import { useTranslation } from 'react-i18next'

const { activateRequest, clearStates, setViewAction } = appActions

const Activate = ({ onClickSetView }) => {
  const dispatch = useDispatch()
  const appStore = useSelector((state) => state.app)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const { t } = useTranslation()

  const initialValues = {
    email: '',
    password: ''
  }

  const onSubmit = useCallback(
    (values) => {
      if (!appStore.submitting && !appStore.loading) {
        dispatch(activateRequest(values))
      }
    },
    [dispatch, appStore]
  )

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('Enter a valid email'))
      .required(t('Email is required')),
    password: Yup.string().required(t('Password is required'))
  })

  useEffect(() => {
    dispatch(clearStates())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { submitting, isAuthenticated, token, error } = appStore
    setIsSubmitting(submitting)
    if (error) {
      setError(appStore.error)
    }
    if (isAuthenticated && token) {
      dispatch(setViewAction(views.PROFILE))
    }
  }, [appStore, dispatch])

  return (
    <RegisterWrapper>
      <div className="form-container shadow-sm p-3 mb-5">
        <div className="header-box">
          <h4>{t('Activate Account')}</h4>
        </div>
        <div className="form-wrapper">
          <p>{t('Enter your credentials to activate your account')}</p>
          {error ? <Alert color="danger">{error}</Alert> : null}
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
                <div className="mt-4">
                  <Button
                    title={t('Activate My Account')}
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
            {t('Already activated?')}
            <span
              className="login-link"
              onClick={() => onClickSetView(views.LOGIN)}
            >
              {' '}
              {t('Login here')}
            </span>
          </p>
        </div>
      </div>
    </RegisterWrapper>
  )
}

export default Activate
