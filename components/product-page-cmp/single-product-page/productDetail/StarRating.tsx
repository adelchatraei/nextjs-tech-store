"use client";

import { useState } from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
    value: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    size?: "sm" | "lg";
};

const STAR_VALUES = [1, 2, 3, 4, 5];

export default function StarRating({
    value,
    onChange,
    readOnly = false,
    size = "lg",
}: StarRatingProps) {
    const [hoverValue, setHoverValue] = useState(0);

    if (readOnly) {
        return (
            <div className="flex gap-1">
                {STAR_VALUES.map((starValue) => (
                    <Star
                        key={starValue}
                        className={`h-3.5 w-3.5 ${
                            starValue <= value
                                ? "fill-emerald-500 text-emerald-500"
                                : "fill-slate-200 text-slate-200"
                        }`}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="flex gap-2">
            {STAR_VALUES.map((starValue) => {
                const active = (hoverValue || value) >= starValue;
                return (
                    <button
                        key={starValue}
                        type="button"
                        aria-label={`Rate ${starValue} star${starValue === 1 ? "" : "s"}`}
                        onClick={() => onChange?.(starValue)}
                        onMouseEnter={() => setHoverValue(starValue)}
                        onMouseLeave={() => setHoverValue(0)}
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 ${
                            active ? "bg-emerald-500" : "bg-slate-100"
                        }`}
                    >
                        <Star
                            className={`h-4 w-4 ${
                                active
                                    ? "fill-white text-white"
                                    : "fill-slate-300 text-slate-300"
                            }`}
                        />
                    </button>
                );
            })}
        </div>
    );
}
