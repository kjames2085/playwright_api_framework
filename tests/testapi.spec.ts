import { test } from "@playwright/test";
import { tokengeneration } from "../pom/tokengeneration/function";
import { createbooking } from "../pom/createbooking/function";
import { updatebooking } from "../pom/updatebooking/function";
import { iteration } from "./iteration";

let token;
let bookingid;
iteration.forEach((iteration) => {
   test('API Ticket Booking' + iteration.Test, async ({ request }) => {

      await test.step('Token Generation', async () => {
         token = await tokengeneration(request, '/auth');
      })

      await test.step('Create Booking', async () => {
         bookingid = await createbooking(request, '/booking');

      })

      await test.step('Update Booking', async () => {
         await updatebooking(request, '/booking/', bookingid, token)
      })
   })
})
