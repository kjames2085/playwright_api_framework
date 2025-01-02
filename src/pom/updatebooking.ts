import { APIRequestContext, expect } from "@playwright/test";
import bodydata from "../testdata/data.json";

export async function updatebooking(request: APIRequestContext,resource: string,bookingid: string,token: string){
    const response = await request.put(resource + bookingid, {
        headers: { 'Cookie': 'token=' + token },
        data: bodydata.updatebooking
      });
      expect((await response.json()).firstname).toEqual('Ramesh')

}