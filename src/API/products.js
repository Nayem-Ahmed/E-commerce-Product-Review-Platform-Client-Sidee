import axiosPublice from "../Hooks/axiosPublice";

// Fetch allproducts from db
export const getAllProducts = async () => {
    const { data } = await axiosPublice(`/allproducts`)
    return data;
}