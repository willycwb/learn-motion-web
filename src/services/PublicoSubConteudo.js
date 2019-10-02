import Http from './http';

export const getAll = () => {
    return Http.get('/publico-subconteudo/subconteudo', {
    })
}

export const getById = (id) => {
    return Http.get('/publico-subconteudo/subconteudo/' + id, {
    })
}

export const cadastro = () => {
    return Http.post('/publico-subconteudo/subconteudo', {
    })
}

export const alterar = () => {
    return Http.put('/publico-subconteudo/subconteudo', {
    })
}

export const deleteById = (id) => {
    return Http.delete('/publico-subconteudo/subconteudo/' + id, {
    })
}

export const deleteTodos = () => {
    return Http.delete('/publico-subconteudo/subconteudo', {
    })
}