import { useQuery } from "@tanstack/react-query";
import { getAllreviews } from "../API/products";

const useReview = () => {
    const { data: review, refetch } = useQuery({
        queryFn: async () => getAllreviews(),
        queryKey: ['review']
    });
    return [review, refetch];
}

export default useReview;
