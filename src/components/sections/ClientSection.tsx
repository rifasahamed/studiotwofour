import Clientslide from '@/components/cards/Clientslide';
const ClientSection = () => {
  return(
    <>
{/*(past clients Content) */}
<section id='section7' className=' h-[1190px] overflow-hidden'>
<div>
  <div className="relative  translate-x-[80px] translate-y-[150px] bg-[rgb(254,220,0)] size-3 rounded-full "></div>
  <div className="relative  translate-x-[100px] translate-y-[132px] text-[rgb(254,220,0)]">Past clients</div>
</div>
<p className='uppercase text-[56px] font-extrabold leading-[1.1] mt-[200px] ml-[80px]'>By focusing on every detail<br /> of visual design, web, and<br />app development, we craft<br />identities that connect<br />deeply and remain<br />unforgettable to audiences</p>

<Clientslide />
</section>
</>
);
}
export default ClientSection