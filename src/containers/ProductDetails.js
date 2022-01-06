import React, { useState } from 'react'
import { ViewProductWrapper } from './Style'
import { useSelector } from 'react-redux'
import { views } from '../constants/views'
import moment from 'moment'
import { Input } from 'reactstrap'
import { useTranslation } from 'react-i18next'

const ProductDetails = ({ onClickSetView }) => {
  const { t } = useTranslation()
  const appStore = useSelector((state) => state.app)
  const { product } = appStore
  const [prng] = useState(
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  )
  const onClickMakePayment = (product) => {
    onClickSetView(views.VIEW_PAYMENT)
  }
  return (
    <ViewProductWrapper>
      <div className="card-box shadow-sm">
        <div className="header-box">
          <h4>{t('Selected Product')}</h4>
          <div
            className="close-button"
            onClick={() => onClickSetView(views.VIEW_PRODUCTS)}
          >
            <i className="fa fa-arrow-left"></i>
          </div>
        </div>
        <div className="card-details">
          <div className="labels">
            <p>{t('Product')}:</p>
            <p>{t('Valid')}:</p>
            <p>{t('Amount')}</p>
          </div>
          <div className="values">
            {product && (
              <p>{product.name ? product.name : t('Card Product')}</p>
            )}
            <p>{product ? product.name : t('Card Product')}</p>
            <p>
              {moment(product.validFrom).format('DD/MM/YYYY')}
              {' - '}
              {moment(product.validTo).format('DD/MM/YYYY')}
            </p>
            <p>
              {product.amount} {product.currencyName}
            </p>
            <form action="https://10.64.10.16:49156/order" method="post">
              <input
                type="hidden"
                name="PaymentServiceType"
                id="PaymentServiceType"
                value="Asseco"
              />
                <input
                type="hidden"
                name="InstitutionId"
                id="InstitutionId"
                value="HalkBankMK"
              />
              <input
                type="hidden"
                name="TransactionType"
                id="TransactionType"
                value="1"
              />
              <input
                type="hidden"
                name="RequestId"
                id="RequestId"
                value={prng}
              />
              <input
                type="hidden"
                name="MerchantTerminalTd"
                id="MerchantTerminalTd"
                value="TEST_JSP"
              />
              <input
                type="hidden"
                name="OkURL"
                id="OkURL"
                value={`${window.location.origin}${process.env.PAYMENT_STATUS_PATH}${process.env.PAYMENT_SUCCESS_QS}`}
              />
              <input
                type="hidden"
                name="FailURL"
                id="FailURL"
                value={`${window.location.origin}${process.env.PAYMENT_STATUS_PATH}${process.env.PAYMENT_FAILURE_QS}`}
              />
              <Input
                type="hidden"
                name="TransactionDescription"
                id="TransactionDescription"
                value={product ? product.name : 'Card Product'}
              />
              <input
                type="hidden"
                name="Amount"
                id="Amount"
                value={product.amount}
              />
              <input
                type="hidden"
                name="CallBackURL"
                id="CallBackURL"
                value="https://10.64.10.16:49156/api/payment/orderapproved"
              />
              <button
                type="submit"
                className="btn"
                onClick={() => onClickMakePayment()}
              >
                {t('Make Payment')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </ViewProductWrapper>
  )
}

export default ProductDetails

