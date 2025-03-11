import Image from 'next/image';
import FeatureImage from '@/Assets/images/feature.png';
import Asset1Image from '@/Assets/images/asset1.png';
import { PlusIcon } from 'lucide-react';
const FeatureSection = () => {
    return(
        <>
{/*(featured Content) */}
<div className="relative group transition-all duration-[1200ms] ">
<section id='section3' className="relative  md:h-[1079px] bg-[rgb(17,5,1)] lg:group-hover:bg-[radial-gradient(circle,rgba(51,11,78,1),rgba(50,50,147,0.3))] transition-all duration-[1200ms] mt-[-100px]">
  <div className="hidden lg:block absolute w-[650px] h-[782px] bg-gray-100 rounded-3xl shadow-lg overflow-hidden mx-auto transform translate-x-[80px] translate-y-[140px]">

  <Image src={FeatureImage} alt="Feature image" className=" w-full h-full object-cover" />
  </div>
  <div className='hidden md:block lg:block transform translate-x-0 translate-y-[180px] lg:translate-x-[605px] lg:translate-y-[140px]'>
    <Image src={Asset1Image} alt='Asset image' className='w-[430px] h-[584px] lg:w-[593px] lg:h-[784px]' />
  </div>
  <div className="relative  translate-x-[20px] translate-y-[100px] md:translate-x-[55px] md:translate-y-[-482px]  lg:translate-x-[1230px] lg:translate-y-[-645px] bg-[rgb(254,220,0)] size-2.5 rounded-full"></div>
  <div className="relative  translate-x-[40px] translate-y-[82px]  md:translate-x-[75px] md:translate-y-[-500px] lg:translate-x-[1254px] lg:translate-y-[-663px] text-[rgb(254,220,0)]">About us</div>
  <div className='flex flex-col items-start text-[36px] md:text-[46px] lg:text-[56px] font-extrabold leading-tight mt-[100px] md:mt-[-300px] lg:mt-[-530px] ml-5 md:ml-[250px] lg:ml-[950px]'>
    <p>DREAM.</p>
    <p>INNOVATE.</p>
    <p>CREATE.</p></div>
  <div className='flex flex-col text-left   transform md:translate-x-[250px] lg:translate-x-[989px] ml-5 mt-8'>
    <p className=' text-[15px] md:text-[18px]  text-white/50'> we believe in the power of connection—<br />between ideas and audiences, between<br /> technology and creativity. We’re not just a<br /> studio; we’re a team of visionaries and makers<br /> driven by a singular purpose: to propel brands<br /> into their brightest futures.</p>
    <p className='text-[15px] md:text-[18px] text-white/50 pt-6'>We fuse strategy with imagination, crafting<br /> stories that captivate and resonate. From<br /> concept to execution, every project we<br /> undertake is a masterpiece in motion,<br /> designed to leave a lasting impact.</p>
  </div>
  <button className="flex items-center w-[200px] h-[50px] md:w-[219px] md:h-[56px] px-8 py-4 rounded-full border border-white/50 mt-10 ml-5 md:translate-x-[250px] lg:translate-x-[990px] lg:hover:border-[rgb(110,56,147)] group">
    <span className="text-[13px] md:text-[15px] font-semibold -translate-x-3">View more details</span>
    <PlusIcon className="w-5 h-5 p-[2px] md:p-[2px] text-white ml-auto translate-x-4 rounded-full bg-[rgb(110,56,147)] lg:hover:text-white lg:group-hover:bg-transparent" />
  </button>
</section>
</div>
</>
);
}
export default FeatureSection