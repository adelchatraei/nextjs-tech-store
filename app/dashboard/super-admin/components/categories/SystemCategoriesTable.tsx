import { Fragment } from "react/jsx-runtime";
import { SystemCategoriesProps } from "./SystemCategories";
import { getCategoryIcon } from "@/utils/categoryIcons";
import SystemCategoriesAction from "./SystemCategoriesAction";

const SystemCategoriesTable = ({ categoriesData }: SystemCategoriesProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-162.5">
                <thead>
                    <tr className="bg-gray-50/50">
                        <th className="px-5 sm:px-7 py-4 text-left text-[9px] font-black text-gray-400 uppercase tracking-[0.15em]">
                            Structure
                        </th>

                        <th className="px-5 sm:px-7 py-4 text-left text-[9px] font-black text-gray-400 uppercase tracking-[0.15em]">
                            Products
                        </th>

                        <th className="px-5 sm:px-7 py-4 text-right text-[9px] font-black text-gray-400 uppercase tracking-[0.15em]">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-50">
                    {categoriesData.map((category) => {
                        const children = category.children;
                        const Icon = getCategoryIcon(category.icon);

                        return (
                            <Fragment key={category._id}>
                                {/* Parent Category */}
                                <tr className="group hover:bg-gray-50/50 transition-colors">
                                    <td className="px-5 sm:px-7 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                <Icon size={20} />
                                            </div>

                                            <div>
                                                <p className="text-sm font-black text-foreground group-hover:text-primary transition-colors">
                                                    {category.name}
                                                </p>

                                                <p className="mt-1 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                                                    /
                                                    {category.name.toLowerCase()}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-5 sm:px-7 py-5">
                                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-500 text-[9px] font-black">
                                            {category.productCount} UNITS
                                        </span>
                                    </td>

                                    <td className="px-5 sm:px-7 py-5">
                                        <SystemCategoriesAction
                                            category={category}
                                        />
                                    </td>
                                </tr>

                                {/* Children */}
                                {children.map((child) => {
                                    const Icon = getCategoryIcon(child.icon);

                                    return (
                                        <tr
                                            key={child._id}
                                            className="group hover:bg-gray-50/50 transition-colors"
                                        >
                                            <td className="px-5 sm:px-7 py-4">
                                                <div className="flex items-center gap-3 pl-10">
                                                    <div className="relative">
                                                        <div className="absolute -left-6 top-1/2 w-4 border-t border-gray-200" />

                                                        <div className="w-9 h-9 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center ">
                                                            <Icon size={16} />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className="text-xs font-black text-foreground">
                                                            {child.name}
                                                        </p>

                                                        <p className="mt-1 text-[8px] font-bold text-gray-400 uppercase tracking-wider">
                                                            /
                                                            {category.name.toLowerCase()}
                                                            /
                                                            {child.name.toLowerCase()}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-5 sm:px-7 py-4">
                                                <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-50 text-gray-400 text-[9px] font-black">
                                                    {child.productCount} UNITS
                                                </span>
                                            </td>

                                            <td className="px-5 sm:px-7 py-4">
                                                <SystemCategoriesAction
                                                    category={child}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default SystemCategoriesTable;
