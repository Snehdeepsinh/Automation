import {Master} from './Master'
import { Page, Locator } from '@playwright/test'

export class RegisterOfElectorsPage extends Master{
    page: Page;
    electoralRegistrationIcon: Locator;
    registerOfElectorsLink: Locator;
    wardFiterIcon: Locator;
    wardInputTextfield: Locator;
    firstStreetCheckbox : Locator;
    firstWardStreetCheckbox : Locator;
    propertyExpandlink : Locator;
    firstPropertyCheckbox : Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.electoralRegistrationIcon = page.locator("em[aria-label='Electoral registration']");
        this.registerOfElectorsLink = page.locator("div[aria-label='Register of electors'] a");
        this.wardFiterIcon = page.locator("div[e-mappinguid='e-flmenu-grid-column1']");
        this.wardInputTextfield = page.locator("#strui-grid-column1");
        this.firstWardStreetCheckbox = page.locator("table#Grid_content_table tr:nth-child(1)  td.e-gridchkbox");
        this.firstStreetCheckbox = page.locator("table#boundaryStreetGrid_content_table tr:nth-child(1) td.e-gridchkbox");
        this.propertyExpandlink = page.locator("table#boundaryPropertyGrid_content_table tr:nth-child(1) a:nth-child(1)");
        this.firstPropertyCheckbox = page.locator("table#boundaryPropertyGrid_content_table tr:nth-child(1) td div.e-checkbox-wrapper");
    
    }

    async NavigateToCreateAPendingElectorPage()
    {
        await this.firstWardStreetCheckbox.waitFor({ state: 'visible', timeout: 90000 }); // 90 seconds
        await this.firstWardStreetCheckbox.click({ force: true });
        
        await this.firstStreetCheckbox.waitFor({ state: 'visible', timeout: 90000 }); // 90 seconds
        await this.firstStreetCheckbox.click({ force: true });
        
        await this.page.waitForSelector('table#boundaryPropertyGrid_content_table tr:nth-child(1) td div.e-checkbox-wrapper', { timeout: 60000 });

        await this.firstPropertyCheckbox.click({ force: true });
        await this.AddaElectorlink.click({ force: true });
        await this.page.waitForLoadState("networkidle");
    }


}