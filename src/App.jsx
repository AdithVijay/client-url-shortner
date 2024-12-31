import React from 'react'
import { Button } from './components/ui/button'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import Profile from './pages/Profile'

import Dashboard from './pages/Dashboard'
import PrivateRoute from './protectedRoutes/PrivateRoute'

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      <Routes>
        <Route path='/' element={

          <Login/>

          }/>
        <Route path="/signup" element={

          <SignUp/>

          }/>
        <Route path='/profile' element = {
          //  <PrivateRoute>
          <Profile/>
          // </PrivateRoute>
          }/>
        <Route path='/dashboard' element={
          // <PrivateRoute>
          <Dashboard/>
          // </PrivateRoute>
          }/>
      </Routes>
    </div>
  )
}

export default App
