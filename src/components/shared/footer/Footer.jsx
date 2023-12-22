import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
        <footer className=" grid grid-cols-1 md:grid-cols-2 gap-16  footer p-10 bg-base-300 text-base-content">
<nav className='flex flex-col justify-center'>
<a className=" logo-font text-[#F7B32B] font-semibold text-3xl">Empower your productivity journey <br /> with  <br />Task Manager.<span className='font-bold text-4xl'>.</span></a>
 <p className='  w-[430px] text-justify'>
 Unlock the full potential of streamlined task management with SCC Technovision Inc. Our platform is designed to simplify your workflow, enhance collaboration, and prioritize efficiency. 
 </p>
</nav> 
<nav className='text-center'>
<header className=" text-center footer-title">Quick Links</header> 
 <a> <Link to="/">Home</Link></a>
   <a><Link to="/contactUs">Contact Us</Link></a>
   <a><Link to="/whychooseus">Why Choose Us</Link></a>

   
   
</nav> 
<nav className='text-center flex flex-col justify-center items-center'>
 <header className="footer-title text-center"> info & Social</header> 
 
 <div className="flex justify-center ">
   <a href="https://github.com" target="_blank" rel="noopener noreferrer" ><FaGithub  className='bg-gray-700 text-white p-2 mx-2 w-[40px] h-[40px] rounded-full' /> </a>
   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='bg-gray-700 text-white p-2 mx-2 w-[40px] h-[40px] rounded-full' /></a>
   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <FaFacebookF className='bg-gray-700 text-white p-2 mx-2 w-[40px] h-[40px] rounded-full' /> </a>
 </div>
</nav>
</footer>
     </div>
    );
};

export default Footer;