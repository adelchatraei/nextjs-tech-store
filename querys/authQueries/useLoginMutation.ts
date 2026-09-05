import { useMutation } from "@tanstack/react-query";
import login from "./login";
import { LoginFormData } from "@/schemas/auth/login.schema";
import { SignInResponse } from "next-auth/react";

const useLoginMutation = () => {
    return useMutation<SignInResponse | undefined, Error, LoginFormData>({
        mutationFn: login,
    });
};

export default useLoginMutation;
