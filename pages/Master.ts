import { Page, test, expect, Locator } from "@playwright/test";

export class Master{
    page: Page;
    globalSearchText: Locator;
    electoralRegistrationIcon: Locator;
    registerOfElectorsLink: Locator;
    wardFiterIcon: Locator;
    filterButton : Locator
    AddaElectorlink : Locator
    SaveButton : Locator
    constructor(page: Page) {
        this.page = page;
        this.globalSearchText=page.locator(".search-input.e-textbox.e-lib.e-input");
        this.electoralRegistrationIcon = page.locator("em[aria-label='Electoral registration']");
        this.registerOfElectorsLink = page.locator("div[aria-label='Register of electors'] a");
        this.wardFiterIcon = page.locator("div[e-mappinguid='e-flmenu-grid-column1']");
        this.filterButton = page.locator("//button[text()='Filter']");
        this.AddaElectorlink = page.locator("li[data-value='Add elector']");
        this.SaveButton = page.locator("button.e-btn.e-primary.submit-button");
    }

   
    async clickOnbutton(page: Page, buttonText : string) {
        // Locate the button using its text and click it
        // await page.locator(`button:text-is("${buttonText}")`).waitFor({ state: 'visible' });
        await page.locator(`button:text-is("${buttonText}")`).click({ force: true });
    }

    
}