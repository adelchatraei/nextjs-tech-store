import { signIn } from "next-auth/react";
import { LoginFormData } from "@/schemas/auth/login.schema";

const login = async (data: LoginFormData) => {
    const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
    });

    if (!result?.ok) {
        throw new Error(result?.error ?? "Login failed");
    }

    return result;
};

export default login;
