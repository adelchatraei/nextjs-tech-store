"use client";

import { Entry } from "@/types/review-types";
import { useState } from "react";
import RatingSummaryCard from "./RatingSummaryCard";
import PostAnalysisCard from "./PostAnalysisCard";
import TransmissionsPanel from "./TransmissionsPanel";

const ReviewsContent = () => {
    const [entries, setEntries] = useState<Entry[]>([]);

    const handleSubmit = (rating: number, text: string) => {
        setEntries((prev) => [
            { id: crypto.randomUUID(), rating, text },
            ...prev,
        ]);
    };
    return (
        <div className="min-h-screen w-full bg-slate-100 p-6 sm:p-10">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr]">
                <div className="flex flex-col gap-6">
                    <RatingSummaryCard entries={entries} />
                    <PostAnalysisCard onSubmit={handleSubmit} />
                </div>

                <TransmissionsPanel entries={entries} />
            </div>
        </div>
    );
};

export default ReviewsContent;
