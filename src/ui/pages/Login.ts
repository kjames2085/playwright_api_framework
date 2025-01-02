import { expect, Locator, Page } from "@playwright/test";
//import { test } from "../fixture/beforeeach";

export default class Login {
    readonly page: Page;
    readonly username_txtbox: Locator;
    readonly password_txtbox: Locator;
    readonly login_btn: Locator;
    readonly timeatwork_txt: Locator;


    constructor(page: Page){
        this.page = page;
        this.username_txtbox = page.getByPlaceholder('Username');
        this.password_txtbox = page.getByPlaceholder('Password');
        this.login_btn = page.getByRole('button', { name: 'Login' });
        this.timeatwork_txt = page.getByText('Time at Work');

    }

    async login(username: string, password: string){
        await this.username_txtbox.click();
        await this.username_txtbox.fill(username);
        await this.password_txtbox.click();
        await this.password_txtbox.fill(password);
        await this.login_btn.click();
        await expect(this.timeatwork_txt).toBeVisible();
       await this.page.context().storageState({path: 'playwright/.auth/auth.json'});
    }
}