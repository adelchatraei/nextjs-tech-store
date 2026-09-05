export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { UpdateProductSchema } from "@/schemas/products/UpdateProduct";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await params;
        await connectDB();
        const product = await Product.findById(id).populate("category");
        if (!product) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(product);
    } catch (error) {
        console.error("GET SINGLE PRODUCT ERROR:", error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await params;
        const session = await getServerSession(authOptions);
        const allowedRoles = ["super-admin", "admin", "manager"];
        if (!session || !allowedRoles.includes(session.user.role as string)) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 403 },
            );
        }

        const data = await req.json();
        const result = UpdateProductSchema.safeParse(data);

        if (!result.success) {
            return NextResponse.json(
                {
                    error: "Invalid product data",
                },
                { status: 400 },
            );
        }
        await connectDB();

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            result.data,
            {
                new: true,
            },
        );

        if (!updatedProduct) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 },
            );
        }

        return NextResponse.json(updatedProduct);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await params;
        const session = await getServerSession(authOptions);
        const allowedRoles = ["super-admin", "admin"];
        if (!session || !allowedRoles.includes(session.user.role as string)) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 403 },
            );
        }

        await connectDB();
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 },
            );
        }

        return NextResponse.json({ message: "Product deleted successfully" });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 },
        );
    }
}
