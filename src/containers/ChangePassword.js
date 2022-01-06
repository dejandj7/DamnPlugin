import React, { useState, useCallback, useEffect } from 'react'
import { EditProfileWrapper } from './Style'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/form/TextInput'
import Button from '../components/form/Button'
import { views } from '../constants/views'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import appActions from '../store/app/actions'
import { Alert } from 'reactstrap'

const { changePasswordRequest, clearStates } = appActions

const ChangePassword = ({ onClickSetView }) => {
  const { t } = useTranslation()
  const appStore = useSelector((state) => state.app)
  const { user } = appStore
  const dispatch = useDispatch()
  const initialValues = {
    email: user ? user.email : '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const onSubmit = useCallback(
    (values) => {
      dispatch(changePasswordRequest(values))
    },
    [dispatch]
  )

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required(t('This field is required')),
    newPassword: Yup.string()
      .min(6, t('Password must be at least 6 characters'))
      .required(t('This field is required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], t('Passwords do not match'))
      .required(t('This field is required'))
  })

  useEffect(() => {
    clearStates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { isChangePassword, submitting, error } = appStore
    setIsSubmitting(submitting)
    if (isChangePassword) {
      onClickSetView(views.PROFILE)
    }
    if (error) {
      setError(error)
    }
  }, [appStore, onClickSetView])

  return (
    <EditProfileWrapper>
      <div className="add-card-box">
        <div className="header-box">
          <h4>{t('Change password')}</h4>
          <div
            className="close-button"
            onClick={() => onClickSetView(views.VIEW_PROFILE)}
          >
            <i className="fa fa-close"></i>
          </div>
        </div>
        <div className="form-wrapper">
          <p>{t('Type in your old password and the new password')}</p>
          {error ? <Alert color="danger">{JSON.stringify(error)}</Alert> : null}
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
                    type="password"
                    placeholder={t('Current Password')}
                    name="oldPassword"
                    value={values.oldPassword}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={
                      errors.oldPassword && touched.oldPassword
                        ? errors.oldPassword
                        : null
                    }
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('New Password')}
                    name="newPassword"
                    value={values.newPassword}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={
                      errors.newPassword && touched.newPassword
                        ? errors.newPassword
                        : null
                    }
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('Confirm password')}
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
      </div>
    </EditProfileWrapper>
  )
}

export default ChangePassword
