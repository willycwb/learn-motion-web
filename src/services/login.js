import Http from './http';

export const singIn = (email, senha) => {
    return Http.post('/login', {
        email: email,
        senha: senha
    })
}