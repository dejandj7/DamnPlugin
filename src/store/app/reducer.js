import { AppTypes } from './types'
import { views } from '../../constants/views'

export const initialState = {
  submitting: false,
  user: null,
  error: null,
  loading: false,
  isAuthenticated: false,
  view: views.LOGIN,
  isRegistered: false,
  token: null,
  email: null,
  products: [],
  cards: [],
  isCards: false,
  isAddedCard: false,
  card: null,
  isProducts: false,
  product: null,
  isForgottenPassword: false,
  isResetPassword: false,
  isChangePassword: false,
  isEditProfile: false
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case AppTypes.REGISTER_REQUEST:
      return {
        ...state,
        submitting: true,
        error: null
      }

    case AppTypes.REGISTER_SUCCESS:
      return {
        ...state,
        submitting: false,
        isRegistered: true
      }

    case AppTypes.REGISTER_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.payload,
        isRegistered: false
      }

    case AppTypes.ACTIVATE_REQUEST:
      return {
        ...state,
        loading: true,
        submitting: true,
        error: null
      }

    case AppTypes.LOGIN_REQUEST:
      return {
        ...state,
        submitting: true,
        error: null
      }

    case AppTypes.LOGIN_SUCCESS:
    case AppTypes.ACTIVATE_SUCCESS:
      return {
        ...state,
        submitting: false,
        token: action.payload.token,
        email: action.payload.email,
        isAuthenticated: true
      }

    case AppTypes.LOGIN_FAILURE:
    case AppTypes.ACTIVATE_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.payload,
        isAuthenticated: false,
        email: null,
        token: null
      }

    case AppTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      }

    case AppTypes.SET_USER_PRODUCT:
      return {
        ...state,
        product: action.payload
      }

    case AppTypes.CLEAR_STATES:
      return {
        ...state,
        submitting: false,
        error: null,
        loading: false,
        isRegistered: false,
        isCards: false,
        isAddedCard: false,
        isForgottenPassword: false,
        isResetPassword: false,
        card: null,
        isEditProfile: false,
        isChangePassword: false
      }

    case AppTypes.SET_VIEW:
      return {
        ...state,
        view: action.payload
      }

    case AppTypes.SET_USER_CARD:
      return {
        ...state,
        card: action.payload
      }

    case AppTypes.GET_USER_REQUEST:
      return {
        ...state
      }

    case AppTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      }

    case AppTypes.GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case AppTypes.GET_USER_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
        isCards: false
      }

    case AppTypes.GET_USER_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        loading: false,
        isCards: true
      }

    case AppTypes.GET_USER_CARDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        isCards: false
      }

    case AppTypes.ADD_CARD_REQUEST:
      return {
        ...state,
        submitting: true,
        isAddedCard: false,
        error: null
      }

    case AppTypes.ADD_CARD_SUCCESS:
      return {
        ...state,
        submitting: false,
        isAddedCard: true,
        error: null
      }

    case AppTypes.ADD_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
        submitting: false,
        isAddedCard: false
      }

    case AppTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        isProducts: false
      }
    case AppTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        isProducts: true
      }
    case AppTypes.FORGOTTEN_PASSWORD_REQUEST:
      return {
        ...state,
        submitting: true,
        error: null
      }

    case AppTypes.FORGOTTEN_PASSWORD_SUCCESS:
      return {
        ...state,
        submitting: false,
        isForgottenPassword: true
      }

    case AppTypes.FORGOTTEN_PASSWORD_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.payload,
        isForgottenPassword: false
      }

    case AppTypes.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        submitting: true,
        error: null
      }

    case AppTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        submitting: false,
        isResetPassword: true
      }

    case AppTypes.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.payload,
        isResetPassword: false
      }

    case AppTypes.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        submitting: true,
        error: null
      }

    case AppTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        submitting: false,
        isChangePassword: true
      }

    case AppTypes.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.payload,
        isChangePassword: false
      }

    case AppTypes.EDIT_PROFILE_REQUEST:
      return {
        ...state,
        submitting: true,
        error: null
      }

    case AppTypes.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        submitting: false,
        isEditProfile: true
      }

    case AppTypes.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.payload,
        isEditProfile: false
      }

    case AppTypes.LOGOUT:
      return initialState
    default:
      return state
  }
}
