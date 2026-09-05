import { useMutation } from "@tanstack/react-query";
import resendOtp, { ResendOtpPayload } from "./resendOtp";

type ResendOtpResponse = {
    message: string;
};

const useResendOtpQuery = () => {
    return useMutation<ResendOtpResponse, Error, ResendOtpPayload>({
        mutationFn: resendOtp,
    });
};

export default useResendOtpQuery;
