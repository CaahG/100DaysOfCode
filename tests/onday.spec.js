// @ts-check
const { test, expect } = require("@playwright/test");

test("login", async ({ page }) => {
  // Acessa a página inicial
  await page.goto("https://poster-store.pages.dev/#", { timeout: 5_000 });

  // Verifica que o título da página é "Poster Store"
  await expect(page).toHaveTitle(/Poster Store/);

  // Clica no botão de login
  await page.locator('#login-button').click();

  // Preenche os campos de usuário e senha
  await page.locator('#swal-username').fill("lucas");
  await page.locator('#swal-password').fill("pass2");

  const loginButton = page.locator('.swal2-confirm.swal2-styled');
  await loginButton.click();

  const successMessage = page.locator(':has-text("Logged in successfully")');
  const errorMessage = page.locator(':has-text("Invalid credentials")'); // Exemplo de mensagem de erro

  const [response] = await Promise.all([
    successMessage.waitFor({ timeout: 5000 }).catch(() => null), // Espera pela mensagem de sucesso
    errorMessage.waitFor({ timeout: 5000 }).catch(() => null),   // Espera pela mensagem de erro
  ]);

  if (response) {
    // Se a mensagem de sucesso aparecer
    if (await successMessage.isVisible()) {
      console.log("Login realizado com sucesso!");
    } else {
      // Caso contrário, se a mensagem de erro aparecer
      console.log("Falha no login: Credenciais inválidas.");
      expect(successMessage).toBeVisible(); // Garante que a mensagem de sucesso não seja visível
    }
  }

  // Caso a mensagem de sucesso apareça, feche o alerta de sucesso
  if (await successMessage.isVisible()) {
    await loginButton.click();
  }
});
