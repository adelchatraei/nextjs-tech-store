interface UpdateSearchParamsOptions {
    updates: Record<string, string | null | undefined>;
    searchParams: Record<string, string | string[] | undefined>;
}

const updateSearchParams = ({
    searchParams,
    updates,
}: UpdateSearchParamsOptions) => {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(searchParams)) {
        if (value === undefined) continue;

        if (typeof value === "string") {
            params.set(key, value);
        } else {
            for (const item of value) {
                params.append(key, item);
            }
        }
    }

    for (const [key, value] of Object.entries(updates)) {
        if (value === "" || value === undefined || value === null) {
            params.delete(key);
        } else {
            params.set(key, value);
        }
    }

    return params.toString();
};
export default updateSearchParams;
