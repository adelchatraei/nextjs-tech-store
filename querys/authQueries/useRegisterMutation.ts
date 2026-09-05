import { RegisterFormData } from "@/schemas/register/register.schema";
import { useMutation } from "@tanstack/react-query";
import register from "./register";

const useRegisterMutation = () => {
    return useMutation({
        mutationFn: (payloead: RegisterFormData) => register(payloead),
    });
};

export default useRegisterMutation;
