// @ts-check
const { test, expect } = require("@playwright/test");

const elements = require("../data/elementsposterstore"); // Importando os elementos do cartão de produtos

test("login", async ({ page }) => {
  // Aumentando o timeout do goto
  await page.goto("https://poster-store.pages.dev/#",);

  // login
  await expect(page).toHaveTitle(/Poster Store/);
  await page.locator(elements.button_login).click();
  await page.locator(elements.user_name).fill("user1");
  await page.locator(elements.input_password).fill("pass1");
  await page.locator(elements.button_confirm).click();

  // Espera pelo sucesso do login
  await page.locator(elements.tittleto_card).click();
  await page.locator(elements.button_addtocart).click();
  await page.locator(elements.click_car).click();
  await page.locator(elements.submit_orderubmit_order).click();
  await page.waitForSelector(elements.text_success_order);
  console.log("Login bem-sucedido!");   
});
