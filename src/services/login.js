import Http from './http';

export const singIn = (email, senha) => {
    return Http.post('http://localhost:8001/login', {
        email: email,
        senha: senha
    })
}