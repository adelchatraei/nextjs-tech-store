type ApiErrorOptions = {
    message: string;
    status: number;
};

// export class ApiError extends Error {
//     status: number;

//     constructor(options: ApiErrorOptions) {
//         super(options.message);

//         this.name = this.constructor.name;
//         this.status = options.status;
//     }
// }

export class ApiError extends Error {
    status: number;

    constructor(options: ApiErrorOptions) {
        super(options.message);

        this.name = this.constructor.name;
        this.status = options.status;
    }

    static async fromResponse(response: Response) {
        let message = "Internal Server Error";

        try {
            const data = await response.json();

            message = data.message ?? data.error ?? message;
        } catch {
            // Response body was not JSON.
        }

        return new ApiError({
            message,
            status: response.status,
        });
    }
}
