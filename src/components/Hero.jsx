import netflix from '../assets/netflix.jpg';
import Logo from '../assets/Logo.png';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
      <div
        className="h-screen bg-cover bg-center w-full relative md:bg-cover sm:bg-cover"
        style={{ backgroundImage: `url(${netflix})` }}>
            <div className='bg-black w-full h-full bg-opacity-50'>
                <div className='flex text-center justify-between items-center py-10 px-10'>
                    <img src={Logo} alt="logo" className='lg:w-[190px] w-[80px] lg:ml-[80px]' />
                    <div className='text-xs lg:text-base lg:mr-[50px]'>
                        <button className='mx-3 border px-1 py-1 bg-black bg-opacity-50 border-neutral-500 lg:w-[90px]  lg:px-4'>English</button>
                        <button className='bg-[rgb(229,9,20)] px-4 py-1 rounded-lg  lg:w-[90px]'>Sign In</button>
                    </div>
                </div>
            <div className='flex flex-col justify-center items-center mt-10 text-center'>
                <h1 className='text-4xl lg:text-5xl flex-col lg:w-[500px] font-bold w-[290px] '>
                    Unlimited movies, TV shows and more
                </h1>
                <p className='mt-3 lg:text-xl'>
                    Starts at ₹149. Cancel at any time
                </p>
                <p className='mt-4 ml-6 lg:text-base'>
                Ready to watch? Enter your email to create or restart your membership
                </p>
            </div>
            <div className='flex lg:flex-row flex-col items-center justify-center mt-3 '>
                <input type="text" className='w-[250px] h-14  border border-neutral-400 mr-2 lg:w-[350px] lg:h-[70px] mb-4 lg:mb-0' placeholder='   Email address'/>

                <button className='flex bg-[rgb(229,9,20)] px-7 py-[17px] rounded-lg lg:text-xl text-xl lg:h-[70px]'>Get Started <ChevronRight /></button>
            </div>
            </div>
      </div>
  );
};

export default Hero;
