'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/cards/Navbar';
import MeetingImage from '@/Assets/images/meeting.png';
import LogoImage from '@/Assets/images/Logo.png';
import { Plus } from 'lucide-react';

const HeroSection = () => {
    return (
        <>
            {/* Navigation Bar */}
            <Navbar />

            {/* Hero Content */}
            <section id='section2' className="relative flex flex-col px-20 pt-16 h-[900px] md:h-[1400px] lg:h-[948px]">
                <div className="absolute top-[-30px] md:top-[-77px] lg:top-[-66px] left-5 md:left-[50px] lg:left-[81px]">
                    <Image src={LogoImage} className="w-14 h-14 md:w-[90px] md:h-[90px] lg:w-[117px] lg:h-[117px]" alt="StudiTwoFour image" />
                </div>

                <div className="flex ml-[-60px] md:ml-0 lg:ml-0 md:mt-[-30px] lg:mt-0">
                    {/* Left Content (Text) */}
                    <div className="relative">
                        <h2 className="md:ml-[-30px] lg:ml-0 text-[20px] md:text-[26px] lg:text-[34px] font-extrabold text-[rgb(110,56,147)]">
                            INSPIRE, INNOVATE, IGNITE
                        </h2>
                        <h1 className="text-[24px] md:ml-[-30px] lg:ml-0 md:text-[41px] lg:text-[61px] font-extrabold text-[rgb(255,220,0)] pt-2 md:pt-1 leading-none">
                            CRAFTING <br />
                            CREATIVITY WITH <br />
                            TECHNOLOGY
                        </h1>
                        <p className="flex text-nowrap w-[80%] max-w-[300px] text-[15px] md:text-[19px] lg:text-[23px] pt-16 leading-6 md:leading-[32.2px] md:ml-[-30px] lg:ml-0">
                            We are a creative technolab built to transform bold<br />
                            ideas into impactful realities. Whether it’s building <br />
                            unforgettable experiences or redefining what’s <br />
                            possible, we’re here to elevate your brand with <br />
                            passion and precision.
                        </p>
                        <button className="group flex items-center w-[150px] h-[50px] md:w-[200px] md:h-[56px] lg:w-[300px] lg:h-[56px] gap-3 px-8 py-4 rounded-full bg-[rgb(110,56,147)] text-white mt-10 md:ml-[-30px] lg:ml-0 lg:hover:bg-[#1D0704] lg:hover:text-[rgb(110,56,147)]">
                            <span className="text-[13px] ml-[-15px] md:ml-[-8px] lg:ml-0 text-nowrap md:text-base font-normal">
                                Start to collaborate
                            </span>
                            <Plus className="hidden lg:flex w-6 h-6 text-[rgb(249,99,54)] ml-auto rounded-full bg-white group-hover:text-[rgb(110,56,147)] group-hover:bg-[#1D0704]" />
                        </button>
                    </div>

                    {/* Right Content (Scrollable Image Section) */}
                    <div className="w-[375px] md:w-[715px] lg:w-[735px] relative mt-[420px] md:mt-[650px] lg:mt-[-60px] ml-[100px] md:ml-[-220px] lg:ml-[341px] transform translate-x-[-400px] md:translate-x-[-75px]">
                        <div className="w-full overflow-x-auto scroll-container whitespace-nowrap max-w-full">
                            <div className="flex space-x-6 md:space-x-8 lg:space-x-10">
                                {[1, 2, 3].map((_, index) => (
                                    <div key={index} className="relative w-[300px] md:w-[400px] lg:w-[510px] h-[300px] md:h-[400px] lg:h-[600px] bg-gray-100 rounded-3xl shadow-lg flex-shrink-0">
                                        <Image src={MeetingImage} className="w-full h-full object-cover rounded-3xl" alt="Meeting Image" />
                                        <button className="absolute inset-0 flex items-center justify-center mt-[200px] md:mt-[300px] lg:mt-[440px] ml-[200px] md:ml-[300px] lg:ml-[350px] z-50">
                                            <div className="group flex items-center justify-center w-[50px] md:w-[68px] lg:w-[88px] h-[50px] md:h-[66px] lg:h-[88px] bg-[rgb(110,56,147)] rounded-full shadow-lg transition-all duration-300 ease-in-out lg:hover:w-16 lg:hover:h-16 lg:hover:bg-white">
                                                <div className="w-0 h-0 border-t-[7px] md:border-t-[8px] border-t-transparent border-b-[7px] md:border-b-[8px] border-b-transparent border-l-[10px] md:border-l-[12px] border-l-white lg:group-hover:border-l-[rgb(110,56,147)] transition-all duration-300 ease-in-out"></div>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Section */}
                <div className="flex flex-col md:m-[20]">
                    <div className="flex justify-between mt-[30px] md:mt-[10px] lg:mt-[-100px] ml-[-740px] md:ml-[-720px] lg:ml-0">
                        <h2 className="text-[rgb(110,56,147)] text-sm md:text-base ml-[680px]">
                            Watch our showreel
                        </h2>
                        <h3 className="text-white/50 text-sm md:text-base mr-[-50px] md:mr-[10px] lg:mr-[-30px]">
                            1/5
                        </h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
