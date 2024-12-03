import { Page, test, expect, Locator } from "@playwright/test";
import {Master} from './Master';
const data = JSON.parse(JSON.stringify(require("../testData/eoniData.json")));

export class GlobalSearchPage extends Master{
    page : Page;
    searchTextbox : Locator;
    electorNameColumnFirstRow : Locator;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.searchTextbox = page.locator("input.search-input.e-textbox");
        this.electorNameColumnFirstRow = page.locator("#Grid_content_table tr td[aria-label*=' header Elector'")
    }

    async globalSearchElector()
    {
        await this.searchTextbox.fill(data.nino);
        await this.page.keyboard.press('Enter');
        await expect(this.electorNameColumnFirstRow).toContainText(data.firstName + data.lastName);
    }
}