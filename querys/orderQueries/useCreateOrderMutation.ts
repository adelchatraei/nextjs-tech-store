import { useMutation } from "@tanstack/react-query";
import createOrder from "./createOrder";
import { CreateOrderPayload, CreateOrderResponse } from "@/types/order-types";
import { ApiError } from "@/lib/errors/ApiError";

export const useCreateOrderMutation = () => {
    return useMutation<CreateOrderResponse, ApiError, CreateOrderPayload>({
        mutationFn: createOrder,
    });
};
