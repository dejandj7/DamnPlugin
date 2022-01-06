import { action } from 'typesafe-actions'
import { AppTypes } from './types'

const appActions = {
  registerRequest: (payload) => action(AppTypes.REGISTER_REQUEST, payload),

  activateRequest: (payload) => action(AppTypes.ACTIVATE_REQUEST, payload),

  registerSuccess: () => action(AppTypes.REGISTER_SUCCESS),

  activateSuccess: () => action(AppTypes.ACTIVATE_SUCCESS),

  registerFailure: (error) => action(AppTypes.REGISTER_FAILURE, error),

  activateFailure: (error) => action(AppTypes.ACTIVATE_FAILURE, error),

  loginRequest: (payload) => action(AppTypes.LOGIN_REQUEST, payload),

  loginSuccess: (data) => action(AppTypes.LOGIN_SUCCESS, data),

  loginFailure: (error) => action(AppTypes.LOGIN_FAILURE, error),

  clearStates: () => action(AppTypes.CLEAR_STATES),

  setCurrentUser: (data) => action(AppTypes.SET_CURRENT_USER, data),

  setViewAction: (view) => action(AppTypes.SET_VIEW, view),

  logout: () => action(AppTypes.LOGOUT),

  getUserRequest: (email) => action(AppTypes.GET_USER_REQUEST, email),

  getUserSuccess: (data) => action(AppTypes.GET_USER_SUCCESS, data),

  getUserFailure: (error) => action(AppTypes.GET_USER_FAILURE, error),

  getProductsRequest: (userId) => action(AppTypes.GET_PRODUCTS_REQUEST, userId),

  getProductsSuccess: (data) => action(AppTypes.GET_PRODUCTS_SUCCESS, data),

  getProductsFailure: (error) => action(AppTypes.GET_PRODUCTS_FAILURE, error),

  getUserCardsRequest: (userId) =>
    action(AppTypes.GET_USER_CARDS_REQUEST, userId),

  getUserCardsSuccess: (data) => action(AppTypes.GET_USER_CARDS_SUCCESS, data),

  getUserCardsFailure: (error) =>
    action(AppTypes.GET_USER_CARDS_FAILURE, error),

  addUserCardsRequest: (payload) => action(AppTypes.ADD_CARD_REQUEST, payload),

  addUserCardsSuccess: () => action(AppTypes.ADD_CARD_SUCCESS),

  addUserCardsFailure: (error) => action(AppTypes.ADD_CARD_FAILURE, error),

  setUserCard: (card) => action(AppTypes.SET_USER_CARD, card),

  setUserProduct: (product) => action(AppTypes.SET_USER_PRODUCT, product),

  forgottenPasswordRequest: (payload) =>
    action(AppTypes.FORGOTTEN_PASSWORD_REQUEST, payload),

  forgottenPasswordSuccess: () => action(AppTypes.FORGOTTEN_PASSWORD_SUCCESS),

  forgottenPasswordFailure: (error) =>
    action(AppTypes.FORGOTTEN_PASSWORD_FAILURE, error),

  resetPasswordRequest: (payload) =>
    action(AppTypes.RESET_PASSWORD_REQUEST, payload),

  resetPasswordSuccess: () => action(AppTypes.RESET_PASSWORD_SUCCESS),

  resetPasswordFailure: (error) =>
    action(AppTypes.RESET_PASSWORD_FAILURE, error),

  changePasswordRequest: (payload) =>
    action(AppTypes.CHANGE_PASSWORD_REQUEST, payload),

  changePasswordSuccess: () => action(AppTypes.CHANGE_PASSWORD_SUCCESS),

  changePasswordFailure: (error) =>
    action(AppTypes.CHANGE_PASSWORD_FAILURE, error),

  editProfileRequest: (payload) =>
    action(AppTypes.EDIT_PROFILE_REQUEST, payload),

  editProfileSuccess: () => action(AppTypes.EDIT_PROFILE_SUCCESS),

  editProfileFailure: (error) => action(AppTypes.EDIT_PROFILE_FAILURE, error)
}

export default appActions
