import { ApiError } from "@/lib/errors/ApiError";

export type ResendOtpPayload = {
    email: string;
};

type ResendOtpResponse = {
    message: string;
};

const resendOtp = async (
    payload: ResendOtpPayload,
): Promise<ResendOtpResponse> => {
    const response = await fetch("http://localhost:3000/api/auth/resend-otp", {
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

export default resendOtp;
