import { ApiError } from "@/lib/errors/ApiError";

export type VerifyOtpPayload = {
    email: string;
    otp: string;
};

type VerifyOtpResponse = {
    message: string;
};

const verifyOtp = async (
    payload: VerifyOtpPayload,
): Promise<VerifyOtpResponse> => {
    const response = await fetch("http://localhost:3000/api/auth/verify-otp", {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
        throw await ApiError.fromResponse(response);
    }

    return response.json();
};

export default verifyOtp;
