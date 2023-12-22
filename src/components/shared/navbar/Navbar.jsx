import React, { useContext } from 'react';
import logo from '../../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
     const {user, logOut} = useContext(AuthContext);
     const handleSignOut =() =>{
        logOut()
        .then()
        .catch()
      }
    const navItems =<>
    <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-xl font-bold underline underline-offset-8" : " text-xl font-bold"}> Home</NavLink></li>
   
      <li><NavLink to="/whychooseus" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-xl font-bold underline underline-offset-8" : " text-xl font-bold"}> whychooseus</NavLink></li>
      <li><NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-xl font-bold underline underline-offset-8" : " text-xl font-bold"}> Dashboard</NavLink></li>
      <li><NavLink to="/contactus" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-xl font-bold underline underline-offset-8" : " text-2xl font-bold"}> Home</NavLink></li>
      {
    user ?
    <button onClick={handleSignOut} className="text-sm  my-2 mx-2 btn rounded-none   border-2 border-spacing-y-3 border-spacing-x-7 text-[#d2cb4e]">Sign Out</button>
  :
  <Link className=" my-2 mx-2 btn rounded-none  border-2 border-spacing-y-3 border-spacing-x-7 text-[#d2cb4e] " to="/Login">Login</Link>
  }
    </>
    return (
        <div>
           <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="">
            
            <div className="drawer drawer-start">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
 
  <div className="drawer-side z-20">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {navItems}
    </ul>
  </div>
</div>
          </div>
          <div className=" logo-font text-[#95262a] font-semibold text-xl flex items-center"> <img src={logo} alt="" className='w-[60px]' />
          <h2>TaskTracker</h2></div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
        <div className="drawer-content ">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button "><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
  </div> 
        </div>
      </div>
        </div>
    );
};

export default Navbar;