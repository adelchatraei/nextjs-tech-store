import ProductsToolbar from "./ProductsToolbar";
import ProductRow from "./ProductRow";
import { ProductsResponse } from "@/schemas/products/productResponse";

type ProductsTableProps = {
    productsData: ProductsResponse;
};

const ProductsTable = ({ productsData }: ProductsTableProps) => {
    return (
        <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm overflow-hidden min-h-[55vh]">
            <ProductsToolbar totalProducts={productsData.totalProducts} />

            <div className="overflow-x-auto">
                <table className="w-full min-w-190 text-left">
                    <thead>
                        <tr className="bg-gray-50/50">
                            <th className="px-5 sm:px-6 py-4 text-[9px] uppercase font-black text-gray-400 tracking-widest">
                                Product Info
                            </th>

                            <th className="px-5 sm:px-6 py-4 text-[9px] uppercase font-black text-gray-400 tracking-widest">
                                Category
                            </th>

                            <th className="px-5 sm:px-6 py-4 text-[9px] uppercase font-black text-gray-400 tracking-widest">
                                Price
                            </th>

                            <th className="px-5 sm:px-6 py-4 text-[9px] uppercase font-black text-gray-400 tracking-widest">
                                Stock
                            </th>

                            <th className="px-5 sm:px-6 py-4 text-[9px] uppercase font-black text-gray-400 tracking-widest text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-50">
                        {productsData.products?.map((product) => (
                            <ProductRow key={product._id} product={product} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductsTable;
