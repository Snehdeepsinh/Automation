import { Page, test, expect, Locator } from "@playwright/test";
import {Master} from '../pages/Master';
const data = JSON.parse(JSON.stringify(require("../testData/eoniData.json")));

export class LoginPage extends Master{
    page: Page;
    loginButton: Locator;
    usernameText: Locator;
    passwordText: Locator;
    signInButton: Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.loginButton=page.locator("button#button-backtologin.login-button");
        this.usernameText = page.locator("#email");
        this.passwordText = page.locator("#password");
        this.signInButton = page.locator("button#next");

    }

    async navigate(url : string) {
        try {
            await this.page.goto(url, { waitUntil: 'load', timeout: 60000 });
            await this.loginButton.click();
        } catch (error) {
            console.error("Navigation failed: ", error);
        }
    }

    async validLogin(user : string,pasword : string) {
        /*
        await this.page.waitForSelector('#userEmail', { state: 'visible' });
        await this.page.waitForSelector('#userPassword', { state: 'visible' });
        */
        await this.usernameText.fill(user);
        await this.passwordText.fill(pasword);
        await this.signInButton.click();
        await this.page.waitForLoadState("networkidle");
    }
}
