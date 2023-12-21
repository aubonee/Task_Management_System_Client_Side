import React from 'react';
// import bannerImg1 from '../../../assets/images/1.jpg'
import bannerImg1 from '../../../assets/images/bannerImg.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='w-full lg:w-1/2 '>
   <img  src={bannerImg1} className="w-full " />
   </div>
    <div className='w-full lg:w-1/2 '>
      <h1 className="text-6xl font-bold">Stay organized and efficient with TaskManager</h1>
      <p className="text-2xl py-6">Simplify your task management process with our user-friendly system. Sign up now and start managing your tasks effectively.</p>
      <button className="btn btn-primary">Let's Explore</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;