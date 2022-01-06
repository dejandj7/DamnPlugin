import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from './layout/Layout'

const App = ({ store, persistor }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Layout />
      </PersistGate>
    </Provider>
  )
}

export default App
