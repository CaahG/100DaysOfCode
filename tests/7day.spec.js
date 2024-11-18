//Teste de API

const { test, expect } = require('@playwright/test');
const { payloads, url } = require('../data/api');

test('POST API to create a user', async ({ request }) => {
  // Definir o corpo do usuário a ser criado
  const userData = payloads.createUser;
  // Enviar uma solicitação POST para criar o usuário
  const response = await request.post(url + '/v2/user', {
    data: userData
  });

  // Verificar se o status da resposta é 200 (OK)
  expect(response.status()).toBe(200);

  // Converter a resposta em JSON
  const responseData = await response.json();

  // Verificar se o campo "message" é igual ao ID do usuário criado
  expect(responseData.message).toBe(String(userData.id));
});
