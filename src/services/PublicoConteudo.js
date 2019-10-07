import Http from './http';

export const getAll = () => {
    return Http.get('/publico-conteudo/conteudo', {
    })
}

export const getById = (id) => {
    return Http.get('/publico-conteudo/conteudo/' + id, {
    })
}