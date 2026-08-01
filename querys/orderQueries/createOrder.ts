import { ApiError } from "@/lib/errors/ApiError";
import { CreateOrderPayload, CreateOrderResponse } from "@/types/order-types";

const createOrder = async (
    payload: CreateOrderPayload,
): Promise<CreateOrderResponse> => {
    const response = await fetch("http://localhost:3000/api/orders", {
        method: "Post",
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

export default createOrder;
