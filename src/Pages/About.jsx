import { FaStar } from "react-icons/fa";
import React from 'react';
import product from '../assets/product3.jpg'
import product2 from '../assets/banner.png'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";


const About = () => {
    return (
        <div className="px-5">
            <p className="text-2xl font-bold">What customers say about<br></br> GREEMIND?</p>

            <div className="flex flex-col lg:flex-row md:flex-row gap-8 my-8 ">
                <div className="bg-[#C1DCDC]  p-5 rounded-md ">
                    <p className="mb-4">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                    <div className="flex gap-5 items-center justify-between">
                        <div className="flex gap-5 items-center relative">
                            <BiSolidQuoteSingleLeft className="absolute left-0 bottom-0 top-0 text-2xl"></BiSolidQuoteSingleLeft>
                            <img className='w-20' src={product2} alt="" />
                            <div>
                                <h2 className="font-bold">John Doe</h2>
                                <p>Youtuber</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <FaStar></FaStar>
                            <span className="font-semibold">4.5</span>
                        </div>
                    </div>

                </div>

                <div className="bg-[#C1DCDC] p-5 rounded-md">
                    <p className="mb-4">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>


                    <div className="flex gap-5 items-center justify-between">
                        <div className="flex gap-5 items-center relative">
                            <BiSolidQuoteSingleLeft className="absolute left-0 bottom-0 top-0 text-2xl"></BiSolidQuoteSingleLeft>

                            <img className='w-20' src={product2} alt="" />
                            <div>

                                <h2 className="font-bold">John Doe</h2>
                                <p>Youtuber</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-5">
                            <FaStar></FaStar>
                            <span className="font-semibold">4.5</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;