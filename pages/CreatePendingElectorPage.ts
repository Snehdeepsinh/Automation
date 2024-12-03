import { Page, test, expect, Locator } from "@playwright/test";
import { Master } from '../pages/Master';
const data = JSON.parse(JSON.stringify(require("../testData/eoniData.json")));

export class CreatePendingElectorPage extends Master {

    page: Page;
    firstNameTextField: Locator;
    LastNameField: Locator;
    registrationChannelInputfield: Locator;
    nationality: Locator;
    filterButton: Locator;
    nationalityDropdownlist: Locator;
    AddaElectorlink: Locator;
    ninoTextField: Locator;
    dateOfBirth: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.firstNameTextField = page.locator("input[formcontrolname='forename']");
        this.LastNameField = page.locator("input[formcontrolname='surname']");
        this.registrationChannelInputfield = page.locator("div[aria-placeholder='Registration channel'] input");
        this.nationality = page.locator("ejs-dropdownlist[formcontrolname='nationalityId'] span.e-search-icon");
        this.filterButton = page.locator("//button[text()='Filter']");
        this.AddaElectorlink = page.locator("li[data-value='Add elector']");
        this.nationalityDropdownlist = page.locator("div.e-content.e-dropdownbase ul");
        this.ninoTextField = page.locator("input[formcontrolname='nino']");
        this.dateOfBirth = page.locator("ejs-datepicker[formcontrolname='dateOfBirth'] div.e-date-wrapper input");
    }

    async CreateAPendingElector() {
        await this.registrationChannelInputfield.fill(data.registrationChannel);
        await this.firstNameTextField.fill(data.firstName);
        await this.LastNameField.fill(data.lastName);

        await this.ninoTextField.scrollIntoViewIfNeeded();
        await this.ninoTextField.fill(data.nino);

        await this.nationality.scrollIntoViewIfNeeded();

        // // Step 1: Click on the dropdown to open it
        await this.page.click('//ejs-dropdownlist[@formcontrolname="nationalityId"]', { force: true });

        // // Step 2: Wait for the dropdown options to be visible (dropdown panel opens)
        await this.page.waitForSelector('div.e-content.e-dropdownbase ul', { state: 'visible' });

        // // Step 3: Select the option by its text
        const optionText = 'British';  // Replace with the desired option
        await this.page.click(`div.e-content.e-dropdownbase ul li:has-text("${optionText}")`, { force: true });

        //await this.page.locator('button:has-text("Save")').click({ force: true });

        // await this.page.evaluate(() => {
        //     const button = document.querySelector('button.e-btn.e-primary.submit-button') as HTMLButtonElement;  // Cast to HTMLButtonElement
        //     if (button) {
        //         button.click();  // Now TypeScript recognizes the 'click()' method
        //     }
        // });

        // await this.page.waitForSelector('button.e-btn.e-primary.submit-button', { state: 'visible' }); // Wait until the button is visible
        // await this.page.click('button.e-btn.e-primary.submit-button'); // Perform the click

        await this.page.$eval('button.e-btn.e-primary.submit-buttont', button => button.scrollIntoView());
        await this.page.click('button.e-btn.e-primary.submit-button');

        // Check if the button is enabled
        const isEnabled = await this.page.isEnabled('button:has-text("Edit")'); // Replace with your selector

        // Assert using expect
        expect(isEnabled).toBeTruthy(); // or `expect(isEnabled).toBe(true);`

        await this.page.waitForLoadState("networkidle");


    }

    async UpdatePendingElector() {
        await this.clickOnbutton(this.page, "Edit");
        await this.ninoTextField.fill(data.nino);
        await this.dateOfBirth.fill(data.dob);
        await this.clickOnbutton(this.page, "Save");
    }



}

function UpdatePendingElector() {
    throw new Error("Function not implemented.");
}
