import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { useLocation } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home.jsx';
import Allrooms from './Components/Pages/Room/Allrooms.jsx';
import RoomDetails from './Components/Pages/Detail/RoomDetails.jsx';
import MyBooking from './Components/Pages/MyBooking/MyBooking.jsx';
import HotelReg from './Components/HotelReg/HotelReg.jsx';
import Layout from './Components/Pages/HotelOwner/Layout.jsx';
import Dashboard from './Components/Pages/HotelOwner/Dashboard.jsx';
import AddRoom from './Components/Pages/HotelOwner/AddRoom.jsx';
import ListRoom from './Components/Pages/HotelOwner/ListRoom.jsx';
import Experience from './Components/Pages/Experience/Experience.jsx';
import About from './Components/Pages/About/About.jsx';


const App = () => {

  const isOwnerPath = useLocation().pathname.includes('/owner');
  
  return (
    <div>
       {!isOwnerPath && <Navbar />}
       {false && <HotelReg />}
       <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/rooms' element={<Allrooms/>} />
          <Route path='/rooms/:id' element={<RoomDetails/>} />
          <Route path='/my-booking' element={<MyBooking/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/about' element={<About/>} />

          <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='add-room' element={<AddRoom/>}/>
            <Route path='list-room' element={<ListRoom/>}/>
          </Route>

         
        </Routes>

       </div>

    </div>
  )
}

export default App