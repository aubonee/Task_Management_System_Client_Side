import React from 'react';
import imgStudent from '../../assets/images/student.jpg'
import imgDeveloper from '../../assets/images/developer_male.jpg'
import imgStatup from '../../assets/images/startup.jpg'
import imgBanker from '../../assets/images/banker.jpg'
import imgcorporate from '../../assets/images/corporate.jpg'
import { TbPointFilled } from "react-icons/tb";

const UserBenefits = () => {
    return (
        <div className='mx-auto w-5/6'>
            <div> <h1 className="text-6xl text-center text-[#F7B32B] font-bold">User's Benefits</h1></div>
            <div>
                <div className="box"></div>
                <div className=" w-full box1 card flex flex-col items-center lg:flex-row-reverse bg-base-100 ">
  <figure className='w-11/12 lg:w-1/2 '><img src={imgDeveloper} alt="Movie"/></figure>
  <div className="w-11/12 lg:w-1/2 card-body">
    <h2 className="card-title">DEVELOPERS</h2>
    <p>

    <li className='list-none flex items-center  '> Enhance Collaboration: Streamline project management and collaborative coding environments for developers working on team projects.</li>
<li className='list-none flex items-start '> Version Control: Effortlessly manage and track code changes with integrated version control.</li>
<li className='list-none flex items-start '> Task Assignment: Easily assign tasks, set deadlines, and monitor progress within the development team.</li>
    </p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
<div className="divider"></div>
<div className=" w-full box1 card flex flex-col items-center lg:flex-row bg-base-100 ">
  <figure className='w-11/12 lg:w-1/2 '><img src={imgStudent} alt="Movie"/></figure>
  <div className="w-11/12 lg:w-1/2 card-body">
    <h2 className="card-title">STUDENTS</h2>
    <p>
    <li className='list-none flex items-center  '> Project-Based Learning: Facilitate project-based learning for students, helping them organize and manage assignments effectively.</li>
<li className='list-none flex items-start '> Resource Sharing: Share educational resources, collaborate on group projects, and engage in discussion forums.</li>
<li className='list-none flex items-start '> Assignment Tracking: Easily track and submit assignments within the platform.</li>
    </p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
<div className="divider"></div>
<div className=" w-full box1 card flex flex-col items-center lg:flex-row-reverse bg-base-100 ">
  <figure className='w-11/12 lg:w-1/2 '><img src={imgBanker} alt="Movie"/></figure>
  <div className="w-11/12 lg:w-1/2 card-body">
    <h2 className="card-title">BANKERS</h2>
    <p>

    <li className='list-none flex items-center  '> Enhance Collaboration: Streamline project management and collaborative coding environments for developers working on team projects.</li>
<li className='list-none flex items-start '> Version Control: Effortlessly manage and track code changes with integrated version control.</li>
<li className='list-none flex items-start '> Task Assignment: Easily assign tasks, set deadlines, and monitor progress within the development team.</li>
    </p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
<div className="divider"></div>
            </div>
        </div>
    );
};

export default UserBenefits;