import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layout from './components/Layout'
import UserListing from './components/UserListing'
import UserAdd from './components/UserAdd'
import Login from './components/Login'
import Signup from './components/Signup'
import { useSelector } from 'react-redux'
import EventForm from './components/EventForm'

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
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup />} />
          <Route path='/event' element={ isLogin ?  <EventForm /> : <Navigate to="/login" /> } />
          <Route path='*' element={<Navigate to="/users" />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
