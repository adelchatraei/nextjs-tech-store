"use client";

import { useCategoriesManagement } from "@/context/categoriesManagement";
import deleteCategory from "@/querys/categoriesQuery/deleteCategory";
import { Category } from "@/types/category-type";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SystemCategoriesActionProps = {
    category: Category;
};

const SystemCategoriesAction = ({ category }: SystemCategoriesActionProps) => {
    const router = useRouter();
    const { setEditingCategory } = useCategoriesManagement();

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleEditClick = () => {
        setEditingCategory(category);
    };

    const handleDeleteClick = async () => {
        try {
            setIsDeleting(true);

            await deleteCategory(category._id);

            setIsDeleteOpen(false);

            router.refresh();
        } catch (error) {
            console.error("Failed to delete category:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="flex items-center justify-end gap-2">
            <button
                title="Edit"
                type="button"
                onClick={handleEditClick}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-300 hover:text-orange-400 hover:bg-orange-200/60 transition-all"
            >
                <Pencil size={15} />
            </button>

            <button
                title="delete"
                type="button"
                onClick={() => setIsDeleteOpen(true)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all"
            >
                <Trash2 size={15} />
            </button>
            {isDeleteOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <button
                        type="button"
                        aria-label="Close delete confirmation"
                        onClick={() => setIsDeleteOpen(false)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="relative w-full max-w-md bg-white rounded-[28px] shadow-2xl p-6 sm:p-7">
                        <div className="space-y-2">
                            <h3 className="text-lg font-black text-foreground">
                                Delete Category?
                            </h3>

                            <p className="text-sm leading-6 text-gray-400 font-medium">
                                Are you sure you want to delete{" "}
                                <span className="font-black text-foreground">
                                    {category.name}
                                </span>
                                ? This action cannot be undone.
                            </p>
                        </div>

                        <div className="mt-7 flex items-center justify-end gap-3">
                            <button
                                type="button"
                                disabled={isDeleting}
                                onClick={() => setIsDeleteOpen(false)}
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
                                {isDeleting ? "DELETING..." : "DELETE"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SystemCategoriesAction;
