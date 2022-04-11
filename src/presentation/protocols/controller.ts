import { HttpErrorResponse } from "../errors";
import { HttpResponse } from "./http-response";

export interface Controller<T = any> {
    handle: (request: T) => Promise<HttpResponse<any | HttpErrorResponse>>
}