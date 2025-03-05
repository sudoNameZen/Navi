import React from 'react'
import { Link } from 'react-router-dom'
//import user from 'C:\Users\reckless\Code\Stellar\frontend\src\assets\user.svg';
// import logo from '..\navigation-svgrepo-com.svg';
import{CircleUser,Menu} from 'lucide-react'


const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Map', path: '/api/map' },
  { name: 'Camera', path: '/api/cam' },
  { name: 'User', path: '/auth/user' },
]

const Navbar = () => {
  return (
    <div>
      <div className=' w-full h-12 bg-gray-800 text-white  sm:flex items-center justify-between'>
      <div className='text-2xl font-bold ml-4'><Link to ="/Landingpage">NAVI</Link></div>
      <div className ='lg:hidden'><Menu/></div>
      <div className='hidden lg:block  '>
      <div className='flex items-center '>
        
        <div className='mr-4'><Link to ="/">Home</Link></div>
        <div className='mr-4'><Link to ="/api/map">Map</Link></div>
        <div className='mr-4'><Link to ="/api/cam">AR View</Link></div>
        <div className='mr-4'><Link to ="/api/cam"><CircleUser/></Link></div>
        {/* <div className='mr-4'><Link to ="/auth/user"><img src={myuser} alt="My Icon" /></Link></div> */}
      </div>
      </div>
    </div>
      {/* <div className='block  sm:hidden'>
      <div className='flex flex-col-reverse  '>
        
        <div className='mr-4'><Link to ="/">Home</Link></div>
        <div className='mr-4'><Link to ="/api/map">Map</Link></div>
        <div className='mr-4'><Link to ="/api/cam">AR View</Link></div>
        <div className='mr-4'><Link to ="/api/cam"><CircleUser/></Link></div>
        {/* <div className='mr-4'><Link to ="/auth/user"><img src={myuser} alt="My Icon" /></Link></div> 
      </div> 
      </div> */}
    </div>
    
  )
}

export default Navbar