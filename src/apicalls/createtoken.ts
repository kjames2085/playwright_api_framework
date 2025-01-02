import { APIRequestContext } from "@playwright/test";
import {baseurl, commonheaders} from "../testdata/generic";
import {bodydataforauth} from "../testdata/requestbody";

export async function createtoken(request: APIRequestContext, resources: string){
    const response = await request.post(baseurl.url + resources,{
        headers: commonheaders,
        data: bodydataforauth
    });
    return ((await response.json()).token)
}