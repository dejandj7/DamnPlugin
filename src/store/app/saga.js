import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { callApiGet, callApiPost } from '../../api/requests'
import appActions from './actions'
import { AppTypes } from './types'
import { authorization } from '../../utils/authorization'

function* register({ payload }) {
  try {
    yield call(callApiPost, `account/register`, payload)
    yield put(appActions.registerSuccess())
  } catch (err) {
    yield put(appActions.registerFailure(err.response.data))
  }
}

function* activate({ payload }) {
  try {
    const res = yield call(callApiPost, `account/activate`, payload)
    if (!res.data.fbToken) {
      throw new Error('Login fail')
    }
    authorization(res.data.fbToken)
    localStorage.setItem('token', res.data.fbToken)
    if (res.status === 200) {
      // fetch user data with email
      yield put(appActions.getUserRequest(payload.email))
    }
  } catch (err) {
    yield put(appActions.activateFailure(err.response.data))
  }
}

function* login({ payload }) {
  try {
    const res = yield call(callApiPost, `account/authenticate`, payload)
    if (!res.data.fbToken) throw new Error('Login fail')
    authorization(res.data.fbToken)
    localStorage.setItem('token', res.data.fbToken)
    if (res.status === 200) {
      // fetch user data with email
      yield put(appActions.getUserRequest(payload.email))
    }
  } catch (err) {
    yield put(appActions.loginFailure(err))
  }
}

function* getUser({ payload }) {
  try {
    const res = yield call(callApiGet, `account/getuser?email=${payload}`)
    if (res.status === 200) {
      yield put(appActions.getUserSuccess(res.data))
      // Now log user in
      yield put(
        appActions.loginSuccess({
          token: localStorage.getItem('token'),
          email: res.data.email
        })
      )
    }
  } catch (err) {
    yield put(appActions.getUserFailure(err.response.data))
  }
}

function* getUserCards({ payload }) {
  try {
    const res = yield call(
      callApiGet,
      `usercard/getusercards?userID=${payload}`
    )
    yield put(appActions.getUserCardsSuccess(res.data))
  } catch (err) {
    yield put(appActions.getUserCardsFailure(err.response.data))
  }
}

function* addUserCard({ payload }) {
  try {
    yield call(callApiPost, `usercard/addusercard`, payload)
    yield put(appActions.addUserCardsSuccess())
  } catch (err) {
    yield put(appActions.addUserCardsFailure(err.response.data))
  }
}

function* getProducts({ payload }) {
  try {
    const res = yield call(
      callApiGet,
      `product/getavailableproducts?userID=${payload.userId}&CUID=${payload.cuId}`
    )
    yield put(appActions.getProductsSuccess(res.data))
  } catch (err) {
    yield put(appActions.getProductsFailure(err.resonse.data))
  }
}

function* forgottenPassword({ payload }) {
  try {
    yield call(callApiPost, `account/forgotpassword`, payload)
    yield put(appActions.forgottenPasswordSuccess())
  } catch (err) {
    yield put(appActions.forgottenPasswordFailure(err.response.data))
  }
}

function* resetPassword({ payload }) {
  try {
    yield call(callApiPost, `account/resetpassword`, payload)
    yield put(appActions.resetPasswordSuccess())
  } catch (err) {
    yield put(appActions.resetPasswordFailure(err.response.data))
  }
}

function* changePassword({ payload }) {
  try {
    yield call(callApiPost, `account/changepassword`, payload)
    yield put(appActions.changePasswordSuccess())
  } catch (err) {
    yield put(appActions.changePasswordFailure(err.response.data))
  }
}

function* editProfile({ payload }) {
  try {
    yield call(callApiPost, `account/updateuser`, payload)
    yield put(appActions.editProfileSuccess())
  } catch (err) {
    yield put(appActions.editProfileFailure(err.response.data))
  }
}

function* watchRegister() {
  yield takeEvery(AppTypes.REGISTER_REQUEST, register)
}

function* watchLogin() {
  yield takeEvery(AppTypes.LOGIN_REQUEST, login)
}

function* watchGetUser() {
  yield takeEvery(AppTypes.GET_USER_REQUEST, getUser)
}

function* watchGetProduct() {
  yield takeEvery(AppTypes.GET_PRODUCTS_REQUEST, getProducts)
}
function* watchGetUserCards() {
  yield takeEvery(AppTypes.GET_USER_CARDS_REQUEST, getUserCards)
}

function* watchAddUserCards() {
  yield takeEvery(AppTypes.ADD_CARD_REQUEST, addUserCard)
}

function* watchActivateAccount() {
  yield takeEvery(AppTypes.ACTIVATE_REQUEST, activate)
}

function* watchForgottenPassword() {
  yield takeEvery(AppTypes.FORGOTTEN_PASSWORD_REQUEST, forgottenPassword)
}

function* watchResetPassword() {
  yield takeEvery(AppTypes.RESET_PASSWORD_REQUEST, resetPassword)
}

function* watchChangePassword() {
  yield takeEvery(AppTypes.CHANGE_PASSWORD_REQUEST, changePassword)
}

function* watchEditProfile() {
  yield takeEvery(AppTypes.EDIT_PROFILE_REQUEST, editProfile)
}

function* appSaga() {
  yield all([
    fork(watchRegister),
    fork(watchActivateAccount),
    fork(watchLogin),
    fork(watchGetUser),
    fork(watchGetProduct),
    fork(watchGetUser),
    fork(watchGetUserCards),
    fork(watchAddUserCards),
    fork(watchForgottenPassword),
    fork(watchResetPassword),
    fork(watchChangePassword),
    fork(watchEditProfile)
  ])
}

export default appSaga
