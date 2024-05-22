import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import { MdAddShoppingCart } from "react-icons/md";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import  logoo from '../assets/e-lo.png';
import { FaUser } from "react-icons/fa6";




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const link = <>
        <NavLink className='nav' to='/'>Home</NavLink>
        <NavLink className='nav' to='/products'>Products</NavLink>
        <NavLink className='nav' to='/contact'>Contact us</NavLink>
    </>
    return (
        <div className='px-5'>
        <div className="navbar relative z-50 bg-base-100  mb-0 pb-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a href='/' className="text-xl"><img className='w-24' src={logoo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end md:mr-7">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full border">
                            {user?.email ?
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-8 object-cover border' src={user?.photoURL} alt="" />
                                </div>
                                :
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-8 ' src='https://i.ibb.co/CQLSNTH/istockphoto-1337144146-612x612.jpg' alt="" />
                                </div>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100 rounded-md  w-52">

                        {user?.email ? <li className='mb-3 font-semibold'>{user?.displayName}</li> : null}
                        {user?.email ? <li className='mb-3 font-semibold'>{user?.email}</li> : null}


                    </ul>
                </div>

                {user?.email ?
                    <button onClick={logOut} className='bg-[#58B19F] text-white px-5 py-2 rounded-sm hover:bg-blue-500  font-medium shadow-md'>Sign Out</button>
                    :
                    <Link to='/signin'>
                        <button className='bg-[#58B19F] text-white px-5 py-2 rounded-sm hover:bg-[#C1DCDC] font-medium shadow-md'>SIGN IN</button>
                    </Link>
                }
                <div>

                <MdAddShoppingCart className='text-2xl ml-7'></MdAddShoppingCart>
                </div>

            </div>
        </div>
        </div>


    );
};

export default Navbar;