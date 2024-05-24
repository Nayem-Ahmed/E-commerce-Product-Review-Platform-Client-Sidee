import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { AuthContext } from '../Providers/AuthProviders';
import axiosPublice from '../Hooks/axiosPublice';
import useReview from '../Hooks/useReview';

const WomenDetails = () => {
    const { user } = useContext(AuthContext)
    const womenDetails = useLoaderData();
    const [review, refetch] = useReview();
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');
    const [userReviews, setUserReviews] = useState(womenDetails.reviews || []);
    console.log(review);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!captchaToken) {
        //     toast('Please complete the CAPTCHA');
        //     return;
        // }

        const newReview = {
         
            username: user?.displayName, // Replace with actual logged-in username
            date: new Date().toISOString(),
            rating: rating,
            text: reviewText,
        };
        console.log(newReview);

        try {
            const response = await axiosPublice.post(`/review`, newReview, {
                headers: { 'captcha-token': captchaToken },
            });
            setRating(0);
            setReviewText('');
            refetch();
            toast.success("submitting review successful")

        } catch (error) {
            toast.error('Error submitting review:', error);

        }
    };

    return (
        <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    {/* Product Image */}
                    <img src={womenDetails.images} alt={womenDetails.name} className="w-full h-96 object-cover" />
                </div>
                <div>
                    {/* Product Name */}
                    <h1 className="text-3xl font-bold mb-2">{womenDetails.name}</h1>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                        <Rating style={{ maxWidth: 150 }} value={womenDetails.rating} readOnly />
                        <span className="ml-2 text-gray-600">{womenDetails.rating} stars</span>
                    </div>

                    {/* Price */}
                    <p className="text-xl font-semibold mb-2">${womenDetails.price}</p>

                    {/* Description */}
                    <p className="mb-4">{womenDetails.description}</p>

                    {/* Specifications */}
                    <p className="font-bold mb-2">Specifications:</p>
                    <ul className="list-disc list-inside mb-4">
                        {womenDetails.specifications?.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>

                    {/* Availability */}
                    <p className="font-bold mb-2">Availability:</p>
                    <p className="mb-4">{womenDetails.availability}</p>
                </div>
            </div>

            {/* User Reviews */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
                {review?.map((revieww, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                        <p><strong>{revieww.username}</strong> <span className="text-gray-600">- {new Date(revieww.date).toLocaleDateString()}</span></p>
                        <Rating style={{ maxWidth: 100 }} value={revieww.rating} readOnly />
                        <p>{revieww.text}</p>
                        <div className="flex items-center mt-2">
                            <button className="mr-2 text-blue-500">Like</button>
                            <button className="mr-2 text-blue-500">Dislike</button>
                            <button className="text-blue-500">Reply</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Review input*/}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
                <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Rating:</label>
                        <Rating style={{ maxWidth: 200 }} value={rating} onChange={setRating} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Review:</label>
                        <textarea
                            className="w-full p-2 border rounded"
                            rows="4"
                            required
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-4 ">
                        <ReCAPTCHA
                            sitekey="your-recaptcha-site-key"
                            onChange={(token) => setCaptchaToken(token)}
                        />
                    </div>
                    <button type="submit" className="bg-[#58B19F] text-white py-2 px-4 rounded">
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WomenDetails;