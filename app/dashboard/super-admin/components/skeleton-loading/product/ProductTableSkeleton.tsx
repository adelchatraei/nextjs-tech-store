export default function ProductTableSkeleton({ rows = 5 }: { rows?: number }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-[2fr_1.4fr_0.8fr_1fr_0.8fr] gap-4 px-6 py-3 bg-gray-50 border-b border-gray-100">
                {["Product Info", "Category", "Price", "Stock", "Actions"].map(
                    (label) => (
                        <div
                            key={label}
                            className="h-3 w-16 rounded bg-gray-200 animate-pulse"
                        />
                    ),
                )}
            </div>

            {/* Body rows */}
            <div className="divide-y divide-gray-100">
                {Array.from({ length: rows }).map((_, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-[2fr_1.4fr_0.8fr_1fr_0.8fr] gap-4 px-6 py-4 items-center"
                    >
                        {/* Product info: thumbnail + name + id */}
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-lg bg-gray-200 animate-pulse shrink-0" />
                            <div className="flex flex-col gap-2 w-full max-w-40">
                                <div className="h-3.5 w-3/4 rounded bg-gray-200 animate-pulse" />
                                <div className="h-2.5 w-1/2 rounded bg-gray-100 animate-pulse" />
                            </div>
                        </div>

                        {/* Category badge */}
                        <div className="h-6 w-28 rounded-full bg-gray-100 animate-pulse" />

                        {/* Price */}
                        <div className="h-3.5 w-14 rounded bg-gray-200 animate-pulse justify-self-end" />

                        {/* Stock: number + bar */}
                        <div className="flex flex-col gap-1.5 w-full max-w-25">
                            <div className="h-3 w-6 rounded bg-gray-200 animate-pulse" />
                            <div className="h-1.5 w-full rounded-full bg-gray-100 animate-pulse" />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 justify-self-end">
                            <div className="h-4 w-4 rounded bg-gray-100 animate-pulse" />
                            <div className="h-4 w-4 rounded bg-gray-100 animate-pulse" />
                            <div className="h-4 w-4 rounded bg-gray-100 animate-pulse" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
