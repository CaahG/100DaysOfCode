

const elements = {
    // Elementos do formulário de login
    button_login: 'a[id="login-button"]',
    user_name: 'input[id="swal-username"]',
    input_password: 'input[id="swal-password"]',
    button_confirm: 'button[class="swal2-confirm swal2-styled"]',
    text_success: ':has-text("Logged in successfully")',
    click_ok: 'button[class="swal2-confirm swal2-styled"]', 
  
    // Elementos do cartão de produtos
    //query: o seletor do elemento.
   //hasText: o texto  no elemento.
  
   
    titleToCard: 'div[class="card-body p-4"]',
    button_addtocart: 'button[class="btn btn-primary btn-sm mt-4 w-full"]',
    click_car: 'div[id="sticky-cart"]',
    removendo_produto: 'div[class="flex justify-between items-center mb-4"]',
    button_remove: 'button[class="btn btn-sm btn-error"]',
    submit_order: 'button[class="btn btn-success"]', 
    text_success_order: ':has-text("Order Submitted")',
    // text_success_order: 'text="Order Submitted"',
};
 
  
module.exports = {
    data: {
        valid_user: 'user1',
        valid_pass: 'pass1'
    },
    elements: elements, 
};
