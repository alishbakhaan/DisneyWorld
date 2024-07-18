import { useState } from 'react'
import Register from './Components/Register/Register'
import{createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './Components/Login/Login'
import LandingPage from './Screens/LandingPage';

// create router
const router = createBrowserRouter([

  {
    path:'/',
    element: <div><Login /></div>
  },
  {
    path:'/register',
    element: <div> <Register/></div>
  },
  {
    path:'/landingpage',
    element: <div> <LandingPage/></div>
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}


export default App
