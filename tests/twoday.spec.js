const { test, expect } = require('@playwright/test');

test('POST request to Petstore API to create a user', async ({ request }) => {
  // Definir o corpo do usuário a ser criado
  const userData = {
    id: 2,
    username: "Chloe",
    firstName: "machado",
    lastName: "g",
    email: "chloemachado04@gmail.com",
    password: "Pass1@",
    phone: "54930198115",
    userStatus: 3
  };

  // Enviar uma solicitação POST para criar o usuário
  const response = await request.post('https://petstore.swagger.io/v2/user', {
    data: userData
  });

  // Verificar se o status da resposta é 200 (OK)
  expect(response.status()).toBe(200);

  // Converter a resposta em JSON
  const responseData = await response.json();

  // Verificar se o campo "message" é igual ao ID do usuário criado
  expect(responseData.message).toBe(String(userData.id));
});
