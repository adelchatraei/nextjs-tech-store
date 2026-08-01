import { ProductsResponse } from "@/schemas/products/productResponse";

export const mockProducts: ProductsResponse = {
    products: [
        {
            _id: "687f1c9a12ab34cd5678ef90",

            name: "Logitech MX Brio 4K Webcam",

            description:
                "The Logitech MX Brio is a premium 4K webcam designed for creators, professionals, and streamers. It features Ultra HD video recording, AI-powered auto framing, dual beamforming microphones, HDR support, and outstanding low-light performance.",

            price: 21000,

            regularPrice: 22000,

            images: [
                "https://pixeldigital.ir/wp-content/uploads/2026/02/RX10-IV-a.jpg",
                "https://pixeldigital.ir/wp-content/uploads/2026/02/RX10-IV-a.jpg",
                "https://pixeldigital.ir/wp-content/uploads/2026/02/RX10-IV-a.jpg",
            ],

            image: "https://pixeldigital.ir/wp-content/uploads/2026/02/RX10-IV-a.jpg",

            category: "General",

            subCategory: "Webcam",

            brand: "Logitech",

            modelName: "MX Brio",

            warranty: "24 Months Official Warranty",

            specifications: `
• Ultra HD 4K (3840 × 2160) @30fps
• Full HD 1080p @60fps
• HDR Support
• Dual Beamforming Microphones
• AI Auto Framing
• USB Type-C
• Windows / macOS Compatible
`,

            stock: 7,

            reviews: [
                {
                    userId: "u1",
                    name: "John Smith",
                    email: "john@example.com",
                    rating: 5,
                    comment:
                        "Fantastic webcam. The image quality is incredibly sharp and the autofocus is excellent.",
                    createdAt: "2026-07-01T10:00:00.000Z",
                },
                {
                    userId: "u2",
                    name: "Sarah Lee",
                    email: "sarah@example.com",
                    rating: 4,
                    comment:
                        "Excellent quality. A little expensive but definitely worth it.",
                    createdAt: "2026-07-05T14:30:00.000Z",
                },
            ],

            avgRating: 4.5,

            numReviews: 2,

            createdAt: "2026-06-20T10:00:00.000Z",

            updatedAt: "202",
        },
    ],
    totalPages: 0,
    currentPage: 0,
    totalProducts: 0,
};
