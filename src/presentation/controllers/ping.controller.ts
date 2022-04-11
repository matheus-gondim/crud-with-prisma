import { ok } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class PingController implements Controller {
    async handle(request: any): Promise<HttpResponse<any>> {
        return ok("pong");
    }
}