import Image from 'next/image';
import Asset2Image from '@/Assets/images/asset2.png';
import Studio1Image from '@/Assets/images/Studio1.png';
import Studio2Image from '@/Assets/images/Studio2.png';
import Studio3Image from '@/Assets/images/Studio3.png';
import { PlusIcon } from 'lucide-react';
const StudiSection = () => {
    return(
        <>
{/*(studio Content) */}
<section id='section5' className=' h-[2052px]'>
<div className=" w-[1000px] h-[621px] mt-[260px] overflow-hidden ">
  <Image src={Asset2Image} alt="asset image" className="object-contain w-[1000px] h-[621px]  object-center" />
</div>
<h1 className='text-[56px] font-extrabold leading-tight ml-[660px] mt-[-550px]'>INSPIRING<br />
  CONNECTIONS,<br />DRIVING EXCELLENCE
</h1>
<h2 className='text-[20px] font-bold ml-[660px] mt-[70px]'>Our Story</h2>
<p className='text-[18px] text-white/50 ml-[890px] mt-[-20px]'>Born from a shared vision of transforming<br />brands, Studiotwofour emerged as a hub of<br />creativity and technology. Our journey began<br />with a bold ambition: to revolutionize the way<br />businesses connect with their audiences by<br />seamlessly merging imagination with cutting-<br />edge solutions.</p>
<div className='mt-[400px]'>
  <div className='w-[510px] h-[330px] overflow-hidden rounded-3xl ml-[210px]'>
    <Image src={Studio1Image} alt='studio images' className='' />
  </div>
  <div className='w-[510px] h-[540px] overflow-hidden rounded-3xl ml-[760px] mt-[-330px]'>
    <Image src={Studio2Image} alt='studio images' className="" />
  </div>
  <div className='w-[400px] h-[330px] overflow-hidden rounded-3xl ml-[1320px] mt-[-200px]'>
    <Image src={Studio3Image} alt='studio images' className="" />
  </div>
</div>
<div className='border-b border-white/50 w-[420px] ml-[210px] mt-[-280px]'></div>
<h2 className='font-extrabold mt-[40px] ml-[210px]'>How We Work</h2>
<p className='text-white/50 mt-[50px] ml-[210px]'>At Studiotwofour, we embrace collaboration, foster<br /> innovation, and challenge the ordinary. Our philosophy is<br />rooted in blending expertise with creativity while deeply<br />understanding your brand’s unique story. We work closely<br />with you to ensure every idea, strategy, and design<br />decision aligns seamlessly with your vision and drives your<br />objectives forward.</p>
<button className="group flex items-center w-[300px] ml-[210px] gap-3 px-8 py-4 rounded-full bg-[rgb(110,56,147)] text-white mt-14 hover:bg-[#1D0704] hover:text-[rgb(110,56,147)]">
  <span className="text-base font-semibold">Start to collaborate</span>
  <PlusIcon className="flex w-6 h-6 text-[rgb(249,99,54)] ml-auto rounded-full bg-white group-hover:text-[rgb(110,56,147)] group-hover:bg-[#1D0704]" />
</button>
<p className="text-center text-[rgb(110,56,147)] mt-[66px] ml-[-350px]">
  <span className="text-[216px] font-extrabold">STUDIO</span>
  <span className="text-[56px] font-extrabold text-[rgb(110,56,147)]">TWOFOUR.COM</span>
</p>
</section>
</>
);
}
export default StudiSection