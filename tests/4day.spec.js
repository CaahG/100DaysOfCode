const { test, expect } = require('@playwright/test');

test('GET request to Jsonplaceholder for a specific post', async ({ request }) => {
  // Fazer uma solicitação GET para obter o post com ID 1
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  // Verificar se o status da resposta é 200 (OK)
  expect(response.status()).toBe(200);

  // Converter a resposta em JSON
  const postData = await response.json();

  expect(postData.id).toBeDefined();
});