// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
// import { NextRequest, NextResponse } from "next/server";

// const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

// const PRODUCT_MANAGEMENT_ROLES = ["super-admin", "admin", "manager"] as const;

// type ProductManagementRole = (typeof PRODUCT_MANAGEMENT_ROLES)[number];

// const isProductManagementRole = (
//     role: string,
// ): role is ProductManagementRole => {
//     return PRODUCT_MANAGEMENT_ROLES.includes(role as ProductManagementRole);
// };

// const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

// export async function POST(request: NextRequest) {
//     const session = await getServerSession(authOptions);
//     if (!session) {
//         return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }
//     const role = session.user.role;
//     if (!isProductManagementRole(role)) {
//         return NextResponse.json({ error: "Forbidden" }, { status: 403 });
//     }

//     const formData = await request.formData();
//     const file = formData.get("image");

//     if (!(file instanceof File)) {
//         return NextResponse.json(
//             { error: "Image file is required" },
//             { status: 400 },
//         );
//     }

//     if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
//         return NextResponse.json(
//             { error: "Unsupported image type" },
//             { status: 400 },
//         );
//     }

//     if (file.size > MAX_IMAGE_SIZE) {
//         return NextResponse.json(
//             { error: "Image size must be less than 5MB" },
//             { status: 400 },
//         );
//     }

//     const apiKey = process.env.IMGBB_API_KEY;

//     const imgbbFormData = new FormData();
//     imgbbFormData.append("image", file);

//     const imgbbResponse = await fetch(
//         `https://api.imgbb.com/1/upload?key=${apiKey}`,
//         {
//             method: "POST",
//             body: imgbbFormData,
//         },
//     );

//     const imgbbData = await imgbbResponse.json();
//     if (!imgbbResponse.ok) {
//         return NextResponse.json(
//             {
//                 error: "Image upload failed",
//             },
//             { status: 502 },
//         );
//     }

//     const imageUrl = imgbbData?.data?.display_url;

//     if (!imageUrl) {
//         return NextResponse.json(
//             {
//                 error: "ImgBB did not return an image URL",
//             },
//             { status: 502 },
//         );
//     }

//     return NextResponse.json({
//         imageUrl,
//     });
// }

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

const PRODUCT_MANAGEMENT_ROLES = ["super-admin", "admin", "manager"] as const;

type ProductManagementRole = (typeof PRODUCT_MANAGEMENT_ROLES)[number];

const isProductManagementRole = (
    role: unknown,
): role is ProductManagementRole => {
    return (
        typeof role === "string" &&
        PRODUCT_MANAGEMENT_ROLES.includes(role as ProductManagementRole)
    );
};

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

type ImgbbSuccessResponse = {
    data?: {
        display_url?: string;
    };
};

type ImgbbErrorResponse = {
    error?: {
        message?: string;
    };
};

type ImgbbResponse = ImgbbSuccessResponse & ImgbbErrorResponse;

export async function POST(request: NextRequest) {
    try {
        // --- Authentication ---
        const session = await getServerSession(authOptions);

        if (!session?.user) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 },
            );
        }

        // --- Authorization ---
        const role = session.user.role;

        if (!isProductManagementRole(role)) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        // --- Parse form data ---
        let formData: FormData;
        try {
            formData = await request.formData();
        } catch {
            return NextResponse.json(
                { error: "Invalid form data" },
                { status: 400 },
            );
        }

        const file = formData.get("image");

        if (!(file instanceof File)) {
            return NextResponse.json(
                { error: "Image file is required" },
                { status: 400 },
            );
        }

        // --- Validate file ---
        if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
            return NextResponse.json(
                { error: "Unsupported image type. Allowed: JPEG, PNG, WEBP" },
                { status: 400 },
            );
        }

        if (file.size === 0) {
            return NextResponse.json(
                { error: "Uploaded file is empty" },
                { status: 400 },
            );
        }

        if (file.size > MAX_IMAGE_SIZE) {
            return NextResponse.json(
                { error: "Image size must be less than 5MB" },
                { status: 400 },
            );
        }

        // --- Check server configuration ---
        const apiKey = process.env.IMGBB_API_KEY;

        if (!apiKey) {
            console.error("[upload-image] Missing IMGBB_API_KEY env variable");
            return NextResponse.json(
                { error: "Server misconfiguration" },
                { status: 500 },
            );
        }

        // --- Upload to ImgBB ---
        const imgbbFormData = new FormData();
        imgbbFormData.append("image", file);

        let imgbbResponse: Response;
        try {
            imgbbResponse = await fetch(
                `https://api.imgbb.com/1/upload?key=${apiKey}`,
                {
                    method: "POST",
                    body: imgbbFormData,
                },
            );
        } catch (networkError) {
            console.error(
                "[upload-image] Network error calling ImgBB:",
                networkError,
            );
            return NextResponse.json(
                { error: "Could not reach image hosting service" },
                { status: 502 },
            );
        }

        // --- Parse ImgBB response safely ---
        let imgbbData: ImgbbResponse;
        try {
            imgbbData = await imgbbResponse.json();
        } catch {
            const rawText = await imgbbResponse.text().catch(() => "");
            console.error(
                "[upload-image] ImgBB returned non-JSON response:",
                rawText,
            );
            return NextResponse.json(
                { error: "Image upload failed" },
                { status: 502 },
            );
        }

        if (!imgbbResponse.ok) {
            console.error("[upload-image] ImgBB error response:", imgbbData);
            return NextResponse.json(
                {
                    error: imgbbData?.error?.message ?? "Image upload failed",
                },
                { status: 502 },
            );
        }

        const imageUrl = imgbbData?.data?.display_url;

        if (!imageUrl) {
            console.error(
                "[upload-image] Missing display_url in ImgBB response:",
                imgbbData,
            );
            return NextResponse.json(
                { error: "ImgBB did not return an image URL" },
                { status: 502 },
            );
        }

        // --- Success ---
        return NextResponse.json({ imageUrl });
    } catch (error) {
        // Catch-all: هیچ خطای پیش‌بینی‌نشده‌ای به‌صورت خام به کلاینت نمی‌رسه
        console.error("[upload-image] Unexpected error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
