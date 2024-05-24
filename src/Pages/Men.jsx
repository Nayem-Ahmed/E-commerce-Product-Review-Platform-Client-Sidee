import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../API/products';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { MdOutlineKeyboardArrowRight ,MdOutlineKeyboardArrowLeft} from 'react-icons/md';

const Men = () => {
    const [menProducts, setMenProducts] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('men'); // Default category filter set to 'men'
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6); // Items per page

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
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Calculate the items to display for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = menProducts.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate the total number of pages
    const totalPages = Math.ceil(menProducts.length / itemsPerPage);

    return (
        <div className='p-5'>
            <div className='flex justify-between'>
                <p>{menProducts.length} items found of <span className='text-[#58B19F] font-bold'>"{categoryFilter}"</span></p>
                <div className="flex space-x-4">
                    <div>
                        Category:
                        <select onChange={handleCategoryChange} className='border py-2 px-3 rounded-full'>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                            <option value="electronics">Electronics</option>
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
                {currentItems?.map(men => (
                    <Link to={`/men_details/${men?._id}`} key={men?._id} className="bg-white hover:shadow-lg overflow-hidden transform transition-transform duration-300 border">
                        <img src={men?.images} alt={men?.name} className="w-full h-72 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg text-gray-800 mb-2">{men?.name}</h2>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg text-gray-700">${men?.price.toFixed(2)}</span>
                            </div>
                            <Rating style={{ maxWidth: 150 }} value={men?.rating} readOnly />
                        </div>
                    </Link>
                ))}
            </div>
                {/* Pagination Controls */}
                <div className="flex justify-center items-center space-x-4 mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded-full"
                >
                    <MdOutlineKeyboardArrowLeft />
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded-full"
                >
                    <MdOutlineKeyboardArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Men;
