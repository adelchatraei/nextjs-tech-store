"use client";

import Loader from "@/components/ui/loaderSvg";
import deleteProduct from "@/querys/productQueries/deleteProduct";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type ProductActionsProps = {
    productId: string;
};

const ProductActions = ({ productId }: ProductActionsProps) => {
    const router = useRouter();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteClick = async () => {
        try {
            setIsDeleting(true);

            await deleteProduct(productId);

            setIsOpenModal(false);

            router.refresh();
            toast.success("Product successfully deleted.");
        } catch (error) {
            console.error("Failed to delete product:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    const handleNavigate = () => {
        router.push(`/dashboard/super-admin/products/edit/${productId}`);
    };

    const handleViewProduct = () => {
        router.push(`/products/${productId}`);
    };

    return (
        <div className="flex items-center justify-end gap-1">
            <button
                onClick={handleViewProduct}
                type="button"
                title="View"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-300 hover:text-primary hover:bg-primary/5 transition-all"
            >
                <Eye size={16} />
            </button>

            <button
                onClick={handleNavigate}
                type="button"
                title="Edit"
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-300 hover:text-orange-400 hover:bg-orange-200/60 transition-all"
            >
                <Pencil size={16} />
            </button>

            <button
                type="button"
                title="Delete"
                onClick={() => setIsOpenModal(true)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all"
            >
                <Trash2 size={16} />
            </button>
            {isOpenModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <button
                        type="button"
                        aria-label="Close delete confirmation"
                        onClick={() => setIsOpenModal(false)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="relative w-full max-w-md bg-white rounded-[28px] shadow-2xl p-6 sm:p-7">
                        <div className="space-y-2">
                            <h3 className="text-lg font-black text-foreground">
                                Delete Product?
                            </h3>

                            <p className="text-sm leading-6 text-gray-400 font-medium">
                                Are you sure you want to delete this product?
                                This action cannot be undone.
                            </p>
                        </div>

                        <div className="mt-7 flex items-center justify-end gap-3">
                            <button
                                type="button"
                                disabled={isDeleting}
                                onClick={() => setIsOpenModal(false)}
                                className="px-5 py-3 rounded-xl text-[10px] font-black tracking-[0.12em] text-gray-400 hover:bg-gray-50 transition-all disabled:opacity-50"
                            >
                                CANCEL
                            </button>

                            <button
                                type="button"
                                disabled={isDeleting}
                                onClick={handleDeleteClick}
                                className="px-5 py-3 rounded-xl bg-red-500 text-white text-[10px] font-black tracking-[0.12em] hover:bg-red-600 transition-all disabled:opacity-50"
                            >
                                {isDeleting ? <Loader /> : "DELETE"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductActions;
