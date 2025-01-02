import { APIRequestContext } from "@playwright/test"
import { headersforupdatebooking } from "../testdata/headers"
import { baseurl } from "../testdata/generic"
import { bodydataforupdatebooking } from "../testdata/requestbody"

export async function updatebooking(request: APIRequestContext,resources: string, bookingid: string){
      const response = await request.put(baseurl.url+ resources + bookingid,{
        headers: headersforupdatebooking,
        data:bodydataforupdatebooking
      })
      return ((await response.json()).firstname)
}