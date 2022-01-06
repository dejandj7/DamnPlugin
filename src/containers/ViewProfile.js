import React from 'react'
import { ViewProfileWrapper } from './Style'
import { views } from '../constants/views'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const ViewProfile = ({ onClickSetView }) => {
  const { t } = useTranslation()
  const appStore = useSelector((state) => state.app)
  const { user } = appStore

  return (
    <ViewProfileWrapper>
      <div className="card-box shadow-sm">
        <div className="header-box">
          <h4>
            {user ? `${user.firstName} ${user.lastName}` : 'Mike Wazowski'}
          </h4>
          <div
            className="close-button"
            onClick={() => onClickSetView(views.PROFILE)}
          >
            <i className="fa fa-close"></i>
          </div>
        </div>
        <div className="card-details">
          <div className="labels">
            <p>{t('Email address')}</p>
            <p>{t('Mobile number')}</p>
            <p>{t('Address')}</p>
            <p>{t('City')}</p>
            <p>{t('Zip')}</p>
            <p>{t('Country')}</p>
            <p>{t('Language')}</p>
            <button
              className="btn"
              onClick={() => onClickSetView(views.CHANGE_PASSWORD)}
            >
              {t('Change Password')}
            </button>
          </div>
          <div className="values">
            <p>{user && user.email ? user.email : 'bohan3d@gmail.com'}</p>
            <p>{user && user.msisdn ? user.msisdn : '38970039243'}</p>
            <p>{user && user.address ? user.address : '#96 Buade Avenue'}</p>
            <p>{user && user.city ? user.city : 'Accra'}</p>
            <p>{user && user.zip ? user.zip : '1899'}</p>
            <p>{user && user.country ? user.country : 'Ghana'}</p>
            <p>{user && user.cultureInfo ? user.cultureInfo : 'MK'}</p>
            <button
              className="btn"
              onClick={() => onClickSetView(views.EDIT_PROFILE)}
            >
              {t('Edit Profile')}
            </button>
          </div>
        </div>
      </div>
    </ViewProfileWrapper>
  )
}

export default ViewProfile
