import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Loader from "../Components/Loader";

 
  
const Root = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, []);
    if (loading) {
        return <Loader></Loader>;
    }
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-90px)]'>
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;