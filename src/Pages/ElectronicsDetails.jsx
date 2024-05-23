import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ElectronicsDetails = () => {
    const electronicsDetails = useLoaderData();
    return (
        <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    {/* Product Image */}
                    <img src={electronicsDetails.images} alt={electronicsDetails.name} className="w-full h-96 object-cover" />
                </div>
                <div>
                    {/* Product Name */}
                    <h1 className="text-3xl font-bold mb-2">{electronicsDetails.name}</h1>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                        <Rating style={{ maxWidth: 150 }} value={electronicsDetails.rating} readOnly />
                        <span className="ml-2 text-gray-600">{electronicsDetails.rating} stars</span>
                    </div>

                    {/* Price */}
                    <p className="text-xl font-semibold mb-2">${electronicsDetails.price}</p>

                    {/* Description */}
                    <p className="mb-4">{electronicsDetails.description}</p>

                    {/* Specifications */}
                    <p className="font-bold mb-2">Specifications:</p>
                    <ul className="list-disc list-inside mb-4">
                        {electronicsDetails.specifications?.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>

                    {/* Availability */}
                    <p className="font-bold mb-2">Availability:</p>
                    <p className="mb-4">{electronicsDetails.availability}</p>
                </div>
            </div>

            {/* User Reviews */}
            {/* <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
            {electronicsDetails.reviews?.map((review, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p><strong>{review.username}</strong> <span className="text-gray-600">- {new Date(review.date).toLocaleDateString()}</span></p>
                    <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />
                    <p>{review.text}</p>
                    <div className="flex items-center mt-2">
                        <button className="mr-2 text-blue-500">Like</button>
                        <button className="mr-2 text-blue-500">Dislike</button>
                        <button className="text-blue-500">Reply</button>
                    </div>
                </div>
            ))}
        </div> */}
        </div>
    );
};

export default ElectronicsDetails;