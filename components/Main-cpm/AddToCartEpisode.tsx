import useQuantity from "@/hooks/useQuantity";
import productToBasketItem from "@/lib/mappers/productToBasketItem";
import useBasket from "@/store/useBasket";
import { Product } from "@/types/products-type";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

type AddToCartEpisodeProps = {
    product: Product;
};

const AddToCartEpisode = ({ product }: AddToCartEpisodeProps) => {
    const { addToBasket } = useBasket();

    const { quantity } = useQuantity(product.stock);

    const handeAddToBasketClick = () => {
        addToBasket(productToBasketItem(product, quantity));
        toast.success("Added to cart");
    };
    return (
        <button
            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-primary hover:text-white transition-all"
            type="button"
            onClick={handeAddToBasketClick}
        >
            <ShoppingCart size={16} />
        </button>
    );
};

export default AddToCartEpisode;
