import { Locator, Page } from "@playwright/test";

export default class Signout {
    readonly page: Page;
    readonly profpic_img: Locator;
    readonly logout_mnu: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.profpic_img = page.getByRole('img', { name: 'profile picture' });
        this.logout_mnu = page.getByRole('menuitem', { name: 'Logout' });


    }
    async signout() {
        await this.profpic_img.click();
        await this.logout_mnu.click();

    }
}