import { expect, test } from "@playwright/test";
import { authtoken, createbooking, updatebooking } from "../src/api/functions/Apicalls";

let token;
let bookingid;
test('Create Token', async ({ request }) => {
    token = await authtoken(request, '/auth');
    console.log(token)
})

test('Create Booking',async ({request}) => {
  bookingid = await createbooking(request,'/booking');
})

test('Update Booking',async({request}) => {
  const firstname = await updatebooking(request,'/booking/',bookingid,token);
  expect(firstname).toBe('RAMESH')

})
