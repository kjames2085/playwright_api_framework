import { APIRequestContext } from "@playwright/test";
import { dataforcreatebooking } from "./data";

export async function createbooking(request: APIRequestContext,resourse: string) {
    const response = await request.post(resourse, {
        data: dataforcreatebooking
    });

    return ((await response.json()).bookingid);
    

}