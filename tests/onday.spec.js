// @ts-check
const { test, expect } = require("@playwright/test");

test("login", async ({ page }) => {
  await page.goto("https://poster-store.pages.dev/#", { timeout: 5_000 });

  // Verifica que o título da página é "Poster Store"
  await expect(page).toHaveTitle(/Poster Store/);

  // Clica no botão de login
  await page.locator('#login-button').click();

  // Preenche o campo de usuário e senha
  await page.locator('#swal-username').fill("lucas");
  await page.locator('#swal-password').fill("pass2");

  // Clica no botão de confirmação de login
  await page.locator('.swal2-confirm.swal2-styled').click();

  // Aguarda a mensagem de login bem-sucedido
  await page.waitForSelector(':has-text("Logged in successfully")');

  // Fecha o alerta de sucesso
  await page.locator('.swal2-confirm.swal2-styled').click();
});
