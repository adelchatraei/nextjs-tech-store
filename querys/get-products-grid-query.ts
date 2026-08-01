import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const useGetProductGridQuery = () => {
    const searchParam = useSearchParams();
    const sort = searchParam.get("sort");

    const fetchData = async () => {
        const req = await fetch(
            `http://localhost:3000/api/products?sort=${sort || "newest"}`,
        );
        const res = await req.json();
        return res;
    };

    return useQuery({ queryKey: ["product-item"], queryFn: fetchData });
};
export default useGetProductGridQuery;
