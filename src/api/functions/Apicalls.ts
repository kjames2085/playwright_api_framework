import { APIRequestContext } from "@playwright/test";
import {baseurl, bodydataforauth,bodyforcreatebooking, bodyforupdatebooking} from "../testdata/bodydata";

export async function authtoken (request: APIRequestContext,resource: string){
    const response = await request.post(resource, {
        data: bodydataforauth
    });
        return ((await response.json()).token);

}

export async function createbooking(request: APIRequestContext,resource: string){

    const response =  await request.post(resource,{
        data:bodyforcreatebooking
      });
    
      return ((await response.json()).bookingid);

}

export async function updatebooking(request: APIRequestContext,resource: string,bookingid: string,token: string){

    const response = await request.put(resource + bookingid,{
        headers:{
          'Cookie':'token='+token
        },
        data:bodyforupdatebooking
      })
      return ((await response.json()).firstname);

}