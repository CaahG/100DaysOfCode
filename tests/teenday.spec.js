
const { test, expect } = require('@playwright/test');

test('POST request to Petstore API to create an order', async ({ request }) => {
  // Dados do pedido a ser criado
  const pedido = {
    id: 0, // ID do pedido
    petId: 123, // ID do animal de estimação
    quantity: 2, // Quantidade de itens
    shipDate: "2024-11-21T19:55:22.003Z", // Data de envio
    status: "placed", // Status do pedido
    complete: true // Pedido concluído
  };

  // Enviar uma solicitação POST para criar o pedido
  const response = await request.post('https://petstore.swagger.io/v2/store/order', {
    data: pedido,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Verificar se o status da resposta é 200 (OK)
  expect(response.status()).toBe(200);

  // Converter a resposta em JSON
  const responseData = await response.json();

  // Exibir os dados da resposta no console
  console.log('Pedido criado:', responseData);

  // Validar se o ID do pedido está presente na resposta
  expect(responseData).toHaveProperty('id');
  expect(responseData.petId).toBe(pedido.petId);
});
