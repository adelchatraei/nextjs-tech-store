import { ApiError } from "@/lib/errors/ApiError";
import { BannerResponseSchema } from "@/schemas/banner/banner.schema";
import { z } from "zod";

export type BannerResponse = z.infer<typeof BannerResponseSchema>;

const getBanner = async (): Promise<BannerResponse | null> => {
    const response = await fetch("http://localhost:3000/api/banner", {
        cache: "no-store",
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type");

        if (contentType?.includes("application/json")) {
            const error = await response.json();

            throw new ApiError({
                message: error.error,
                status: response.status,
            });
        }

        throw new ApiError({
            message: "Unexpected server response",
            status: response.status,
        });
    }

    const data = await response.json();

    if (data === null) {
        return null;
    }

    const result = BannerResponseSchema.safeParse(data);

    if (!result.success) {
        console.error("BANNER RESPONSE VALIDATION ERROR:", result.error);

        throw new ApiError({
            message: "Banner response validation failed",
            status: 500,
        });
    }

    return result.data;
};

export default getBanner;
