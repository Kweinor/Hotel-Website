import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import { useState } from 'react'
//import viteLogo from '/vite.svg'

import './App.css'
import Home from './home.jsx'
import Layout from './AppLayout.jsx'
import Explore from './pages/explore.jsx'
import Rooms from './pages/rooms.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/about.jsx'
import Bookings from './pages/bookings.jsx'
import Room from './pages/slectedRoom.jsx'
import AdminPanel from './pages/AdminPanel/adminPanel.jsx'
import Dashboard from './pages/AdminPanel/dashboard.jsx' 
import AdminRooms from './pages/AdminPanel/adminRooms.jsx'
import AdminReservation from './pages/AdminPanel/adminReservation.jsx'
import Guest from './Guest.jsx'
import HotelAuthLogin from './HotelAuthLogin.jsx';
import AdminLogin from './Authentication/AdminLogins.jsx';
import AuthLayout from './Authentication/AuthLayout.jsx';
import StaffLogin from './Authentication/StaffLogins.jsx';
import { Navigate } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  //const [count, setCount] = useState(0)

  return( 
    <div>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      
      <Route  index element={<Home/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/rooms/:id' element={<Room/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signin' element={<HotelAuthLogin/>}/>


       <Route path='/admin' element={<AdminPanel/>}>
       <Route index  element={<Dashboard/>}/>
       <Route path='/admin/guests' element={<Guest/>}/>
       <Route path='/admin/rooms' element={<AdminRooms/>}/>
       <Route path='/admin/reservations' element={<AdminReservation/>}/>
        </Route>


       <Route path="/login" element={<AuthLayout />}>
       <Route index element={<Navigate to="admin" replace />} />
       <Route path="admin" element={<AdminLogin />} />
       <Route path="staff" element={<StaffLogin />} />
       </Route>
      
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </div>)
}

export default App;
