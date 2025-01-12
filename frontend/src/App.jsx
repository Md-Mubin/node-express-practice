import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import AllUsers from './Components/AllUsers/AllUsers'
import RegisterCompo from './Components/RegisterCompo/RegisterCompo'
import { ToastContainer } from 'react-toastify'

function App() {

  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne />}>
          <Route index element={<Login />} />
          <Route path='/register' element={<RegisterCompo />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/allUsers' element={<AllUsers />} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <ToastContainer />
      <RouterProvider router={myRoute} />
    </>
  )
}

export default App
