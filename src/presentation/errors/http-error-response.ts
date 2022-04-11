import { HttpResponse } from "../protocols";

export class HttpErrorResponse implements HttpResponse<any> {
    constructor(data: { error: { name: string, message?: string }, statusCode: number }) {
        const { statusCode, error } = data;
        this.error = error;
        this.statusCode = statusCode;
    }

    error: { name: string, message?: string }
    statusCode: number;
    message?: string | undefined;
    body?: any;
    total?: number | undefined;
    info?: any;
}
