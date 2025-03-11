import Image from 'next/image';
import ProjectImage1 from '@/Assets/images/project1.png';
import ProjectImage2 from '@/Assets/images/project2.png';
import ProjectImage3 from '@/Assets/images/project3.png';
import ProjectImage4 from '@/Assets/images/project4.png';
const ProjectSection = () => {
    return(
        <>
{/*(Project Content) */}
<section id='section4' className=' h-[2378px]'>
<div className="relative translate-x-[20px] translate-y-[100px]  md:translate-x-[80px] md:translate-y-[210px] bg-[rgb(254,220,0)] size-2.5 rounded-full "></div>
<div className="relative translate-x-[40px] translate-y-[82px]  md:translate-x-[100px] md:translate-y-[194px] text-[rgb(254,220,0)]">Projects</div>
<div className='tranform translate-x-[780px]'>
  <h1 className='flex flex-col text-left text-[36px] md:text-[56px] font-extrabold leading-tight ml-[-760px] mt-28 md:mt-[160px] md:ml-0 '>DESIGN CHRONICLES:<br />
    OUR FEATURED<br />PROJECTS
  </h1>
  <div className="flex w-[220px] h-[200px] md:w-[650px] md:h-[470px] rounded-3xl shadow-lg">
    <Image src={ProjectImage1} alt="" className="object-cover w-full h-full rounded-3xl  translate-x-[-760px] translate-y-[50px] md:translate-x-[-700px] md:translate-y-[130px]  " />
  </div>
  <h3 className="fixed text-right text-nowrap text-white text-[12px] md:text-[20px] font-bold mt-[530px] md:mt-[630px] translate-x-[-760px] md:translate-x-[-700px] translate-y-[-470px]">Sendone-Package sent in time.</h3>

  <div className='flex text-[10px] gap-1 md:gap-4 text-white/50 translate-x-[-760px] md:translate-x-[-700px] translate-y-[80px] md:translate-y-[200px]'>
    <h4>2023</h4>
    <h4 className='text-nowrap'>Brand Identity</h4>
    <h4>Website</h4>
  </div>
  <div className=" flex w-[220px] h-[350px]  md:w-[650px] md:h-[750px] rounded-3xl shadow-lg">
    <Image src={ProjectImage2} alt="" className="object-cover w-full h-full rounded-3xl translate-y-[-165px] md:translate-y-[-355px] translate-x-[-520px] md:translate-x-0" />
    <h3 className="fixed text-right text-nowrap text-white text-[20px] font-bold mt-[630px] translate-y-[-200px]">Vihe-Image processing AI</h3>
  </div>
  <div className='flex text-xs gap-4 text-white/50 translate-y-[-280px]'>
    <h4>2023</h4>
    <h4 className='text-nowrap'>Brand Identity</h4>
    <h4>Website</h4>
  </div>
  <div className=" flex w-[650px] h-[750px] rounded-3xl shadow-lg">
    <Image src={ProjectImage3} alt="" className="object-cover w-full h-full rounded-3xl transform translate-x-[-700px]  translate-y-[-500px]" />
    <h3 className="fixed text-right text-nowrap text-white text-[20px] font-bold mt-[480px] translate-x-[-700px] translate-y-[-200px]">Joblist-Jobs directory</h3>
  </div>
  <div className='flex text-xs gap-4 text-white/50 translate-x-[-700px] translate-y-[-430px]'>
    <h4>2023</h4>
    <h4 className='text-nowrap'>Brand Identity</h4>
    <h4>Website</h4>
  </div>
  <div className="flex w-[650px] h-[470px] rounded-3xl shadow-lg flex-shrink-0">
    <Image src={ProjectImage4} alt="" className="object-cover w-full h-full rounded-3xl  translate-y-[-990px]" />
  </div>
  <h3 className="fixed text-right text-nowrap text-white text-[20px] font-bold mt-[480px] translate-y-[-1440px]">Musixlab-Independet music recording platform</h3>
  <div className='flex text-xs gap-4 text-white/50  translate-y-[-920px]'>
    <h4>2023</h4>
    <h4 className='text-nowrap'>Brand Identity</h4>
    <h4>Website</h4>
  </div>
  <button className='text-[16px] font-semibold border w-[168px] h-[56px] border-white/50 rounded-full transform translate-x-[-700px] translate-y-[-800px] hover:border-white/20'>View all projects</button>
  <h3 className='text-[216px] font-bold tracking-tighter mt-[-880px] ml-[-200px] text-[rgb(110,56,147)]'>PROJECTS</h3>
</div>
</section>
</>
);
}
export default ProjectSection