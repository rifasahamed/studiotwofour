import NextImage from 'next/image';
import MusixlabImage from '@/Assets/images/musixlab.png';
import NorthImage from '@/Assets/images/north.png';
import ViheImage from '@/Assets/images/vihe.png';
import SharelocksImage from '@/Assets/images/sharelocks.png';

const Clientslide = () => {
    return (
        <div style={{ height: '500px', overflowY: 'scroll', scrollbarWidth: 'none' }}> {/* Inline styles for simplicity */}
            <div style={{ height: '800px' }}> {/* Ensure the inner div is taller */}
                {/* First Row */}
                <div className="grid grid-cols-4 gap-x-24 mt-[100px]">
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30" >
                        <NextImage src={MusixlabImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30" >
                        <NextImage src={NorthImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30" >
                        <NextImage src={ViheImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30" >
                        <NextImage src={SharelocksImage} alt="client image" />
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-4 gap-x-24 mt-[30px]">
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30" >
                        <NextImage src={MusixlabImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30" >
                        <NextImage src={NorthImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30" >
                        <NextImage src={ViheImage} alt="client image" />
                    </div>
                    <div className="border-2 w-[302px] h-[290px] flex justify-center items-center rounded-3xl border-white/30" >
                        <NextImage src={SharelocksImage} alt="client image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clientslide;
