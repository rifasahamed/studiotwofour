import NextImage from 'next/image';
import MusixlabImage from '@/Assets/images/musixlab.png';
import NorthImage from '@/Assets/images/north.png';
import ViheImage from '@/Assets/images/vihe.png';
import SharelocksImage from '@/Assets/images/sharelocks.png';

const Clientslide = () => {
    return (
        <div className="mt-16 h-[400px] overflow-y-scroll scrollbar-hidden flex justify-center">
            <div className="w-[1280px]">
                {/* Grid Container */}
                <div className="grid grid-cols-4 gap-x-8 items-start">
                    {/* First Row */}
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30">
                        <NextImage src={MusixlabImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30">
                        <NextImage src={NorthImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30">
                        <NextImage src={ViheImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30">
                        <NextImage src={SharelocksImage} alt="client image" />
                    </div>

                    {/* Second Row */}
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30 mt-[30px]">
                        <NextImage src={MusixlabImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30 mt-[30px]">
                        <NextImage src={NorthImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30 mt-[30px]">
                        <NextImage src={ViheImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30 mt-[30px]">
                        <NextImage src={SharelocksImage} alt="client image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clientslide;
