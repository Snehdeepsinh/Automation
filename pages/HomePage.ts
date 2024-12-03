import { Page, test, expect, Locator } from "@playwright/test";
import {Master} from '../pages/Master';
const data = JSON.parse(JSON.stringify(require("../testData/eoniData.json")));

export class HomePage extends Master{
    page : Page;
    searchTextbox : Locator;
    electorNameColumnFirstRow : Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.searchTextbox = page.locator("input.search-input.e-textbox");
        this.electorNameColumnFirstRow = page.locator("#Grid_content_table tr td[aria-label*=' header Elector'")
    }

    async navigatetoRegisterOfElector()
    {
        await this.electoralRegistrationIcon.click();
        await this.registerOfElectorsLink.click();
        await this.page.waitForLoadState("domcontentloaded"); // For faster load times if full network idle is not necessary

    }

    async globalSearchElector()
    {
        await this.searchTextbox.fill(data.nino);
        await this.page.keyboard.press('Enter');


    }
}