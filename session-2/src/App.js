import React from 'react'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux';
import Store from './redux/store'

export default function App() {
  return (
    <Provider store={Store}>
      <Navbar/>
    </Provider>
  )
}
