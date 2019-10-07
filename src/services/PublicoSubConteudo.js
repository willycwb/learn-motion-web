import Http from './http';

export const getAll = () => {
    return Http.get('/publico-subconteudo/subconteudo', {
    })
}

export const getById = (id) => {
    return Http.get('/publico-subconteudo/subconteudo/' + id, {
    })
}