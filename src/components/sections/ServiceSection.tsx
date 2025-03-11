
import Image from 'next/image';

import ServicesImage from '@/Assets/images/services.png';
import { PlusIcon } from 'lucide-react';
const ServiceSection = () => {
    return(
    <>
{/*(services Content) */}
<section id='section6' className=' h-[1604px] bg-[rgba(101,85,143,1)]'>
<div className="relative  translate-x-[80px] translate-y-[150px] bg-white size-3 rounded-full "></div>
<div className="relative  translate-x-[100px] translate-y-[132px] text-white">The Services</div>
<p className='text-[18px] ml-[800px] mt-[110px]'>Our expertise encompasses identity, strategy and positioning, AI-driven<br />solutions, immersive AR/VR experiences, websites and digital<br />experiences, web applications and custom-built apps, advertising and<br />communication, product and packaging design, exhibitions and<br />installations, and motion and sound. We bring creativity to life through<br /> collaboration and camaraderie, leveraging advanced technology t<br />deliver innovative and impactful results.</p>
<div className='w-[400px] h-[249px] overflow-hidden rounded-3xl ml-[80px] mt-[100px]'>
  <Image src={ServicesImage} alt='service images' />
</div>
<p className='text-[16px] ml-[80px] mt-[50px]'>A platform that enables secure<br />sharing of access or credentials<br />among team members or<br /> collaborators</p>
<div className="text-white/70 flex items-center justify-end mt-[-450px] mr-[110px]">
  <div className="w-[620px] h-[604px] px-5">
    {[
      "Brand Development",
      "Creative Design",
      "Motion Graphics",
      "Web & App Development",
      "AI-Driven Solutions",
    ].map((feature, index) => (
      <div
        key={index}
        className="relative flex items-center space-x-[48px]  py-6 group transition-all duration-300"
      >
        <span className="text-[18px] text-white">{`0${index + 1}`}</span>
        <span className="text-[41px] font-bold uppercase tracking-wide">
          {feature}
        </span>

        {/* Plus Icon hover */}
        <div className="absolute right-[-30px] flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full opacity-0 translate-x-5 group-hover:opacity-100 transition-all duration-300">
          <PlusIcon className='text-[rgb(110,56,147)]' />
        </div>

        {/* hover */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transition-transform duration-300 group-hover:translate-y-2 group-hover:bg-[rgb(110,56,147)]"></div>
      </div>
    ))}
  </div>
</div>

<button className="group flex items-center whitespace-nowrap w-[191px] h-[56px] ml-[800px] px-5 rounded-full bg-white text-[rgb(110,56,147)] mt-24 hover:bg-white/20">
  <span className="text-base font-semibold text-[16px]">Start to collaborate</span>
</button>
<h3 className='text-[216px] font-bold tracking-tighter ml-[580px] text-white'>SERVICES</h3>
</section>
</>
);
}
export default ServiceSection