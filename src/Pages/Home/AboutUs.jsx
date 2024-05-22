import React from 'react';
import { GiClothes } from "react-icons/gi";
import { GiLoincloth } from "react-icons/gi";
import { IoPhonePortraitOutline } from "react-icons/io5";


const AboutUs = () => {
    return (
        <div className='my-6 p-5'>
            <div className='max-w-96 mx-auto text-center mb-6'>
                <h1 className='text-2xl font-bold mb-2'>About us</h1>
                <p className='text-gray-400'>Order now and appreciate the beauty of nature</p>
            </div>

        <div className='flex gap-5 flex-col md:flex-row'>
            <div className='text-center'>
                <div className='bg-[#C1DCDC] h-16 w-16 rounded-full text-center flex items-center m-auto mb-3' >
                    <GiClothes className='text-center m-auto text-4xl '></GiClothes>
                </div>
                <h1 className='text-2xl font-semibold mb-3'>Large Assortment</h1>
                <p className='text-gray-500'>we offer many different types of products with fewer variations in each category.</p>
            </div>
            <div className='text-center'>
                <div className='bg-[#C1DCDC] h-16 w-16 rounded-full text-center flex items-center m-auto mb-3' >
                    <GiLoincloth className='text-center m-auto text-4xl '></GiLoincloth>
                </div>
                <h1 className='text-2xl font-semibold mb-3'>Fast & Free Shipping</h1>
                <p className='text-gray-500'>we offer many different types of products with fewer variations in each category.</p>
            </div>
            <div className='text-center'>
                <div className='bg-[#C1DCDC] h-16 w-16 rounded-full text-center flex items-center m-auto mb-3' >
                    <IoPhonePortraitOutline className='text-center m-auto text-4xl '></IoPhonePortraitOutline>
                </div>
                <h1 className='text-2xl font-semibold mb-3'>24/7 Support</h1>
                <p className='text-gray-500'>we offer many different types of products with fewer variations in each category.</p>
            </div>

        </div>
        </div>
        
    );
};

export default AboutUs;