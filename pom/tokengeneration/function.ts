import { APIRequestContext } from "@playwright/test";
import { datafortokengeneration } from "./data";

export async function tokengeneration(request: APIRequestContext,resourse: string){
    const response = await request.post(resourse, {
            data: datafortokengeneration
        });
        return ((await response.json()).token);  
}