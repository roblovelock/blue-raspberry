import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import {Link} from "react-scroll";

const Home = () => {
    return (
        <div id='home' className='bg-[#0a192f] w-full h-screen pt-[80px]'>
            <div className='max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-gray-300'>We are</p>
                <h1 className='text-[#35c0ed] text-4xl sm:text-6xl font-bold'>Blue Raspberry Consulting</h1>
                <h2 className='text-gray-500 text-2xl sm:text-3xl font-bold'>Providing professional software development
                    services</h2>
                <p className='text-gray-500 py-4 max-w-[700px]'>
                    Highly experienced principal engineer/tech lead with over fifteen years building high available,
                    distributed application architectures.
                    Accomplished at leading a team of developers ensuring the best coding practices are followed.
                </p>
                <div>
                    <Link to="expertise" smooth={true} duration={500}>
                        <button
                            className='group text-gray-300 border-2 px-6 py-3 my-2 flex items-center hover:bg-[#35c0ed] hover:text-gray-700 hover:border-[#35c0ed]'>
                            Expertise
                            <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;