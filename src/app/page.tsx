'use client';
import React from 'react';
import Image from 'next/image';
import TestimonialsSlide from '@/Assets/components/TestimonialsSlide';
import Clientslide from '@/Assets/components/Clientslide';
import Navbar from '@/Assets/components/Navbar';
import LogoImage from '@/Assets/images/Logo.png';
import MeetingImage from '@/Assets/images/meeting.png';
import FeatureImage from '@/Assets/images/feature.png';
import Asset1Image from '@/Assets/images/asset1.png';
import ProjectImage1 from '@/Assets/images/project1.png';
import ProjectImage2 from '@/Assets/images/project2.png';
import ProjectImage3 from '@/Assets/images/project3.png';
import ProjectImage4 from '@/Assets/images/project4.png';
import Asset2Image from '@/Assets/images/asset2.png';
import Studio1Image from '@/Assets/images/Studio1.png';
import Studio2Image from '@/Assets/images/Studio2.png';
import Studio3Image from '@/Assets/images/Studio3.png';
import ServicesImagae from '@/Assets/images/services.png';
import InsightImage from '@/Assets/images/insight.png';
import Vector from '@/Assets/images/Vector.png';
import Vector1 from '@/Assets/images/Vector1.png';
import Vector2 from '@/Assets/images/Vector2.png';
import { PlusIcon } from 'lucide-react';


