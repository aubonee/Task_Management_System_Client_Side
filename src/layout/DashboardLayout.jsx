import React, { useContext } from 'react';
import { FaList } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
            <div>
                <div className="drawer z-10">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
   
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
        {/* <div className="flex"> */}
<div className="flex flex-col">
      {
        user && <div className="flex flex-col justify-center items-center"> <div><img className=" w-[30px] h-[30px] rounded-full" src={user.photoURL} alt="" /></div> <h2>{user.displayName}</h2> </div> 
      }
    </div>
    <div className="divider"></div>
    
      <li> <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-purple-600 text-white p-4" : "p-4 text-lg flex"}>  <FaList className='flex justify-center items-center mt-1 mx-2'></FaList>Task List</NavLink></li>
      <li> <NavLink to="/dashboard/addtask" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-purple-600 text-white p-4" : "p-4 text-lg flex"}>  <FaList className='flex justify-center items-center mt-1 mx-2'></FaList> Add Task </NavLink></li>
     <div className="divider"></div>
     <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "  text-xl font-bold underline underline-offset-8" : " text-2xl font-bold"}> Home</NavLink></li>
      
    </ul>
  </div>
</div>
            </div>
           
            <div>
            <div className="flex my-5 mr-5 justify-end drawer-content items-end">
    
    <label htmlFor="my-drawer" className="btn btn-circle swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input  type="checkbox" />
  
  {/* hamburger icon */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>
  </div> 
            <div className=' ml-5 flex-1'> <Outlet></Outlet> </div>
            </div>
        </div>
    );
};

export default DashboardLayout;