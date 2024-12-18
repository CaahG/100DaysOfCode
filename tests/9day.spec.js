// @ts-check
const { test, expect } = require("@playwright/test");

const { elements, data } = require('../data/elementsposterstore');

test("finalizando compra", async ({ page }) => {
  // Aumentando o timeout do goto
  await page.goto("https://poster-store.pages.dev/#",);

  // login
  await expect(page).toHaveTitle(/Poster Store/);
  await page.locator(elements.button_login).click();
  await page.locator(elements.user_name).fill(data.valid_user);
  await page.locator(elements.input_password).fill(data.valid_pass);
  await page.locator(elements.button_confirm).click();
  await page.waitForSelector(elements.text_success);
  await page.locator(elements.click_ok).click();

  // Espera pelo sucesso do login
 //injetando seletor de texto.
  await page.locator(elements.titleToCard, { hasText: "Starry Night" })
      .locator(elements.button_addtocart)
      .click();
  await page.locator(elements.titleToCard, { hasText: "Majestic Forest" }).locator(elements.button_addtocart).click();
  await page.locator(elements.titleToCard, { hasText: "Indie Rock Legends" }).locator(elements.button_addtocart).click();
  await page.locator(elements.titleToCard, { hasText: "Tropical Paradise" }).locator(elements.button_addtocart).click();
  await page.locator(elements.click_car).click();
  await page.locator(elements.submit_order).click();
  await page.waitForSelector(elements.text_success_order);
  console.log("Login bem-sucedido!");   
});

//await page
    //.locator(
     // 'div[class="card shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp"]',
     // { hasText: "Starry Night" }
    //)
    //.locator('button[class="btn btn-primary btn-sm mt-4 w-full"]')
    //.click();