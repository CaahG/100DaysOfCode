// Teste de API - updated user PUT

//Resumo
//Esse código realiza um teste automatizado de uma atualização de usuário na API Petstore usando uma requisição PUT. Ele verifica se:
//A requisição retorna um status de sucesso (200).
//A resposta da API contém uma confirmação que inclui o ID do usuário atualizado.
//Esse tipo de teste é essencial em QA para garantir que a API está funcionando corretamente ao lidar com operações de atualização de dados.



const { test, expect } = require('@playwright/test');

test('PUT request to Petstore API to update a user', async ({ request }) => {
  // Definir o corpo do usuário a ser atualizado
  const userData = {
    id: 2,
    username: "Chloe",
    firstName: "machado",
    lastName: "gonzaga",
    email: "chloemachado04@gmail.com",
    password: "Pass1@",
    phone: "54930198115",
    userStatus: 3
  };
  // Enviar uma solicitação PUT para atualizar o usuário
  const response = await request.put('https://petstore.swagger.io/v2/user/chloe', {
    data: userData
  });

  // Verificar se o status da resposta é 200 (OK)
  expect(response.status()).toBe(200);

  // Converter a resposta em JSON
  const responseData = await response.json();

  // Verificar se o campo "message" é igual ao ID do usuário atualizado
  expect(responseData.message).toBe(String(userData.id));
});

  