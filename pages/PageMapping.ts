import { LoginPage } from "../pages/LoginPage";
import {HomePage} from "../pages/HomePage";
import {RegisterOfElectorsPage} from "./RegisterOfElectorsPage"
import {GlobalSearchPage} from './GlobalSearchPage'
import { Master } from "./Master";
import { Page } from "playwright/test";
import { CreatePendingElectorPage } from "./CreatePendingElectorPage";

export class PageMapping
{
    page: Page;
    loginPage: LoginPage;
    homePage : HomePage;
    registerOfElectorsPage : RegisterOfElectorsPage;
    createPendingElectorPage : CreatePendingElectorPage;
    globalSearchPage : GlobalSearchPage;

    constructor(page: Page)
    {
    this.page=page;
    this.loginPage= new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.registerOfElectorsPage = new RegisterOfElectorsPage(this.page);
    this.createPendingElectorPage = new CreatePendingElectorPage(this.page);
    this.globalSearchPage = new GlobalSearchPage(this.page);
    }
    getLoginPage()
    {
        return this.loginPage;
    }

    getHomePage()
    {
        return this.homePage;
    }
    
    getRegisterOfElectorsPage()
    {
        return this.registerOfElectorsPage;
    }

    getCreatePendingElectorPage()
    {
        return this.createPendingElectorPage;
    }

    getGlobalSearch() {return this.globalSearchPage;}


}