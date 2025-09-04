import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layout from './components/Layout'
import UserListing from './components/UserListing'
import UserAdd from './components/UserAdd'
import Login from './components/Login'
import Signup from './components/Signup'
import { useSelector } from 'react-redux'
import EventForm from './components/EventForm'
import { Toaster } from 'react-hot-toast'

function App() {
  const isLogin = useSelector(state => state.registeredUserReducer.isLogin)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/users' element={ isLogin ?  <Layout /> : <Navigate to="/login" />}>
            <Route path='/users' element={ <UserListing />} />
          </Route>
          <Route path='/users/add' element={ isLogin ?  <UserAdd /> : <Navigate to="/login" />} />
          <Route path='/login' element={ !isLogin ? <Login /> : <Navigate to="/users" /> } />
          <Route path='/signup' element={ !isLogin ? <Signup /> : <Navigate to="/users" /> } />
          <Route path='/event' element={ isLogin ?  <EventForm /> : <Navigate to="/login" /> } />
          <Route path='*' element={<Navigate to="/users" />} />
         </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
