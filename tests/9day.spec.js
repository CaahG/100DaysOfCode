const { test, expect } = require('@playwright/test');
const elements = require('./path/to/elements');

test('Teste de login', async ({ page }) => {
    await page.goto('https://poster-store.pages.dev/#');
    await page.locator(elements.button_login).click();
    await page.locator(elements.user_name).fill('user1');
    await page.locator(elements.input_password).fill('pass1');
    await page.locator(elements.button_confirm).click();
    await page.waitForSelector(elements.text_success);
    console.log('Login bem-sucedido!');
});
