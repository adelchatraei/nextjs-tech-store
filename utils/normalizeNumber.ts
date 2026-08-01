function normalizeNumber(value: string | undefined): number | undefined {
    if (value === undefined || value.trim() === "") {
        return undefined;
    }

    const parsed = Number(value);

    if (Number.isNaN(parsed)) {
        return undefined;
    }

    return parsed;
}

export default normalizeNumber;
