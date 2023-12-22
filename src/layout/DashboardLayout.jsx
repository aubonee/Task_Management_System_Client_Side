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
<div className="flex ">
      {
        user && <div className="flex  items-center"> <div><img className=" w-[30px] h-[30px] rounded-full" src={user.photoURL} alt="" /></div> <h2>{user.displayName}</h2> </div> 
      }
    </div>
      <li><a>Sidebar Item 1</a></li>
      <li> <NavLink to="/dashboard/tasklist" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-purple-600 text-white p-4" : "p-4 text-lg flex"}>  <FaList className='flex justify-center items-center mt-1 mx-2'></FaList>Task List</NavLink></li>
      <li> <NavLink to="/dashboard/addtask" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-xl flex bg-purple-600 text-white p-4" : "p-4 text-lg flex"}>  <FaList className='flex justify-center items-center mt-1 mx-2'></FaList> Add Task </NavLink></li> 
      
    </ul>
  </div>
</div>
            </div>
           
            <div>
            <div className="flex justify-end drawer-content items-end">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
            <div className=' ml-5 flex-1'> <Outlet></Outlet> </div>
            </div>
        </div>
    );
};

export default DashboardLayout;