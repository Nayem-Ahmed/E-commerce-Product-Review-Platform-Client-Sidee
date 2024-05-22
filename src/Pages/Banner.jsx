import React from 'react';
import banner from '../assets/banner.png'
import bann from '../assets/radius.png'
import './banner.css'
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='px-5 my-2'>
            <div className='bg-[#C1DCDC] flex md:flex-row flex-col-reverse items-center justify-between px-10 pt-16 rounded-lg'>
                <div>
                    <h1 className="text-sm font-bold md:text-3xl mb-10">Discover amazing products and deals</h1>
                    <div className='flex md:gap-10 gap-5 banner-divider  mx-auto md:justify-start justify-center'>
                        <div className='divider-text mr-10'>
                            <p className='font-semibold text-2xl'>50+</p>
                            <span className='font-medium text-sm'>Product Species</span>
                        </div>
                        <div>
                            <p className='font-semibold text-2xl'>100+</p>
                            <span className='font-medium text-sm'>Customers</span>
                        </div>

                    </div>
                    <div className="relative  my-10">
                        <input
                            type="search"
                            placeholder="What are you looking for?"
                            className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none  focus:shadow-lg"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                    </div>
                </div>
                <div >
                    <div className='bg-black banner-image'>
                        <img className='w-52 mx-auto -top-3 relative' src={bann} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;