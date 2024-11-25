// //definindo variaveis de payloads

const elements = {
    // elementos do formulario de login
    button_login: 'a[id="login-button"]',
    user_name: 'input[id="swal-username"]',
    input_password: 'input[id="swal-password"]',
    button_confirm: 'button[class="swal2-confirm swal2-styled"]',
    text_success: 'text="Logged in successfully"',
    // elementos dos cartoes de produtos
    
}
module.exports = {
    elements
}
    // nomes com _ sao snake case ex: user_name
    // nomes com - sao kebab case ex: user-name
    // nomes com letras maiusculas sao camel case ex: userName