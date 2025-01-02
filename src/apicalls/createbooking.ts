import { APIRequestContext } from "@playwright/test";
import { baseurl, commonheaders } from "../testdata/generic";
import { bodydataforcreatebooking } from "../testdata/requestbody";

export async function createbooking (request: APIRequestContext, resources: string){
       const response =  await request.post(baseurl.url+resources,{
        headers: commonheaders,
        data: bodydataforcreatebooking
       });
    
       return ((await response.json()).bookingid)

}