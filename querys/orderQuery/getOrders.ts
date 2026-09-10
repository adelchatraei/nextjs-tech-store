import { cookies } from "next/headers";

import { ApiError } from "@/lib/errors/ApiError";

import {
    OrdersResponseSchema,
    type OrdersResponseType,
} from "@/schemas/order/order.schema";

type GetOrdersParams = {
    search?: string;
    status?: string;
};

const getOrders = async ({
    search = "",
    status = "All",
}: GetOrdersParams = {}): Promise<OrdersResponseType> => {
    const cookieStore = await cookies();

    const params = new URLSearchParams();

    if (search.trim()) {
        params.set("search", search.trim());
    }

    if (status !== "All") {
        params.set("status", status);
    }

    const queryString = params.toString();

    const response = await fetch(
        `http://localhost:3000/api/orders${
            queryString ? `?${queryString}` : ""
        }`,
        {
            cache: "no-store",
            headers: {
                Cookie: cookieStore.toString(),
            },
        },
    );

    if (!response.ok) {
        const contentType = response.headers.get("content-type");

        if (contentType?.includes("application/json")) {
            const error = await response.json();

            throw new ApiError({
                message:
                    error.message ?? error.error ?? "Failed to fetch orders",
                status: response.status,
            });
        }

        throw new ApiError({
            message: "Unexpected server response",
            status: response.status,
        });
    }

    const data = await response.json();

    const result = OrdersResponseSchema.safeParse(data);

    if (!result.success) {
        console.error("ORDERS RESPONSE VALIDATION ERROR:", result.error);

        throw new ApiError({
            message: "Orders response validation failed",
            status: 500,
        });
    }

    return result.data;
};

export default getOrders;
