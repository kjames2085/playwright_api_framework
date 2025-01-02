import {test} from "@playwright/test";
import { auth } from "../src/pom/auth";
import { createbooking } from "../src/pom/createbooking";
import { updatebooking } from "../src/pom/updatebooking";

let token;
let bookingid;
test('Auth',{tag:'@Sanity'},async ({request}) =>{
    token = await auth(request,'/auth')
})


test('Create Booking',async ({request}) =>{
    bookingid = await createbooking(request,'/booking');
})

test('Update Booking',async ({request}) =>{
    console.log(await updatebooking(request,'/booking/',bookingid,token))
})