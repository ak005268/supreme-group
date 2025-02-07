import performance from '../../assets/videos/section-1.mp4';

const IntroBanner = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute top-0 left-0"
      >
        <source src={performance} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      <div className="relative z-10 text-center text-white px-1">
        <p className='text-[22px] font-normal'>Performance in motion</p>
        <p className=" font-semibold text-[28px] lg:text-[48px]">Soft trims and <span className='text-c2'> NVH solutions</span></p>
        <p className='font-normal text-[20px]'> for seamless rides</p>
      </div>

    </div>
  );
};

export default IntroBanner;