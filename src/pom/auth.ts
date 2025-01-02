import {APIRequestContext, test} from "@playwright/test";
import bodydata from "../testdata/data.json"


export async function auth(request: APIRequestContext,resource: string){
    const response = await request.post(resource, {
        data: bodydata.createtoken
      });
       return ((await response.json()).token)
}