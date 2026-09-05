import { MessageSquare } from "lucide-react";
import StarRating from "./StarRating";
import { Entry } from "@/types/review-types";

type TransmissionsPanelProps = {
    entries: Entry[];
};

function EmptyState() {
    return (
        <div className="flex h-full min-h-105 flex-col items-center justify-center gap-4 px-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <MessageSquare className="h-5 w-5 text-slate-300" />
            </span>
            <p className="text-xs font-semibold tracking-wider text-slate-400">
                BE THE FIRST TO SYNTHESIZE FEEDBACK.
            </p>
        </div>
    );
}

function EntryList({ entries }: { entries: Entry[] }) {
    return (
        <ul className="flex flex-col gap-3 p-4">
            {entries.map((entry) => (
                <li
                    key={entry.id}
                    className="rounded-xl bg-white p-4 shadow-sm"
                >
                    <StarRating value={entry.rating} readOnly />
                    {entry.text && (
                        <p className="mt-2 text-sm text-slate-600">
                            {entry.text}
                        </p>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default function TransmissionsPanel({
    entries,
}: TransmissionsPanelProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold text-slate-900">
                    Verified Transmissions
                </h1>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wider text-emerald-600">
                    {entries.length} ENTR{entries.length === 1 ? "Y" : "IES"}
                </span>
            </div>

            <div className="min-h-105 flex-1 rounded-2xl bg-slate-200/60">
                {entries.length === 0 ? (
                    <EmptyState />
                ) : (
                    <EntryList entries={entries} />
                )}
            </div>
        </div>
    );
}
