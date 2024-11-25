//Teste de automatização de testes - Site Poster Store

// @ts-check
const { test, expect } = require('@playwright/test');
const { elements } = require('../data/9day');

test('adicionando produto ao carrinho', async ({ page }) => {
  await page.goto('https://poster-store.pages.dev/#');

  // Espera que o título contenha "Poster Store"
  await expect(page).toHaveTitle(/Poster Store/);
 // Clica no botão de login
 await page.locator('a[id="login-button"]').click();
 // Preenche o nome de usuário e senha da bela 
 await page.locator(elements.user_name).fill('user1');
 await page.locator(elements.input_password).fill('pass1'); 
 // Clicando no botão de confirmar
 await page.locator(elements.button_confirm).click();
 // Espera a mensagem de sucesso aparecer
 await page.waitForSelector(elements.text_success);
 
 // Clica no botão de adicionar ao carrinho
 await page.locator('button[class="swal2-confirm swal2-styled"]').click();
  await page.locator('div[class="card shadow-md hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp"]', 
    { hasText: 'Starry Night' }
  ).locator('button[class="btn btn-primary btn-sm mt-4 w-full"]').click();
  await page.waitForTimeout(5000);
  await page.locator('#cart-modal .modal-action .btn').click();
  
});