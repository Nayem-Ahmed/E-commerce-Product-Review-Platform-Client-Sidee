

import React from 'react';
import footerLogo from '../assets/e-lo.png';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white px-5">
            <div className='pt-6 pb-6'>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="mb-6 md:mb-0">
                    <img src={footerLogo} alt="Footer Logo" className="mb-4 h-32" />
                    <p className="text-sm"> E-commerce Product Review Platform<br /> Providing reliable tech since 1992</p>
                    <div className="mt-4 flex">
                        <a href="#" className="text-gray-400 hover:text-white mr-4"><FaFacebookF /></a>
                        <a href="#" className="text-gray-400 hover:text-white mr-4"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="text-sm">
                        <li className="mb-2"><Link to="/">HOME</Link></li>
                        <li className="mb-2"><Link to="/">Electronics</Link></li>
                        <li className="mb-2"><Link to="/">Fashion</Link></li>
                        <li className="mb-2"><Link to="/">KIDS</Link></li>
                        <li><Link to="/">HOME</Link></li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="text-sm">
                        <li className="mb-2"><Link to="/">Electronics</Link></li>
                        <li className="mb-2"><Link to="/">Fashion</Link></li>
                        <li className="mb-2"><Link to="/">KIDS</Link></li>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Clothing</a></li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm mb-2">123 Main Street, City, Country</p>
                    <p className="text-sm">Email: webdevnayem@gmail.com</p>
                    <p className="text-sm">Phone: +88 01936797600</p>
                </div>
            </div>

            <div className="mt-4">
                <input type="email" placeholder="Your email" className="px-4 py-2 mr-2 w-full text-black sm:w-auto border border-gray-800 focus:outline-none" />
                <button className="px-6 py-2 bg-[#58B19F] text-white hover:bg-gray-700 focus:outline-none">Subscribe</button>
            </div>
            <hr className="my-5" />
            <div className="text-center">
                <p className="text-sm">© {new Date().getFullYear()} E-commerce Product Review Platform All rights reserved.</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
