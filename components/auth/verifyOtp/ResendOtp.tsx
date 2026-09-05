import useOtpCountdown from "@/hooks/useOtpCountdown";
import { ApiError } from "@/lib/errors/ApiError";
import useResendOtpQuery from "@/querys/authQueries/useResendOtpQuery";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";

type ResendOtpProps = {
    email: string;
};

const ResendOtp = ({ email }: ResendOtpProps) => {
    const { seconds, restart, canResend } = useOtpCountdown(5);

    const resendOtpMutation = useResendOtpQuery();

    const handleResendOtp = () => {
        if (!canResend) return;

        resendOtpMutation.mutate(
            {
                email,
            },
            {
                onSuccess: (response) => {
                    toast.success(response.message);

                    restart();
                },

                onError: (error) => {
                    if (error instanceof ApiError) {
                        toast.error(error.message);
                        return;
                    }

                    toast.error("Something went wrong");
                },
            },
        );
    };

    return (
        <div className="mt-10 pt-8 border-t border-slate-100 italic">
            <p className="text-sm text-slate-400 font-medium mb-4">{`Didn't receive the code ?`}</p>
            <button
                className="flex items-center justify-center gap-2 mx-auto font-bold text-primary disabled:text-slate-300 transition-colors group"
                onClick={handleResendOtp}
                disabled={!canResend}
            >
                <Mail
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                />

                {canResend
                    ? "Resend New Code"
                    : `Resend New Code (${seconds}s)`}
            </button>
        </div>
    );
};

export default ResendOtp;
