import { APIRequestContext } from "@playwright/test";
import bodydata from "../testdata/data.json";

export async function createbooking (request: APIRequestContext,resource: string){
    const response = await request.post(resource, {
        data: bodydata.createbooking
      });
      const bookingid = ((await response.json()).bookingid)
      return bookingid

}