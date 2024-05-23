// import React, { useEffect, useState } from 'react';
// import { getAllProducts } from '../API/products';
// import { Link } from 'react-router-dom';
// import { Rating } from '@smastrom/react-rating';

// const Electnonics = () => {
//     const [electronicsProducts, setelectronicsProducts] = useState([]);
//     const [sortOption, setSortOption] = useState();
//     console.log(sortOption);

//     console.log(electronicsProducts);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const productsData = await getAllProducts(sortOption); // Fetch data from the API
//                 // Filter products for men category
//                 const electronicsProductsData = productsData.filter(product => product.category === 'electronics');
//                 setelectronicsProducts(electronicsProductsData);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };

//         fetchData();
//     }, [sortOption]);
//     const handleSortChange = async (event) => {
//         const selectedOption = event.target.value; // Update sort option when changed
//         setSortOption(selectedOption)

//     };
//     return (
//         <div className='p-5'>
//             <div className='flex justify-between'>
//                 <p>{electronicsProducts.length} items found of <span className='text-[#58B19F] font-bold'>"{electronicsProducts[0]?.category}"</span></p>
//                 <div>
//                     Sort by :
//                     <select onChange={handleSortChange} className='border py-2 px-3 rounded-full'>
//                         <option value="">Select</option>
//                         <option value="priceHighToLow">Price High to Low</option>
//                         <option value="priceLowToHigh">Price Low to High</option>
//                         <option value="ratingHighLow">Rating High to Low</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center group  my-5">
//                 {electronicsProducts?.map(men => (
//                     <Link to={``} key={men?._id} className="bg-white hover:shadow-lg overflow-hidden transform transition-transform duration-300 border ">
//                         <img src={men?.images} alt={men?.name} className=" w-full h-72 object-cover " />
//                         <div className="p-4">
//                             <h2 className="text-lg  text-gray-800 mb-2">{men?.name}</h2>
//                             <div className="flex justify-between items-center mb-4">
//                                 <span className="text-lg text-gray-700">${men?.price}</span>
//                             </div>
//                             <Rating style={{ maxWidth: 150 }} value={men?.rating} readOnly />
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Electnonics;


import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../API/products';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Electnonics = () => {
    const [electronicsProducts, setMenProducts] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('electronics'); // Default category filter set to 'men'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getAllProducts(sortOption, categoryFilter); // Fetch data from the API with sort and category filters
                setMenProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [sortOption, categoryFilter]);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    return (
        <div className='p-5'>
            <div className='flex justify-between'>
                <p>{electronicsProducts.length} items found of <span className='text-[#58B19F] font-bold'>"{categoryFilter}"</span></p>
                <div className="flex space-x-4">
                    <div>
                        Category:
                        <select onChange={handleCategoryChange} className='border py-2 px-3 rounded-full'>
                            <option value="electronics">Electronics</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </div>
                    <div>
                        Sort by:
                        <select onChange={handleSortChange} className='border py-2 px-3 rounded-full'>
                            <option value="">Select</option>
                            <option value="priceHighToLow">Price High to Low</option>
                            <option value="priceLowToHigh">Price Low to High</option>
                            <option value="ratingHighLow">Rating High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center group my-5">
                {electronicsProducts?.map(electronics => (
                    <Link to={`/electronics_details/${electronics?._id}`} key={electronics?._id} className="bg-white hover:shadow-lg overflow-hidden transform transition-transform duration-300 border">
                        <img src={electronics?.images} alt={electronics?.name} className="w-full h-72 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg text-gray-800 mb-2">{electronics?.name}</h2>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg text-gray-700">${electronics?.price.toFixed(2)}</span>
                            </div>
                            <Rating style={{ maxWidth: 150 }} value={electronics?.rating} readOnly />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Electnonics;