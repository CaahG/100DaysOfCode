// @ts-check
const { test, expect } = require("@playwright/test");

test("login", async ({ page }) => {
  await page.goto("https://poster-store.pages.dev/#");
  { timeout: 5_000 });

  // Espera que o título contenha "Poster Store"
  await expect(page).toHaveTitle(/Poster Store/);
 // Clica no botão de loginn
  await page.locator('a[id="login-button"]').click();
  //Elemento de campo de usuário
  await page.locator('input[id="swal-username"]').fill("lucas");
  //elemento campo de senha
  await page.locator('input[id="swal-password"]').fill("pass2");
  //elemento do botão de login
  await page.locator('button[class="swal2-confirm swal2-styled"]').click();
  //elemento esperar por seletor com mensagem desejada
  await page.waitForSelector(':has-text("Logged in successfully")');
  //elemento botão de confirmação
  await page.locator('button[class="swal2-confirm swal2-styled"]').click();

});