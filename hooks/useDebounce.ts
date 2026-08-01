"use client";

import { useEffect, useState } from "react";

interface UseDebounceProps<T> {
    value: T;
    delay: number;
}

const useDebounce = <T>({ value, delay }: UseDebounceProps<T>) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
};
export default useDebounce;
