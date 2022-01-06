import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ViewProductWrapper } from './Style'
import { views } from '../constants/views'
import appActions from '../store/app/actions'
import { isEmpty } from '../helper/isEmpty'
import { Spinner } from 'reactstrap'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

const { getProductsRequest, setUserProduct } = appActions

const ViewProducts = ({ onClickSetView }) => {
  const dispatch = useDispatch()
  const appStore = useSelector((state) => state.app)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const { t } = useTranslation()

  const onClickProduct = useCallback(
    (product) => {
      dispatch(setUserProduct(product))
      onClickSetView(views.PRODUCT_DETAILS)
    },
    [dispatch, onClickSetView]
  )

  useEffect(() => {
    const { user, card } = appStore
    dispatch(getProductsRequest({ userId: user.id, cuId: card.cuid }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { user, products, loading } = appStore
    setUser(user)
    setLoading(loading)
    setProducts(products)
    // if (!user && !isProducts && !card) {
    //   dispatch(getProductsRequest({ userId: user.id, cuId: card.cuid }))
    // }
  }, [appStore, dispatch])

  return (
    <ViewProductWrapper>
      <div className="card-box shadow-sm">
        <div className="header-box">
          <h4>
            {t('Available Products for')}{' '}
            {user ? `${user.firstName} ${user.lastName}` : 'Mike Wazowski'}
          </h4>
          <div
            className="close-button"
            onClick={() => onClickSetView(views.PROFILE)}
          >
            <i className="fa fa-arrow-left"></i>
          </div>
        </div>
        <div className="card-details">
          <ol className="list-group list-group-numbered">
            {loading && isEmpty(products) ? (
              <Spinner />
            ) : (
              products.map((product) => (
                <li
                  className="list-group-item justify-content-between align-items-start"
                  key={product.id}
                >
                  <div className="productName">
                    {product.productName
                      ? product.productName
                      : t('Card Product')}
                  </div>
                  <div className="validDate">
                    {moment(product.validFrom).format('DD/MM/YYYY')}
                    {' - '}
                    {moment(product.validTo).format('DD/MM/YYYY')}
                  </div>
                  <div className="amount">
                    {product.amount} {product.currencyName}
                  </div>
                  <div>
                    {product?.zoneName}
                  </div>
                  <div
                    className="purchaseBtn"
                    onClick={() => onClickProduct(product)}
                  >
                    <i className="fa fa-shopping-cart"></i>
                  </div>
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    </ViewProductWrapper>
  )
}

export default ViewProducts
