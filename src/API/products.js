import axiosPublice from "../Hooks/axiosPublice";

export const getAllProducts = async (sorting, categoryFilter) => {
    const { data } = await axiosPublice(`/allproducts?sort=${sorting}&category=${categoryFilter}`);
    return data;
};

// Fetch reviews for a specific product
export const getAllreviews = async () => {
    const { data } = await axiosPublice(`/review`);
    return data;
};

