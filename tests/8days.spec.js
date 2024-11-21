// Teste de automação WEB - Playwright 
//definindo variaveis de payloads
// chamando pasta anterior é '../data/elements'

const { test, expect } = require('@playwright/test');
const {elements} = require('../data/elements')
test('Realizando login ', async ({ page }) => {
    await page.goto('https://poster-store.pages.dev/#');
    await expect(page).toHaveTitle(/Poster Store/);
    await page.locator(elements.button_login).click();
    await page.locator(elements.input_username).fill('user1');
    await page.locator(elements.input_password).fill('pass1');
    await page.locator(elements.button_confirm).click();
    await page.waitForSelector(elements.text_success)

});
