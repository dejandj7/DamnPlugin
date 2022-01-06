import React from 'react'
import { ViewCardWrapper } from './Style'
import { views } from '../constants/views'
import { useSelector } from 'react-redux'
import { CreditCard } from 'react-feather'
import { useTranslation } from 'react-i18next'

const ViewCard = ({ onClickSetView }) => {
  const { t } = useTranslation()
  const appStore = useSelector((state) => state.app)
  const { card } = appStore

  return (
    <ViewCardWrapper>
      <div className="card-box">
        <div className="header-box">
          <h4>{card ? card.name : ''}</h4>
          <div
            className="close-button"
            onClick={() => onClickSetView(views.PROFILE)}
          >
            <i className="fa fa-close"></i>
          </div>
        </div>
        <div className="card-details">
          <div className="card-box-small">
            <div className="add-card">
              <div className="inner-card-alt">
                <div className="icon">
                  <CreditCard size={80} />
                  <h4>{card ? card.name : ''}</h4>
                  <h6>{card ? card.cuid : ''}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer-alt">
          <h4>{t('Remove card')}</h4>
          <h4 onClick={() => onClickSetView(views.VIEW_PRODUCTS)}>
            {t('Buy Ticket')}
          </h4>
        </div>
      </div>
    </ViewCardWrapper>
  )
}

export default ViewCard
