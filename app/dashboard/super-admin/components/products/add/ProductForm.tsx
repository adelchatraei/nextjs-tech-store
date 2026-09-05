"use client";

import {
    CreateProductSchema,
    CreateProductType,
} from "@/schemas/products/CreateProduct";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Product } from "@/schemas/products/product";
import { useRouter } from "next/navigation";
import { ApiError } from "@/lib/errors/ApiError";

type ProductFormProps = {
    children: React.ReactNode;
    product?: Product;
};

const ProductForm = ({ children, product }: ProductFormProps) => {
    const router = useRouter();
    const methods = useForm<CreateProductType>({
        resolver: zodResolver(CreateProductSchema),
        defaultValues: {
            name: product?.name ?? "",
            description: product?.description ?? "",
            price: product?.price ?? 0,
            regularPrice: product?.regularPrice ?? 0,
            images: product?.images ?? [],
            image: product?.image ?? "",
            category: product?.category._id ?? "",
            subCategory: product?.subCategory ?? "",
            brand: product?.brand ?? "",
            modelName: product?.modelName ?? "",
            warranty: product?.warranty ?? "",
            specifications: product?.specifications ?? "",
            stock: product?.stock ?? 0,
        },
    });

    const {
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data: CreateProductType) => {
        const isEditMode = Boolean(product);
        if (isEditMode) {
            try {
                const response = await fetch(`/api/products/${product?._id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw await ApiError.fromResponse(response);
                }

                const result = await response.json();

                toast.success("Product updated successfully");
                router.push("/dashboard/super-admin/products");
                router.refresh();

                return result;
            } catch (error) {
                console.error("UPDATE PRODUCT ERROR:", error);
                if (error instanceof ApiError) {
                    toast.error(error.message);
                    return;
                }

                toast.error("Product update failed");
            }

            return;
        }

        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw await ApiError.fromResponse(response);
            }

            const result = await response.json();

            return result;
        } catch (error) {
            console.error("CREATE PRODUCT ERROR:", error);
            if (error instanceof ApiError) {
                toast.error(error.message);
                return;
            }
            toast.error("New product creation failed");
        }
    };

    const handleSubmit = methods.handleSubmit(onSubmit, (errors) => {
        console.log("FORM ERRORS:", errors);
    });

    return (
        <FormProvider {...methods}>
            <form
                id="product-form"
                onSubmit={handleSubmit}
                className="space-y-6 "
            >
                {children}
            </form>
        </FormProvider>
    );
};

export default ProductForm;
