import React, { useState, useEffect, useCallback } from 'react'
import { ProfileWrapper } from './Style'
import { useSelector, useDispatch } from 'react-redux'
import userProfile from '../img/user.svg'
import { views } from '../constants/views'
import appActions from '../store/app/actions'
import { CreditCard } from 'react-feather'
import { useTranslation } from 'react-i18next'
import 'react-perfect-scrollbar/dist/css/styles.css'

const { logout, getUserCardsRequest, setUserCard, clearStates } = appActions

const Profile = ({ onClickSetView }) => {
  const dispatch = useDispatch()
  const appStore = useSelector((state) => state.app)
  const [user, setUser] = useState(null)
  const [cards, setCards] = useState([])
  const { t } = useTranslation()

  const onLogoutClick = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  const onClickCard = useCallback(
    (card) => {
      dispatch(setUserCard(card))
      onClickSetView(views.VIEW_CARD)
    },
    [dispatch, onClickSetView]
  )

  useEffect(() => {
    const { user } = appStore
    dispatch(getUserCardsRequest(user.id))
    clearStates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { user, cards } = appStore
    setUser(user)
    setCards(cards)
  }, [appStore, dispatch])

  return (
    <ProfileWrapper>
      <div className="profile-box">
        <div className="profile">
          <div className="profile-image">
            <img
              src={userProfile}
              alt="user"
              width="100"
              onClick={() => onClickSetView(views.VIEW_PROFILE)}
            />
          </div>
          <div className="profile-details">
            <h4>
              {user ? `${user.firstName} ${user.lastName}` : 'Mike Wazowski'}
            </h4>
            <h6>{user ? user.email : 'bohan3d@gmail.com'}</h6>
            <h3>
              <span onClick={() => onClickSetView(views.VIEW_PROFILE)}>
                {t('View Profile')}
              </span>{' '}
              |{' '}
              <span onClick={() => onClickSetView(views.VIEW_PRODUCTS)}>
                {' '}
                {t('View Products')}{' '}
              </span>
              | <span onClick={() => onLogoutClick()}>{t('Logout')}</span>
            </h3>
          </div>
        </div>
        {cards.length > 0
          ? cards.map((card) => (
              <div className="card-box" key={card.id}>
                <div className="add-card" onClick={() => onClickCard(card)}>
                  <div className="inner-card-alt">
                    <div className="icon">
                      <CreditCard size={40} />
                      <h4>{card.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
        <div className="card-box">
          <div
            className="add-card"
            onClick={() => onClickSetView(views.ADD_CARD)}
          >
            <div className="inner-card">
              <div className="icon">
                <i className="fa fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  )
}

export default Profile
