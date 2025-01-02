import { expect } from "@playwright/test";
import { test } from "../src/fixture/myfixture";
import { baseurl, commonheaders } from "../src/testdata/generic";
import { bodydataforauth, bodydataforcreatebooking, bodydataforupdatebooking } from "../src/testdata/requestbody";
import { createtoken } from "../src/apicalls/createtoken";
import { createbooking } from "../src/apicalls/createbooking";
import { headersforupdatebooking } from "../src/testdata/headers";
import { updatebooking } from "../src/apicalls/updatebooking";
import { iteration } from "../src/testdata/iteration";


let token;
let bookingid;
iteration.forEach((x) => {
    test.describe('Suite' + x.iteration, async () => {
        test('Create Booking', async ({ request }) => {
            bookingid = await createbooking(request, '/booking')
            console.log(bookingid)
            expect((bookingid).toString()).toMatch(/[0-9]{4}/)
        })

        test('Update Booking', async ({ request, auth, resetcookie }) => {
            headersforupdatebooking.Cookie = headersforupdatebooking.Cookie + auth
            const firstname = await updatebooking(request, '/booking/', bookingid);
            expect(firstname).toEqual("Ramesh");
        })
    })
})