const Home: React.FC = () => {

  return (
    <>
      <style jsx global>{`
        /* Allow vertical scrolling on the page */
        body {
          overflow-y: auto;
          overflow-x: hidden;
        }

        /* Hide horizontal scrollbar for images */
        .scroll-container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scroll-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
      `}</style>


      {/*(Navigation Bar) */}
       <Navbar/>
      {/*(hero Content) */}
      <section id='section2' className="relative flex flex-col px-20  pt-16 min-h-screen md:h-[948px]">
        <div className="absolute top-[-30px] md:top-[-66px] left-5 md:left-[50px] lg:left-[81px]">
          <Image src={LogoImage} className="w-14 h-14 md:w-[117px] md:h-[117px]" alt="StudiTwoFour image" />
        </div>

        <div className=" flex ml-[-60px] md:ml-0 lg:ml-0">
          {/* Left Content (Text) */}
          <div className="relative">
            <h2 className=" md:ml-[-30px] lg:ml-0 text-[20px] md:text-[34px] font-extrabold text-[rgb(110,56,147)]">
              INSPIRE, INNOVATE, IGNITE
            </h2>
            <h1 className="text-[24px] md:ml-[-30px] lg:ml-0 md:text-[61px] font-extrabold text-[rgb(255,220,0)] pt-2 md:pt-1 leading-none">
              CRAFTING <br />
              CREATIVITY WITH <br />
              TECHNOLOGY
            </h1>
            <p className="flex text-nowrap w-[80%] max-w-[300px] text-[15px] md:text-[20px] lg:text-[23px] pt-16 leading-6 md:leading-[32.2px] md:ml-[-30px] lg:ml-0">
              We are a creative technolab built to transform bold<br />
              ideas into impactful realities. Whether it’s building <br />
              unforgettable experiences or redefining what’s <br />
              possible, we’re here to elevate your brand with <br />
              passion and precision.
            </p>
            <button className=" group flex items-center w-[150px] h-[40px] md:w-[200px] md:h-[56px] lg:w-[300px] lg:h-[56px] gap-3 px-8 py-4 rounded-full bg-[rgb(110,56,147)] text-white mt-10 md:ml-[-30px] lg:ml-0 lg:hover:bg-[#1D0704] lg:hover:text-[rgb(110,56,147)]">
              <span className="text-[13px] ml-[-15px] md:ml-[-8px] lg:ml-0 text-nowrap md:text-base font-normal">Start to collaborate</span>
              <PlusIcon className="hidden lg:flex w-6 h-6 text-[rgb(249,99,54)] ml-auto rounded-full bg-white group-hover:text-[rgb(110,56,147)] group-hover:bg-[#1D0704]" />
            </button>
          </div>

          {/* Right Content (Scrollable Image Section) */}
          
          <div className=" w-[735px] relative mt-[430px] md:mt-[-60px] lg:mt-[-60px] ml-[100px] transform translate-x-[-400px] md:translate-x-[-75px]">
            <div className="w-full overflow-x-auto scroll-container whitespace-nowrap max-w-full">
              <div className="flex space-x-6 md:space-x-10">
                <div className="relative w-[300px] md:w-[510px] lg:w-[510px] h-[300px] md:h-[600px] lg:h-[600px] bg-gray-100 rounded-3xl shadow-lg flex-shrink-0">
                  <Image src={MeetingImage} className="w-full h-full object-cover rounded-3xl" alt="Meeting Image" />
                  <button className="absolute inset-0 flex items-center justify-center mt-[200px] md:mt-[440px] ml-[200px] md:ml-[350px] z-50">
                    <div className="group flex items-center justify-center w-[50px] md:w-[88px] h-[50px] md:h-[88px] bg-[rgb(110,56,147)] rounded-full shadow-lg transition-all duration-300 ease-in-out md:hover:w-16 md:hover:h-16 md:hover:bg-white">
                      <div className="w-0 h-0 border-t-[7px] md:border-t-[8px] border-t-transparent border-b-[7px] md:border-b-[8px] border-b-transparent border-l-[10px] md:border-l-[12px] border-l-white md:group-hover:border-l-[rgb(110,56,147)] transition-all duration-300 ease-in-out"></div>
                    </div>
                  </button>
                </div>

                <div className="relative w-[300px] md:w-[510px] lg:w-[510px] h-[300px] md:h-[600px] lg:h-[600px] bg-gray-100 rounded-3xl shadow-lg flex-shrink-0">
                  <Image src={MeetingImage} className="w-full h-full object-cover rounded-3xl" alt="Meeting Image" />
                  <button className="absolute inset-0 flex items-center justify-center mt-[200px] md:mt-[440px] ml-[200px] md:ml-[350px] z-50">
                    <div className="group flex items-center justify-center w-[50px] md:w-[88px] h-[50px] md:h-[88px] bg-[rgb(110,56,147)] rounded-full shadow-lg transition-all duration-300 ease-in-out md:hover:w-16 md:hover:h-16 md:hover:bg-white">
                      <div className="w-0 h-0 border-t-[7px] md:border-t-[8px] border-t-transparent border-b-[7px] md:border-b-[8px] border-b-transparent border-l-[10px] md:border-l-[12px] border-l-white md:group-hover:border-l-[rgb(110,56,147)] transition-all duration-300 ease-in-out"></div>
                    </div>
                  </button>
                </div>

                <div className="relative w-[300px] md:w-[510px] lg:w-[510px] h-[300px] md:h-[600px] lg:h-[600px] bg-gray-100 rounded-3xl shadow-lg flex-shrink-0">
                  <Image src={MeetingImage} className="w-full h-full object-cover rounded-3xl" alt="Meeting Image" />
                  <button className="absolute inset-0 flex items-center justify-center mt-[200px] md:mt-[440px] ml-[200px] md:ml-[350px] z-50">
                    <div className="group flex items-center justify-center w-[50px] md:w-[88px] h-[50px] md:h-[88px] bg-[rgb(110,56,147)] rounded-full shadow-lg transition-all duration-300 ease-in-out md:hover:w-16 md:hover:h-16 md:hover:bg-white">
                      <div className="w-0 h-0 border-t-[7px] md:border-t-[8px] border-t-transparent border-b-[7px] md:border-b-[8px] border-b-transparent border-l-[10px] md:border-l-[12px] border-l-white md:group-hover:border-l-[rgb(110,56,147)] transition-all duration-300 ease-in-out"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <div className="flex flex-col m-[20]">
          <div className="flex justify-between">
            <h2 className="text-[rgb(110,56,147)] text-base ml-[680px]">Watch our showreel</h2>
            <h3 className="text-white/50 text-base text-right mr-[-30px]">1/5</h3>
          </div>
        </div>
      </section>

      {/*(featured Content) */}
      <div className="relative group transition-all duration-[1200ms] ">
        <section id='section3' className="relative  h-[1079px] bg-[rgb(17,5,1)] group-hover:bg-[radial-gradient(circle,rgba(51,11,78,1),rgba(50,50,147,0.3))] transition-all duration-[1200ms] mt-[-100px]">
          <div className="absolute w-[650px] h-[782px] bg-gray-100 rounded-3xl shadow-lg overflow-hidden mx-auto transform translate-x-[80px] translate-y-[140px]">

            <Image src={FeatureImage} alt="Feature image" className="w-full h-full object-cover" />
          </div>
          <div className='transform translate-x-[605px] translate-y-[140px]'>
            <Image src={Asset1Image} alt='Asset image' className='w-[593px] h-[784px]' />
          </div>
          <div className="relative  translate-x-[1230px] translate-y-[-645px] bg-[rgb(254,220,0)] size-2.5 rounded-full"></div>
          <div className="relative  translate-x-[1254px] translate-y-[-663px] text-[rgb(254,220,0)]">About us</div>
          <div className='flex flex-col text-right text-[56px] font-extrabold leading-tight mt-[-530px] mr-[345px] md:mr-[200px] lg:mr-[345px]'>
          <p className='z-50'> DREAM.</p>
            <p className='transform translate-x-[84px]'>INNOVATE.</p>
            <p className='transform translate-x-[12px]'>CREATE.</p></div>
          <div className='flex flex-col text-left  transform translate-x-[989px] mt-8'>
            <p className=' text-[18px] text-white/50'> we believe in the power of connection—<br />between ideas and audiences, between<br /> technology and creativity. We’re not just a<br /> studio; we’re a team of visionaries and makers<br /> driven by a singular purpose: to propel brands<br /> into their brightest futures.</p>
            <p className='text-[18px] text-white/50 pt-6'>We fuse strategy with imagination, crafting<br /> stories that captivate and resonate. From<br /> concept to execution, every project we<br /> undertake is a masterpiece in motion,<br /> designed to leave a lasting impact.</p>
          </div>
          <button className="flex items-center w-[219px] h-[56px] px-8 py-4 rounded-full border border-white/50 mt-10 translate-x-[990px] lg:hover:border-[rgb(110,56,147)] group">
            <span className="text-[15px] font-semibold -translate-x-3">View more details</span>
            <PlusIcon className="w-6 h-6 p-[2px] text-white ml-auto translate-x-4 rounded-full bg-[rgb(110,56,147)] lg:hover:text-white lg:group-hover:bg-transparent" />
          </button>
        </section>
      </div>
      {/*(Project Content) */}
      <section id='section4' className=' h-[2378px]'>
        <div className="relative  translate-x-[80px] translate-y-[210px] bg-[rgb(254,220,0)] size-2.5 rounded-full "></div>
        <div className="relative  translate-x-[100px] translate-y-[194px] text-[rgb(254,220,0)]">Projects</div>
        <div className='tranform translate-x-[780px]'>
          <h1 className='flex flex-col text-left text-[56px] font-extrabold leading-tight mt-[160px] mr-[100px] '>DESIGN CHRONICLES:<br />
            OUR FEATURED<br />PROJECTS
          </h1>
          <div className="flex w-[650px] h-[470px] rounded-3xl shadow-lg">
            <Image src={ProjectImage1} alt="" className="object-cover w-full h-full rounded-3xl  translate-x-[-700px] translate-y-[130px]  " />
          </div>
          <h3 className="fixed text-right text-nowrap text-white text-[20px] font-bold mt-[630px] translate-x-[-700px] translate-y-[-470px]">Sendone-Package sent in time.</h3>

          <div className='flex text-xs gap-4 text-white/50 translate-x-[-700px] translate-y-[200px]'>
            <h4>2023</h4>
            <h4 className='text-nowrap'>Brand Identity</h4>
            <h4>Website</h4>
          </div>
          <div className=" flex w-[650px] h-[750px] rounded-3xl shadow-lg">
            <Image src={ProjectImage2} alt="" className="object-cover w-full h-full rounded-3xl  translate-y-[-355px]" />
            <h3 className="fixed text-right text-nowrap text-white text-[20px] font-bold mt-[630px] translate-y-[-200px]">Vihe-Image processing AI</h3>
          </div>
          <div className='flex text-xs gap-4 text-white/50 translate-y-[-280px]'>
            <h4>2023</h4>
            <h4 className='text-nowrap'>Brand Identity</h4>
            <h4>Website</h4>
          </div>
          <div className="flex w-[650px] h-[750px] rounded-3xl shadow-lg">
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
      {/*(services Content) */}
      <section id='section6' className=' h-[1604px] bg-[rgba(101,85,143,1)]'>
        <div className="relative  translate-x-[80px] translate-y-[150px] bg-white size-3 rounded-full "></div>
        <div className="relative  translate-x-[100px] translate-y-[132px] text-white">The Services</div>
        <p className='text-[18px] ml-[800px] mt-[110px]'>Our expertise encompasses identity, strategy and positioning, AI-driven<br />solutions, immersive AR/VR experiences, websites and digital<br />experiences, web applications and custom-built apps, advertising and<br />communication, product and packaging design, exhibitions and<br />installations, and motion and sound. We bring creativity to life through<br /> collaboration and camaraderie, leveraging advanced technology t<br />deliver innovative and impactful results.</p>
        <div className='w-[400px] h-[249px] overflow-hidden rounded-3xl ml-[80px] mt-[100px]'>
          <Image src={ServicesImagae} alt='service images' />
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
      {/*(past clients Content) */}
      <section id='section7' className=' h-[1190px] overflow-hidden'>
        <div>
          <div className="relative  translate-x-[80px] translate-y-[150px] bg-[rgb(254,220,0)] size-3 rounded-full "></div>
          <div className="relative  translate-x-[100px] translate-y-[132px] text-[rgb(254,220,0)]">Past clients</div>
        </div>
        <p className='uppercase text-[56px] font-extrabold leading-[1.1] mt-[200px] ml-[80px]'>By focusing on every detail<br /> of visual design, web, and<br />app development, we craft<br />identities that connect<br />deeply and remain<br />unforgettable to audiences</p>

        <Clientslide />
      </section>

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
};

export default Home;
