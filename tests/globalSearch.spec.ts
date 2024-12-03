import { test, expect } from '@playwright/test';
import {PageMapping} from '../pages/PageMapping';
// JSON -> string -> js object
const data = JSON.parse(JSON.stringify(require("../testData/eoniData.json")));

// test.describe.configure({mode:'parallel'});
// test.describe.configure({mode:'serial'}); // if 1 test fail then next test will skip 
test("Global search for elector", async ({ page }) => {
    const pageMapping = new PageMapping(page);
    const loginPage = pageMapping.getLoginPage();
    await loginPage.navigate(data.url);
    await loginPage.validLogin(data.username,data.password);

    const homePage = pageMapping.getHomePage();
    await homePage.navigatetoRegisterOfElector();

    const registerOfElectorsPage= pageMapping.getRegisterOfElectorsPage();
    await registerOfElectorsPage.NavigateToCreateAPendingElectorPage();

    const createPendingElectorPage = pageMapping.getCreatePendingElectorPage();
    await createPendingElectorPage.CreateAPendingElector();

    const globalSearchPage = pageMapping.getGlobalSearch();
    await globalSearchPage.globalSearchElector();



})