import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ConfigureStore from './store/store'
import 'jquery'
import 'popper.js'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import reportWebVitals from './reportWebVitals'
import jwtDecode from 'jwt-decode'
import appActions from './store/app/actions'
import { authorization } from './utils/authorization'

const initialState = window.INITIAL_REDUX_STATE

export const { store, persistor } = ConfigureStore(initialState)

const { logout } = appActions

const token = localStorage.getItem('token')

if (token) {
  authorization(token)
  const decoded = jwtDecode(token)
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    localStorage.clear()
    store.dispatch(logout())
  }
}

ReactDOM.render(
  <React.Fragment>
    <I18nextProvider i18n={i18n}>
      <App store={store} persistor={persistor} />
    </I18nextProvider>
  </React.Fragment>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
