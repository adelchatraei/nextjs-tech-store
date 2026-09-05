import { Product } from "@/schemas/products/product";
import ProductActions from "./ProductActions";
import Image from "next/image";

type ProductRowProps = {
    product: Product;
};

const ProductRow = ({ product }: ProductRowProps) => {
    return (
        <tr className="group hover:bg-gray-50/50 transition-colors">
            <td className="px-5 sm:px-6 py-5">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gray-50 overflow-hidden flex items-center justify-center shrink-0">
                        <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 text-[9px] font-black">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={44}
                                height={44}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="min-w-0">
                        <p className="text-sm font-black text-foreground group-hover:text-primary transition-colors truncate">
                            {product.name}
                        </p>

                        <p className="mt-1 text-[8px] font-bold text-gray-400 tracking-wider">
                            {product._id}
                        </p>
                    </div>
                </div>
            </td>

            <td className="px-5 sm:px-6 py-5">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-[8px] font-black tracking-wider">
                    {product.category._id}
                </span>
            </td>

            <td className="px-5 sm:px-6 py-5">
                <span className="text-sm font-black text-foreground">
                    ${product.price.toLocaleString("en-US")}
                </span>
            </td>

            <td className="px-5 sm:px-6 py-5">
                <div className="space-y-1.5 w-20">
                    <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-orange-400">
                            {product.stock}
                        </span>
                    </div>

                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-orange-400 rounded-full"
                            style={{
                                width: `${Math.min(product.stock * 10, 100)}%`,
                            }}
                        />
                    </div>
                </div>
            </td>

            <td className="px-5 sm:px-6 py-5">
                <ProductActions productId={product._id} />
            </td>
        </tr>
    );
};

export default ProductRow;
