// Teste de API - Pedido de compra de um pet

// Este é um pedido para o pet com ID 123, com 2 unidades sendo compradas. O pedido foi enviado, mas não está completo.
const { test, expect } = require('@playwright/test');

test('PUT request to Petstore API to Access to Petstore orders', async ({ request }) => {
  // Definir o corpo do pedido a ser atualizado
  const orderData = {
    "id": 1,                       // ID único do pedido
    "petId": 123,                   // ID do pet pedido
    "quantity": 2,                  // Quantidade de itens/pets solicitados
    "shipDate": "2024-11-14T10:30:00.000Z", // Data e hora do envio (em formato UTC)
    "status": "shipped",            // Status atual do pedido, indicando que foi enviado
    "complete": false               // Pedido não está completo ainda
  };

  // Enviar uma solicitação PUT para atualizar o pedido
  const response = await request.put('https://petstore.swagger.io/v2/order', {
    data: orderData // Definindo o corpo da solicitação com os dados do pedido
  });

  // Verificar se o status da resposta é 200 (OK)
  expect(response.status()).toBe(200);

  // Converter a resposta em JSON
  const responseData = await response.json();

  // Verificar se o campo "id" na resposta é igual ao ID do pedido atualizado
  expect(responseData.id).toBe(orderData.id);
});
