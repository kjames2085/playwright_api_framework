import { test } from "@playwright/test";
import { auth } from "../src/pom/auth";
import { createbooking } from "../src/pom/createbooking";
import { updatebooking } from "../src/pom/updatebooking";

let token;
let bookingid;
test('Auth-Createbooking-Updating',{tag:'@Sanity,@Regression'}, async ({ request }) => {
    await test.step('Perform Authendication', async () => {
        token = await auth(request, '/auth')
    })

    await test.step('Create Booking', async () => {
        bookingid = await createbooking(request, '/booking');
    })

    await test.step('Update Booking', async () => {
        console.log(await updatebooking(request, '/booking/', bookingid, token))
    })
})


