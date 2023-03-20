import React, { useEffect, useState, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { legacy_createStore } from 'redux'
import ApplicationContext from './Contexts/ApplicationContext';

// import Components
import ProtectedRoutes from './Components/Authentication/ProtectedRoutes'
import PublicRoute from './Components/Authentication/PublicRoute'

//import pages
// User
import LoginPage from './Pages/User/LoginPage'
import SignUpPage from './Pages/User/SignUpPage'
import HomePage from './Pages/User/HomePage'
import RegistrationForm from './Pages/User/RegistrationForm'
import BookAslot from './Pages/User/BookAslot';

// Admin

import AllUsers from './Pages/Admin/AllUsers'
import NewApplications from './Pages/Admin/NewApplications'
import PendingApplications from './Pages/Admin/PendingApplications'
import ApprovedApplications from './Pages/Admin/ApprovedApplications'
import Slots from './Pages/Admin/Slots';
import View from './Pages/Admin/View';

// import Contexts



function App() {

  const [state, setState] = useState(null)
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <ApplicationContext>  
        <Routes>
          <Route path='/login' element={<PublicRoute><LoginPage /></PublicRoute>}></Route>
          <Route path='/signup' element={<PublicRoute><SignUpPage /></PublicRoute>}></Route>
        // protected Routes

          <Route path='/' element={<ProtectedRoutes><HomePage /></ProtectedRoutes>}></Route>
          <Route path='/apply' element={<ProtectedRoutes><RegistrationForm /></ProtectedRoutes>}></Route>
          <Route path='/bookSlot' element={<ProtectedRoutes><BookAslot/></ProtectedRoutes>}></Route> 


          {/* admin   */}
          <Route path='/admin' element={<AllUsers></AllUsers>} />
          <Route path='/admin/applications' element={<NewApplications />}></Route>
          <Route path='/admin/pending' element={<PendingApplications />}></Route>
          <Route path='/admin/approved' element={<ApprovedApplications />}></Route>
          <Route path='/admin/viewApplication' element={<View></View>}></Route>
          <Route path='/admin/addSlot' element={<Slots></Slots>}></Route> 
          <Route path='*' element={<div>Not Found </div>}></Route>
        </Routes>
      </ApplicationContext> 
    </div>
  )
}

export default App 