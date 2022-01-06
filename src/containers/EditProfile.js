import React, { useState, useCallback, useEffect } from 'react'
import { EditProfileWrapper } from './Style'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/form/TextInput'
import Button from '../components/form/Button'
import Select from '../components/form/Select'
import { views } from '../constants/views'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import appActions from '../store/app/actions'
import { Alert } from 'reactstrap'

const { editProfileRequest, clearStates } = appActions

const options = [
  {
    label: 'MK',
    value: 0
  },
  {
    label: 'EN',
    value: 1
  }
]

const EditProfile = ({ onClickSetView }) => {
  const { t } = useTranslation()
  const appStore = useSelector((state) => state.app)
  const { user } = appStore
  const dispatch = useDispatch()
  const initialValues = {
    address: user ? user.address : '',
    city: user ? user.city : '',
    companyName: user ? user.companyName : '',
    country: user ? user.country : '',
    createDate: user ? user.createDate : '',
    cultureInfo: user ? user.cultureInfo : '',
    // email: user ? user.email : '',
    fbToken: user ? user.fbToken : '',
    firstName: user ? user.firstName : '',
    id: user ? user.id : 0,
    identityNumber: user ? user.identityNumber : '',
    lastName: user ? user.lastName : '',
    msisdn: user ? user.msisdn : '',
    password: user ? user.password : '',
    receiveEducational: true,
    receivePromotional: true,
    sipassId: user ? user.sipassId : '',
    state: user ? user.state : '',
    status: user ? user.status : 0,
    taxNumber: user ? user.taxNumber : '',
    type: user ? user.type : 0,
    userName: user ? user.userName : '',
    verified: user ? user.verified : 0,
    zip: user ? user.zip : 0,
    activationUrl: user ? user.activationUrl : ''
  }
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t('This field is required')),
    lastName: Yup.string().required(t('This field is required'))
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const onSubmit = useCallback(
    (values) => {
      dispatch(editProfileRequest(values))
    },
    [dispatch]
  )

  useEffect(() => {
    clearStates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { isEditProfile, submitting, error } = appStore
    setIsSubmitting(submitting)
    if (isEditProfile) {
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
          <h4>{t('Edit profile')}</h4>
          <div
            className="close-button"
            onClick={() => onClickSetView(views.VIEW_PROFILE)}
          >
            <i className="fa fa-close"></i>
          </div>
        </div>
        <div className="form-wrapper">
          <p className="note">{t('Input new data for your profile')}</p>
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
              <Form onSubmit={handleSubmit}>
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
                    placeholder={t('Mobile number')}
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
                    error={
                      errors.address && touched.address ? errors.address : null
                    }
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
                    error={errors.city && touched.city ? errors.city : null}
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
                    error={errors.zip && touched.zip ? errors.zip : null}
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
                    error={
                      errors.country && touched.country ? errors.country : null
                    }
                  />
                </div>
                <div className="mb-3">
                  <Select
                    options={options}
                    name="cultureInfo"
                    value={values.cultureInfo}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={
                      errors.cultureInfo && touched.cultureInfo
                        ? errors.cultureInfo
                        : null
                    }
                    placeholder={t('Language')}
                  />
                </div>

                <div className="mt-4">
                  <Button
                    title={t('Submit')}
                    type="submit"
                    loading={isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </EditProfileWrapper>
  )
}

export default EditProfile
