import { ApiError } from "@/lib/errors/ApiError";
import { RegisterFormData } from "@/schemas/register/register.schema";
import { RegisterResponse } from "@/types/auth-type";

const register = async (payload: RegisterFormData) => {
    const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
        throw await ApiError.fromResponse(response);
    }

    return (await response.json()) as RegisterResponse;
};

export default register;
