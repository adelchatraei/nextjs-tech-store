/* eslint-disable react-hooks/static-components */
"use client";

import { Category } from "@/schemas/categorys/categoryResponse";
import { getCategoryIcon } from "@/utils/categoryIcons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
    data: Category;
};

const CategoriItem = ({ data }: Props) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();
    const Icon = getCategoryIcon(data.icon);
    const handleClick = () => {
        const params = new URLSearchParams(searchParams);
        // اگر دسته انتخاب شده قبلاً انتخاب شده باشد، آن را حذف کن (Toggle)
        // اگر می‌خواهید با کلیک مجدد حذف نشود، این شرط را بردارید
        if (params.get("category") === data.slug) {
            params.delete("category");
        } else {
            // در غیر این صورت، دسته جدید را تنظیم کن
            params.set("category", data.slug);
        }

        // بازگشت به صفحه اول (صفحه 1) در صورت تغییر فیلتر برای جلوگیری از باگ شماره صفحه
        params.delete("page");

        // هدایت کاربر به URL جدید بدون رفرش کامل صفحه
        router.push(`${pathName}?${params.toString()}`);
    };

    return (
        <button
            onClick={handleClick}
            className="group p-4 rounded-lg transition-all border flex flex-col items-center gap-3 bg-white text-gray-400 border-gray-100 hover:border-primary/50 hover:shadow-sm"
        >
            <div className="w-14 h-14 rounded-full flex items-center justify-center transition-colors overflow-hidden bg-gray-50 text-gray-500 group-hover:text-primary">
                <Icon size={22} />
            </div>
            <span className="text-xs font-bold text-slate-700 text-center">
                {data.name}
            </span>
        </button>
    );
};

export default CategoriItem;
