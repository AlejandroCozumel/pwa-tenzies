import React from 'react'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Tenzies from './views/Tenzies'
import Login from './views/Login'

const App = () => {
  return (
    <div>
      <Navbar />
      <Tenzies />
      <Login />
    </div>
  )
}

export default App