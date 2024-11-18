//definindo variaveis de payloads
const payloads = {
    createUser:  {
        id: 4,
        username: "Amy",
        firstName: "Penny",
        lastName: "Benardet",
        email: "amybugbang@gmail.com",
        password: "Pass@3456",
        phone: "54930198115",
        userStatus: 3
      }
}
const url = 'https://petstore.swagger.io';
//exportando variaveis de payloads
module.exports = {
    payloads, url
}