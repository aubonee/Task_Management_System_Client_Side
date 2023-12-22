import React from 'react';
import imgBg from '../../src/assets/images/whychooseUs.webp'
import img from '../../src/assets/images/whychoose.jpg'


const WhyChooseUs = () => {
    return (
        <div className='w-full'>
               <div className=" min-h-[70vh] w-full hero ">
  <div className="flex flex-col lg:flex-row justify-between">
    <img src={img} className=" w-11/12 lg:w-2/5" />
    <div className='w-full lg:w-3/5 flex items-center'>
      <h1 className="text-6xl ml-10 text-[#F7B32B] font-bold">Why Choose Us!</h1>
      
    </div>
  </div>
</div>
<div className='w-full bg-[#f6e3b9]'>





<div className='mx-auto  w-5/6 py-10'>
    

 <div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  User-Friendly Interface
  </div>
  <div className="collapse-content"> 
    <p>Experience the simplicity of our platform through an intuitive user interface designed for ease of use. Navigate effortlessly and accomplish tasks with a few clicks, ensuring a seamless and enjoyable experience for users of all levels of technical expertise..</p>
  </div>
</div>
<hr className='bg-[#FFF5E0] h-[3px] mx-5'/>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Versatility for All Professions
  </div>
  <div className="collapse-content"> 
    <p>Tailored to cater to the unique needs of diverse professions, our platform is a versatile solution for developers, corporate professionals, finance experts, students, and startups. Whether you're coding collaboratively, managing corporate projects, or tracking financial tasks, our platform adapts to your professional requirements.</p>
  </div>
</div>
<hr className='bg-[#FFF5E0] h-[3px] mx-5'/>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Efficient Task Management
  </div>
  <div className="collapse-content"> 
    <p>Efficiency is at the core of our platform's task management capabilities. Enjoy the convenience of a drag-and-drop interface that allows you to effortlessly organize tasks across to-do, ongoing, and completed lists. Prioritize tasks with ease, ensuring you stay focused on what matters most.</p>
  </div>
</div>
<hr className='bg-[#FFF5E0] h-[3px] mx-5'/>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Secure and Personalized Profiles
  </div>
  <div className="collapse-content"> 
    <p>Your security and personalized experience are paramount. Each user is provided with a secure and personalized profile, complete with a profile picture and task details. Rest assured that your data is handled with utmost privacy and security, creating a safe and tailored task management environment.</p>
  </div>
</div>
<hr className='bg-[#FFF5E0] h-[3px] mx-5'/>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Innovative Features
  </div>
  <div className="collapse-content"> 
    <p>Explore a range of innovative features that set our platform apart. Benefit from hassle-free Google Sign-In for quick and secure access. Enjoy the bonus of task editing, empowering users to modify task details effortlessly. Stay informed with real-time toast notifications, ensuring you are always up-to-date on task assignments, updates, and deadlines.</p>
  </div>
</div>


 </div>
</div>
        </div>
     
    );
};

export default WhyChooseUs;