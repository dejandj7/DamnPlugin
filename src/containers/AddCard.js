import React, { useState, useEffect, useCallback } from 'react'
import { AddCardWrapper } from './Style'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/form/TextInput'
import Button from '../components/form/Button'
import Select from '../components/form/Select'
import { views } from '../constants/views'
import { useSelector, useDispatch } from 'react-redux'
import appActions from '../store/app/actions'
import { Alert } from 'reactstrap'
import { useTranslation } from 'react-i18next'

const { addUserCardsRequest, setViewAction, clearStates } = appActions

const options = [
  {
    label: 'Personalized',
    value: 1
  },
  {
    label: 'Not Personalized',
    value: 2
  }
]

const AddCard = ({ onClickSetView }) => {
  const dispatch = useDispatch()
  const appStore = useSelector((state) => state.app)
  const initialValues = {
    CardType: '',
    cuid: '',
    historyView: true,
    name: '',
    notes: '',
    personal: true,
    purchase: true,
    activationCode: '',
    Status: 1
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const { t } = useTranslation()

  const onSubmit = useCallback(
    (values) => {
      dispatch(addUserCardsRequest(values))
    },
    [dispatch]
  )

  const validationSchema = Yup.object().shape({
    activationCode: Yup.string().required(t('This field is required')),
    cuid: Yup.string().required(t('This field is required')),
    name: Yup.string().required(t('This field is required')),
    notes: Yup.string().required(t('This field is required')),
    CardType: Yup.string().required(t('This field is required'))
  })

  useEffect(() => {
    dispatch(clearStates())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { submitting, isAddedCard, error } = appStore
    setIsSubmitting(submitting)
    setError(error)
    if (isAddedCard) {
      dispatch(setViewAction(views.PROFILE))
    }
  }, [appStore, dispatch])

  return (
    <AddCardWrapper>
      <div className="add-card-box">
        <div className="header-box">
          <h4>{t('Add card')}</h4>
          <div
            className="close-button"
            onClick={() => onClickSetView(views.PROFILE)}
          >
            <i className="fa fa-close"></i>
          </div>
        </div>
        <div className="form-wrapper">
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
                  <Select
                    name="CardType"
                    value={values.CardType}
                    placeholder={t('Card Type')}
                    options={options}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={
                      errors.CardType && touched.CardType
                        ? errors.CardType
                        : null
                    }
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('Activation Code')}
                    name="activationCode"
                    value={values.activationCode}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={
                      errors.activationCode && touched.activationCode
                        ? errors.activationCode
                        : null
                    }
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder="CUID"
                    name="cuid"
                    value={values.cuid}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={errors.cuid && touched.cuid ? errors.cuid : null}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('Card name')}
                    name="name"
                    value={values.name}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={errors.name && touched.name ? errors.name : null}
                  />
                </div>
                <div className="mb-3">
                  <TextInput
                    type="text"
                    placeholder={t('Card notes')}
                    name="notes"
                    value={values.notes}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={errors.notes && touched.notes ? errors.notes : null}
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
    </AddCardWrapper>
  )
}

export default AddCard
