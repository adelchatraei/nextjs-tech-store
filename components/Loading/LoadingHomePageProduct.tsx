export default function HomePageProductSkeleton() {
    return (
        <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
                <div
                    key={i}
                    className="bg-white rounded-2xl border border-gray-100 p-4 space-y-3 animate-pulse"
                >
                    <div className="h-50 bg-gray-200 rounded-xl" />
                    <div className="h-3 w-1/3 bg-gray-200 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    <div className="h-5 w-1/4 bg-gray-200 rounded" />
                </div>
            ))}
        </section>
    );
}
