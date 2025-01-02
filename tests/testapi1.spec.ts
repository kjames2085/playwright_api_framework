import { expect, test } from "@playwright/test";
import bodydata from "../src/testdata/data.json";
import iteration from "../src/testdata/iteration.json";

let token;
let bookingid;

iteration.forEach((iteration) => {

  if (iteration.test <= "3") {
    test.describe('Suite'+ iteration.test,{tag:'@Regression'}, () => {


      test('Create Token', async ({ request }) => {
        const response = await request.post('/auth', {
          data: bodydata.createtoken
        });
        token = ((await response.json()).token)
      })

      test('Create Booking', async ({ request }) => {
        const response = await request.post('/booking', {
          data: bodydata.createbooking
        });
        bookingid = ((await response.json()).bookingid)

      })

      test('Update Booking', async ({ request }) => {
        const response = await request.put('/booking/' + bookingid, {
          headers: { 'Cookie': 'token=' + token },
          data: bodydata.updatebooking
        });
        expect((await response.json()).firstname).toEqual('Ramesh')

      })
    })
  }
})