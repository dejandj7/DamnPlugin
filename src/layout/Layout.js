import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { views } from '../constants/views'
import appActions from '../store/app/actions'
import { authorization } from '../utils/authorization'
const { setViewAction } = appActions

const Register = lazy(() => import('../containers/Register'))
const Login = lazy(() => import('../containers/Login'))
const Activate = lazy(() => import('../containers/Activate'))
const ForgottenPassword = lazy(() => import('../containers/ForgottenPassword'))
const RegisterSuccess = lazy(() => import('../containers/RegisterSuccess'))
const VerificationFailure = lazy(() =>
  import('../containers/VerificationFailure')
)
const VerificationSuccess = lazy(() =>
  import('../containers/VerificationSuccess')
)
const Profile = lazy(() => import('../containers/Profile'))
const AddCard = lazy(() => import('../containers/AddCard'))
const ViewProducts = lazy(() => import('../containers/ViewProducts'))
const ProductDetails = lazy(() => import('../containers/ProductDetails'))
const ViewProfile = lazy(() => import('../containers/ViewProfile'))
const EditProfile = lazy(() => import('../containers/EditProfile'))
const ChangePassword = lazy(() => import('../containers/ChangePassword'))
const ViewCard = lazy(() => import('../containers/ViewCard'))
const ResetPassword = lazy(() => import('../containers/ResetPassword'))

const Layout = () => {
  const appStore = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const [view, setView] = useState('')

  useEffect(() => {
    const { isAuthenticated } = appStore
    const t = new URL(window.location.href).searchParams.get('t')
    const param = new URL(window.location.href).searchParams.get('page')

    if (isAuthenticated) {
      dispatch(setViewAction(views.PROFILE))
    } else {
      dispatch(setViewAction(views.LOGIN))
    }
    // Check for activation view
    if (t) {
      authorization(t)
      dispatch(setViewAction(views.ACTIVATE_ACCOUNT))
    } else if (param && param === 'passwordreset') {
      dispatch(setViewAction(views.RESET_PASSWORD))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { view } = appStore
    setView(view)
  }, [appStore])

  const onClickSetView = useCallback(
    (view) => {
      dispatch(setViewAction(view))
    },
    [dispatch]
  )

  let viewToShow

  switch (view) {
    case views.LOGIN:
      viewToShow = <Login onClickSetView={onClickSetView} />
      break
    case views.REGISTER:
      viewToShow = <Register onClickSetView={onClickSetView} />
      break
    case views.ACTIVATE_ACCOUNT:
      viewToShow = <Activate onClickSetView={onClickSetView} />
      break
    case views.FORGOT_PASSWORD:
      viewToShow = <ForgottenPassword onClickSetView={onClickSetView} />
      break
    case views.VERIFY_FAILURE:
      viewToShow = <VerificationFailure onClickSetView={onClickSetView} />
      break
    case views.VERIFY_SUCCESS:
      viewToShow = <VerificationSuccess />
      break
    case views.REGISTER_SUCCESS:
      viewToShow = <RegisterSuccess />
      break
    case views.PROFILE:
      viewToShow = <Profile onClickSetView={onClickSetView} />
      break
    case views.ADD_CARD:
      viewToShow = <AddCard onClickSetView={onClickSetView} />
      break
    case views.VIEW_PRODUCTS:
      viewToShow = <ViewProducts onClickSetView={onClickSetView} />
      break
    case views.PRODUCT_DETAILS:
      viewToShow = <ProductDetails onClickSetView={onClickSetView} />
      break
    case views.VIEW_PROFILE:
      viewToShow = <ViewProfile onClickSetView={onClickSetView} />
      break
    case views.EDIT_PROFILE:
      viewToShow = <EditProfile onClickSetView={onClickSetView} />
      break
    case views.CHANGE_PASSWORD:
      viewToShow = <ChangePassword onClickSetView={onClickSetView} />
      break
    case views.VIEW_CARD:
      viewToShow = <ViewCard onClickSetView={onClickSetView} />
      break
    case views.RESET_PASSWORD:
      viewToShow = <ResetPassword onClickSetView={onClickSetView} />
      break
    default:
      viewToShow = <Spinner />
  }

  return <Suspense fallback={<Spinner />}>{viewToShow}</Suspense>
}

export default Layout
