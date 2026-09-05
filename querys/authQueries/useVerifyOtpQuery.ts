import { useMutation } from "@tanstack/react-query";
import verifyOtp, { VerifyOtpPayload } from "./verifyOtp";

type VerifyOtpResponse = {
    message: string;
};

const useVerifyOtpQuery = () => {
    return useMutation<VerifyOtpResponse, Error, VerifyOtpPayload>({
        mutationFn: verifyOtp,
    });
};

export default useVerifyOtpQuery;
