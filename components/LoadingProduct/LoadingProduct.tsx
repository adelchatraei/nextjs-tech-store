export default function ProductSkeleton() {
    return (
        <div className="border border-gray-100 p-4 rounded-lg bg-white shadow-sm w-full animate-pulse">
            {/* بخش نشان تخفیف */}
            <div className="h-6 w-24 bg-gray-200 rounded-full mb-4"></div>

            {/* بخش تصویر */}
            <div className="h-48 w-full bg-gray-200 rounded-md mb-4"></div>

            {/* نام برند */}
            <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>

            {/* عنوان محصول */}
            <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>

            {/* قیمت و دکمه سبد خرید */}
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <div className="h-5 w-20 bg-gray-200 rounded"></div>
                    <div className="h-4 w-16 bg-gray-100 rounded"></div>
                </div>
                <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    );
}
