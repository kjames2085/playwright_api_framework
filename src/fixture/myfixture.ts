import { expect, test as mytest } from "@playwright/test";
import { createtoken } from "../apicalls/createtoken";
import { headersforupdatebooking } from "../testdata/headers";

export const test = mytest.extend<{ auth: any, resetcookie: any }>({
    auth: async ({request},use) => {
        const token = await createtoken(request, '/auth');
        expect(token).toMatch(/[0-9a-z]{15}/)
       await use(token);
    },
    resetcookie: async ({},use) => {
        await use();
        headersforupdatebooking.Cookie = headersforupdatebooking.Cookie.split('=')[0]
        headersforupdatebooking.Cookie = headersforupdatebooking.Cookie + '='
    }
})