export type ApiResult<T> =
    | { success: true; data: T }
    | { success: false; error: string; statusCode: number }


async function request<T>(path: string): Promise<ApiResult<T>> {
    try {
        const response = await fetch(`${path}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data: T = await response.json()
        return { success: true, data }

    } catch {
        return {
            success: false,
            error: "err",
            statusCode: 0
        }
    }
}

export const client = {
    get: <T>(path: string) => request<T>(path)
}