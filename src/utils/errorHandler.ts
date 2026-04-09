export class AppError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AppError";
    }
}

export function handleError(error: unknown): void {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    } else {
        console.error("Unknown error occurred");
    }
}