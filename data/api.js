// Definindo variáveis de payloads
const payloads = {
    createUser:  {
        id: 1,
        username: "mulher",
        firstName: "gato",
        lastName: "selinakyle",
        email: "mulhergato@gmail.com",
        password: "pass1234@5",
        phone: "11930198115",
        userStatus: 2
    }
};

const url = 'https://petstore.swagger.io';

// Exportando variáveis de payloads
module.exports = {
    payloads, url
};




