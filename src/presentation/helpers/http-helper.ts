import { HttpResponse } from "../protocols";
import { HttpErrorResponse } from "../errors/http-error-response";


export const badRequest = (error: Error): HttpErrorResponse => (new HttpErrorResponse({
    statusCode: 400,
    error: {
        name: "Bad Request",
        message: error.message,
    }
}))

export const forbidden = (error: Error): HttpErrorResponse => (new HttpErrorResponse({
    statusCode: 403,
    error: {
        name: "Forbidden",
        message: error.message,
    }
}))

export const internalServerError = (error: Error): HttpErrorResponse => (new HttpErrorResponse({
    statusCode: 500,
    error: {
        name: "Internal Server Error",
        message: error.message,
    }
}))

export const ok = <T>(data: T, message?: string): HttpResponse<T> => ({
    statusCode: 200,
    body: data,
    message
})

export const created = <T>(data: T): HttpResponse<T> => ({
    statusCode: 200,
    body: data,
    message: "Object created successfully"
})

export const noContent = (): HttpResponse<null> => ({
    statusCode: 204
})