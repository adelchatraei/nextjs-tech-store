"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ProductSort = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSortChange = (value: string) => {
        // ایجاد یک کپی از پارامترهای فعلی URL (مثلاً اگر در صفحه 2 هستیم یا فیلتر دیگری داریم)
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set("sort", value); // اضافه کردن sort به URL
        } else {
            params.delete("sort"); // اگر حالت پیش‌فرض بود، پاکش کن
        }

        // آپدیت کردن URL بدون ریلود شدن صفحه
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    return (
        <select
            onChange={(e) => handleSortChange(e.target.value)}
            defaultValue={searchParams.get("sort") || ""}
            className="rounded-md p-1 text-[12px] font-bold bg-white outline-none hover:cursor-pointer hover:text-primary"
        >
            <option value="">Default</option>
            <option value="price_asc">Price: Low to Hight</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="newest">The latest</option>
        </select>
    );
};

export default ProductSort;
