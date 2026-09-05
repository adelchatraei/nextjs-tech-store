"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import StarRating from "./StarRating";

type PostAnalysisCardProps = {
    onSubmit: (rating: number, text: string) => void;
};

export default function PostAnalysisCard({ onSubmit }: PostAnalysisCardProps) {
    const [rating, setRating] = useState(0);
    const [narrative, setNarrative] = useState("");

    const handleSubmit = () => {
        if (rating === 0) return;
        onSubmit(rating, narrative);
        setRating(0);
        setNarrative("");
    };

    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                    <MessageSquare className="h-4 w-4 text-emerald-500" />
                </span>
                <h2 className="text-base font-semibold text-slate-900">
                    Post Analysis
                </h2>
            </div>

            <div className="mt-6 text-xs font-semibold tracking-wider text-slate-400">
                RATING SCALE
            </div>
            <div className="mt-3">
                <StarRating value={rating} onChange={setRating} />
            </div>

            <div className="mt-6 text-xs font-semibold tracking-wider text-slate-400">
                NARRATIVE TRANSCRIPTION
            </div>
            <textarea
                value={narrative}
                onChange={(e) => setNarrative(e.target.value)}
                placeholder="Synthesize your experience here..."
                rows={4}
                className="mt-3 w-full resize-none rounded-xl border border-emerald-200 p-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            />

            <button
                type="button"
                onClick={handleSubmit}
                disabled={rating === 0}
                className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-xs font-semibold tracking-wider text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
                SUBMIT REVIEW
            </button>
        </div>
    );
}
