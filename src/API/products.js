import axiosPublice from "../Hooks/axiosPublice";

// Fetch allproducts from db
export const getAllProducts = async (sorting) => {
    const { data } = await axiosPublice(`/allproducts?sort=${sorting}`)
    return data;
}