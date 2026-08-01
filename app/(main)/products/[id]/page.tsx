import ProductBreadcrumb from "@/components/product-page-cmp/single-product-page/ProductBreadcrumb";
import ProductDetails from "@/components/product-page-cmp/single-product-page/ProductDetails";
import ProductHero from "@/components/product-page-cmp/single-product-page/ProductHero";
import getSingleProduct from "@/querys/productQueries/getSingleProduct";

type SingleProductProps = {
    params: Promise<{
        id: string;
    }>;
};

const SingleProduct = async ({ params }: SingleProductProps) => {
    const { id } = await params;
    const SingleProduct = await getSingleProduct(id);

    return (
        <div className="bg-[#F2F4F8] min-h-screen pb-20">
            <div className="container-custom py-6">
                <ProductBreadcrumb
                    category={SingleProduct.category}
                    name={SingleProduct.name}
                />

                <ProductHero product={SingleProduct} />

                <ProductDetails product={SingleProduct} />
            </div>
        </div>
    );
};

export default SingleProduct;
