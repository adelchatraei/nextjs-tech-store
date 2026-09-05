"use client";

import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

import CategoryIconPicker from "./CategoryIconPicker";
import { Category } from "@/types/category-type";
import createCategory from "@/querys/categoriesQuery/createCategory";
import Loader from "@/components/ui/loaderSvg";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCategoriesManagement } from "@/context/categoriesManagement";
import { useEffect } from "react";
import updateCategory from "@/querys/categoriesQuery/updateCategory";

type CategoryFormValues = {
    name: string;
    parent: string;
    icon: string;
};

type CategoryFormProps = {
    categories: Category[];
};

const CategoryForm = ({ categories }: CategoryFormProps) => {
    const router = useRouter();
    const { editingCategory, setEditingCategory } = useCategoriesManagement();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<CategoryFormValues>({
        defaultValues: {
            name: "",
            parent: "",
            icon: "Grid2X2",
        },
    });

    useEffect(() => {
        if (editingCategory) {
            reset({
                name: editingCategory.name,
                parent: editingCategory.parent ?? "",
                icon: editingCategory.icon ?? "Grid2X2",
            });
        } else {
            reset({
                name: "",
                parent: "",
                icon: "Grid2X2",
            });
        }
    }, [editingCategory, reset]);

    const selectedIcon = watch("icon");

    const onSubmitData = async (data: CategoryFormValues) => {
        try {
            await createCategory({
                name: data.name,
                icon: data.icon,
                parent: data.parent || null,
            });

            reset();
            router.refresh();
            toast.success("New category created");
        } catch (error) {
            console.error(error);
        }

        if (editingCategory) {
            await updateCategory({
                id: editingCategory._id,
                name: data.name,
                icon: data.icon,
                parent: data.parent || null,
            });

            setEditingCategory(null);
            router.refresh();
            toast.success("Category updated");

            return;
        }
    };

    return (
        <div className="bg-white border border-gray-100 rounded-[28px] shadow-sm p-5 sm:p-7">
            {/* Header */}
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <ArrowRight size={20} />
                </div>

                <h2 className="text-lg font-black text-foreground">
                    {editingCategory ? "Edit Category" : "Add New Category"}
                </h2>
            </div>

            <form
                onSubmit={handleSubmit(onSubmitData)}
                className="pt-7 space-y-7"
            >
                {/* Category Name */}
                <div>
                    <label className="block mb-2.5 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                        Category Name
                    </label>

                    <input
                        type="text"
                        placeholder="Category name"
                        {...register("name", {
                            required: "Category name is required",
                        })}
                        className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl outline-none text-sm font-bold text-foreground placeholder:text-gray-300 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                    />

                    {errors.name && (
                        <p className="mt-2 ml-1 text-xs font-bold text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Parent */}
                <div>
                    <label className="block mb-2.5 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                        Parent (Make this a sub-category)
                    </label>

                    <select
                        {...register("parent")}
                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl outline-none text-sm font-bold text-foreground focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                    >
                        <option value="">None (Top Level Category)</option>

                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Icon */}
                <CategoryIconPicker
                    value={selectedIcon}
                    onChange={(icon) => setValue("icon", icon)}
                />

                {/* Publish */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-4 px-5 rounded-2xl bg-black text-white text-[10px] font-black tracking-[0.14em] hover:bg-gray-800 active:scale-[0.98] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ArrowRight size={17} />

                    <span>
                        {isSubmitting ? (
                            editingCategory ? (
                                <Loader />
                            ) : (
                                <Loader />
                            )
                        ) : editingCategory ? (
                            "UPDATE CATEGORY"
                        ) : (
                            "PUBLISH CATEGORY"
                        )}
                    </span>
                </button>
                {editingCategory && (
                    <button
                        type="button"
                        onClick={() => setEditingCategory(null)}
                        className="w-full py-3 px-5 rounded-2xl border border-gray-200 text-[10px] font-black tracking-[0.14em] text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-all"
                    >
                        CANCEL EDIT
                    </button>
                )}
            </form>
        </div>
    );
};

export default CategoryForm;
