'use client';
import React from 'react';
import Image from 'next/image';
import TestimonialsSlide from '@/components/cards/TestimonialsSlide';
import InsightImage from '@/Assets/images/insight.png';
const InsightSection = () => {
    return(
    <>
{/*(insights Content) */}
<section id='section8' className=' h-[1190px]'>
<div className='mt-[100px]'>
  <div className="relative  translate-x-[80px] translate-y-[150px] bg-[rgb(254,220,0)] size-3 rounded-full "></div>
  <div className="relative  translate-x-[100px] translate-y-[132px] text-[rgb(254,220,0)]">Insights</div>
</div>
<div className='w-[511px] h-[314px] overflow-hidden rounded-3xl ml-[80px] mt-[280px]'>
  <Image src={InsightImage} alt='' />
</div>
<h3 className='uppercase text-[56px] font-extrabold ml-[800px] mt-[-490px] leading-tight'>Why Choose<br />Studiotwofour?</h3>
<p className='text-[26px] font-medium ml-[800px] mt-[30px]'>Our team of seasoned professionals is<br />passionate about delivering<br />excellence, combining expertise in<br />design, technology, and branding.</p>
<p className='text-[18px] ml-[800px] mt-[30px] text-white/50'>We’re not just here to meet expectations—we’re here to<br />redefine them. Let’s create a future where your brand<br />shines brighter than ever.</p>
<button className='text-[16px] font-semibold border w-[160px] h-[56px] border-white/50 rounded-full hover:border-white/20 ml-[800px] mt-[30px]'>Read full article</button>
<div className='border-b border-white/20 w-full ml-[80px] mt-[180px]'></div>

<TestimonialsSlide />

</section>
</>
);
}
export default InsightSection