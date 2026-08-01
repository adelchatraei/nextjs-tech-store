export interface Review {
    userId: string;
    name: string;
    email: string;
    rating: number;
    comment: string;
    createdAt: string;
}

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    regularPrice: number;
    images: string[];
    image: string;
    category: string;
    subCategory: string;
    brand: string;
    modelName: string;
    warranty: string;
    specifications: string;
    stock: number;
    reviews: Review[];
    avgRating: number;
    numReviews: number;
    createdAt: string;
    updatedAt: string;
}

export interface ProductsResponse {
    products: Product[];
    totalPages: number;
    currentPage: number;
    totalProducts: number;
}
