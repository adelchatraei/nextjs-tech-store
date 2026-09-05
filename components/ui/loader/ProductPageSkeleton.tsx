export default function ProductsPageSkeleton() {
    return (
        <div className="min-h-screen bg-slate-50/50 p-6 md:p-10 font-sans animate-pulse">
            {/* 1. Header Section */}
            <header className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    {/* Main Title Skeleton */}
                    <div className="h-9 w-64 bg-slate-200 rounded-lg" />
                </div>

                {/* View Toggle Icons */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/30" />
                    <div className="w-10 h-10 rounded-xl bg-slate-200 border border-slate-100" />
                </div>
            </header>

            {/* 2. Main Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                {/* Sidebar Filters */}
                <aside className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-7">
                    {/* Search Section */}
                    <div className="space-y-3">
                        <div className="h-3.5 w-20 bg-slate-200 rounded" />
                        <div className="h-12 w-full bg-slate-100 rounded-2xl" />
                    </div>

                    {/* Category Section */}
                    <div className="space-y-4 pt-2">
                        <div className="h-3.5 w-36 bg-slate-200 rounded" />
                        <div className="space-y-3 pl-2">
                            <div className="flex items-center justify-between">
                                <div className="h-4 w-20 bg-slate-100 rounded" />
                                <div className="h-3 w-3 bg-slate-100 rounded" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="h-4 w-16 bg-slate-100 rounded" />
                                <div className="h-3 w-3 bg-slate-100 rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Price Range Section */}
                    <div className="space-y-3 pt-2">
                        <div className="h-3.5 w-28 bg-slate-200 rounded" />
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-12 bg-slate-100 rounded-2xl" />
                            <div className="h-12 bg-slate-100 rounded-2xl" />
                        </div>
                    </div>
                </aside>

                {/* Products Grid & Results */}
                <main className="lg:col-span-3 space-y-6">
                    {/* Top Results Bar */}
                    <div className="flex items-center justify-between px-1">
                        <div className="h-4 w-52 bg-slate-200 rounded" />
                        <div className="h-4 w-32 bg-slate-200 rounded" />
                    </div>

                    {/* Product Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div
                                key={item}
                                className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between relative overflow-hidden"
                            >
                                {/* Top Badge & Heart Button */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="h-6 w-20 bg-purple-200 rounded-full" />
                                    <div className="w-9 h-9 rounded-full bg-slate-100" />
                                </div>

                                {/* Product Image Skeleton */}
                                <div className="w-full h-56 bg-slate-100 rounded-2xl my-2 flex items-center justify-center">
                                    <div className="w-24 h-40 bg-slate-200/60 rounded-xl" />
                                </div>

                                {/* Product Info */}
                                <div className="mt-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="h-3 w-16 bg-slate-200 rounded" />
                                        <div className="h-3 w-8 bg-slate-200 rounded" />
                                    </div>
                                    <div className="h-5 w-3/4 bg-slate-200 rounded" />

                                    {/* Price & Add to Cart */}
                                    <div className="flex items-center justify-between pt-2">
                                        <div className="space-y-1.5">
                                            <div className="h-5 w-20 bg-red-200 rounded" />
                                            <div className="h-3 w-12 bg-slate-100 rounded" />
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-slate-100" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 3. Pagination Skeleton */}
                    <div className="flex items-center justify-center gap-3 pt-8">
                        <div className="h-10 w-24 bg-white border border-slate-100 rounded-2xl" />
                        <div className="h-10 w-10 bg-emerald-500/40 rounded-2xl" />
                        <div className="h-10 w-24 bg-white border border-slate-100 rounded-2xl" />
                    </div>
                </main>
            </div>
        </div>
    );
}
