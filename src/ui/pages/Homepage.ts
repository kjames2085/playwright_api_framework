import { Locator, Page } from "@playwright/test";

export default class Homepage {
    readonly page: Page;
    readonly admin_txt: Locator;
    readonly pim_txt: Locator;
    readonly leave_txt: Locator;
    readonly time_txt: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.admin_txt = page.getByRole('link', { name: 'Admin' });
        this.pim_txt = page.getByRole('link', { name: 'PIM' });
        this.leave_txt = page.getByRole('link', { name: 'Leave' });
        this.time_txt = page.getByRole('link', { name: 'Time' });


    }

    async homepage(){
        await this.admin_txt.click();
        await this.pim_txt.click();
        await this.leave_txt.click();
        await this.time_txt.click();

    }
}