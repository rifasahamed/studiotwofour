'use client';
import React from 'react';
import Image from 'next/image';
import LogoImage from '@/Assets/images/Logo.png';
import Vector from '@/Assets/images/Vector.png';
import Vector1 from '@/Assets/images/Vector1.png';
import Vector2 from '@/Assets/images/Vector2.png';
import { PlusIcon } from 'lucide-react';
const ContactSection = () => {
    return(
        <>
{/*(contact Content) */}
<section id='section9' className='h-[1000px] bg-[rgb(110,56,147)]'>
<div>
  <h3 className='text-[52px] uppercase font-bold leading-none ml-[80px] translate-y-[150px]'>Have something in mind?<br />
    get in touch with us!</h3>
  <h4 className='text-[36px] uppercase font-bold underline ml-[80px] translate-y-[160px]'>info@studiotwofour.com</h4>
</div>
<button className=" flex items-center w-[231px] h-[56px] ml-[80px] mt-[200px] gap-3 px-6 py-4 rounded-full border border-white/50 text-white  hover:border-white/20">
  <span className="text-[16px] font-medium text-nowrap">Start to collaborate</span>
  <PlusIcon className=" w-[24px] h-[24px] text-white" />
</button>
<div className='grid grid-rows-5 ml-[80px] gap-4 mt-[170px] place-content-start '>
  <button className='text-left hover:text-white/50'>Work</button>
  <button className='text-left hover:text-white/50'>Studio</button>
  <button className='text-left hover:text-white/50'>Careers</button>
  <button className='text-left hover:text-white/50'>News</button>
  <button className='text-left hover:text-white/50'>Contact</button>
</div>

<div className="p-4  ml-[310px] mt-[-200px]">
  <ul className="list-disc text-white/50 leading-relaxed">
    <li><strong className="font-bold ">INDIA</strong> <span className='text-sm'>:+917306383231 <br /> +919526009812</span></li>
    <li><strong className="font-bold ">UAE</strong><span className='text-sm'>:+971504966854</span></li>
    <li><strong className="font-bold ">QATAR</strong><span className='text-sm'>:+97455404913</span></li>
  </ul>
</div>
<div className='w-[290px] h-[290px] ml-[1000px] mt-[-200px]'>
  <Image src={LogoImage} alt='logo image' />
</div>
<div className='grid grid-cols-3 w-[112px] h-[32px] ml-[300px] mt-[-50px]'>
  <a href="https://www.instagram.com/studio.twofour?igsh=MTc0eno2azY3OGducA==">
    <Image src={Vector} alt='vector image' />
  </a>
  <a href="http://www.youtube.com/@studiotwofour-creativetech6620">
    <Image src={Vector1} alt='vector image' />
  </a>
  <a href="https://www.facebook.com/share/16757DiYbk/?mibextid=wwXIfr">
    <Image src={Vector2} alt='vector image' />
  </a>
</div>
<h3 className='uppercase text-[14px] tracking-wide mt-[80px] ml-[80px] '><span className='text-white/50'>Design by </span>studiotwofour</h3>
</section>
</>
);
}
export default ContactSection