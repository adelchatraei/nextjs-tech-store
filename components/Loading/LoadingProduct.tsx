export default function ProductSkeleton() {
    return (
        <section className="lg:col-span-3">
            <article className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
            </article>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl border border-gray-100 p-4 space-y-3 animate-pulse"
                    >
                        <div className="h-40 bg-gray-200 rounded-xl" />
                        <div className="h-3 w-1/3 bg-gray-200 rounded" />
                        <div className="h-4 w-2/3 bg-gray-200 rounded" />
                        <div className="h-5 w-1/4 bg-gray-200 rounded" />
                    </div>
                ))}
            </div>
        </section>
    );
}
