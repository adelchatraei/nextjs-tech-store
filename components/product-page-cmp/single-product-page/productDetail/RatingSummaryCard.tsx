import { Entry, RatingBar } from "@/types/review-types";

type RatingSummaryCardProps = {
    entries: Entry[];
};

const STAR_LABELS = [5, 4, 3, 2, 1];

function buildBars(entries: Entry[]): RatingBar[] {
    return STAR_LABELS.map((label) => {
        if (entries.length === 0) return { label, percent: null };
        const count = entries.filter((entry) => entry.rating === label).length;
        return { label, percent: Math.round((count / entries.length) * 100) };
    });
}

export default function RatingSummaryCard({ entries }: RatingSummaryCardProps) {
    const globalRating =
        entries.length === 0
            ? "0.0"
            : (
                  entries.reduce((sum, e) => sum + e.rating, 0) / entries.length
              ).toFixed(1);

    const bars = buildBars(entries);

    return (
        <div className="rounded-2xl bg-slate-100 p-6">
            <div className="flex items-start justify-between">
                <div>
                    <div className="text-5xl font-bold tracking-tight text-slate-900">
                        {globalRating}
                    </div>
                    <div className="mt-1 text-xs font-semibold tracking-wider text-slate-400">
                        GLOBAL RATING
                    </div>
                </div>
                <div className="pt-1 text-xs font-semibold tracking-wider text-slate-400">
                    {entries.length} VERIFICATION
                    {entries.length === 1 ? "" : "S"}
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
                {bars.map((bar) => (
                    <div key={bar.label} className="flex items-center gap-3">
                        <span className="w-3 text-xs font-medium text-slate-400">
                            {bar.label}
                        </span>
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                            <div
                                className="h-full rounded-full bg-emerald-400 transition-all"
                                style={{ width: `${bar.percent ?? 0}%` }}
                            />
                        </div>
                        <span className="w-10 text-right text-xs font-medium text-slate-400">
                            {bar.percent === null ? "NaN%" : `${bar.percent}%`}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
