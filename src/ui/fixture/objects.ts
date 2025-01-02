import {test as mytest} from "@playwright/test";
import Homepage from "../pages/Homepage";
import Signout from "../pages/Signout";
import Login from "../pages/Login";

export const test = mytest.extend<{homepage: Homepage, signout: Signout, login: Login}>({
   login: async ({page},use) =>{
      await use(new Login(page))
   },
    homepage: async({page},use) => {
       await use(new Homepage(page))
    },
    signout: async ({page},use) => {
       await use(new Signout(page))

    }
})