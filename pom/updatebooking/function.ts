import { APIRequestContext } from "@playwright/test";
import { dataforupdatebooking } from "./data";

export async function updatebooking (request: APIRequestContext,resourse:string,bookingid: string,token:string){
    const response = await request.put(resourse+bookingid, {
        headers: {
            "Cookie" : "token="+token
        },
        data: dataforupdatebooking
    });

    return ((await response.json()).firstname);
}