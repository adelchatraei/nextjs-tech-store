import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import connectDB from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { Banner } from "@/models/Banner";
import { CreateBannerSchema } from "@/schemas/banner/banner.schema";

export async function GET() {
    try {
        await connectDB();

        const banner = await Banner.findOne();

        return NextResponse.json(banner);
    } catch (error) {
        console.error("GET BANNER ERROR:", error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}

export async function POST(req: Request) {
    try {
        // 1. Authentication
        const session = await getServerSession(authOptions);

        const allowedRoles = ["super-admin", "admin"];

        if (!session || !allowedRoles.includes(session.user.role as string)) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 403 },
            );
        }

        // 2. Read request body
        const body = await req.json();

        // 3. Validate request body
        const result = CreateBannerSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                {
                    error: "Validation failed",
                    details: result.error.flatten().fieldErrors,
                },
                { status: 400 },
            );
        }

        // 4. Connect to database
        await connectDB();

        // 5. Make sure only one Banner document exists
        const existingBanner = await Banner.findOne();

        if (existingBanner) {
            return NextResponse.json(
                {
                    error: "Banner configuration already exists",
                },
                { status: 409 },
            );
        }

        // 6. Create Banner
        const banner = await Banner.create(result.data);

        // 7. Return created document
        return NextResponse.json(banner, { status: 201 });
    } catch (error) {
        console.error("CREATE BANNER ERROR:", error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}

export async function PATCH(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        const allowedRoles = ["super-admin", "admin"];

        if (!session || !allowedRoles.includes(session.user.role as string)) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 403 },
            );
        }

        const body = await req.json();

        const result = CreateBannerSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                {
                    error: "Validation failed",
                    details: result.error.flatten().fieldErrors,
                },
                { status: 400 },
            );
        }

        await connectDB();

        const banner = await Banner.findOneAndUpdate(
            {},
            {
                $set: {
                    slides: result.data.slides,
                },
            },
            {
                new: true,
                runValidators: true,
            },
        );

        if (!banner) {
            return NextResponse.json(
                { error: "Banner configuration not found" },
                { status: 404 },
            );
        }

        return NextResponse.json(banner);
    } catch (error) {
        console.error("UPDATE BANNER ERROR:", error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}
