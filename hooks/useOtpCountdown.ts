"use client";

import { useEffect, useState } from "react";

const useOtpCountdown = (initialSeconds: number = 60) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    const canResend = seconds === 0;

    const restart = () => {
        setSeconds(initialSeconds);
    };

    useEffect(() => {
        if (seconds === 0) return;

        const interval = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return {
        seconds,
        canResend,
        restart,
    };
};

export default useOtpCountdown;
