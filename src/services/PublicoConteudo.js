import Http from './http';

export const getAll = () => {
    return Http.get('/publico-conteudo/conteudo', {
    })
}

export const getById = (id) => {
    return Http.get('/publico-conteudo/conteudo/' + id, {
    })
}

export const cadastro = () => {
    return Http.post('/publico-conteudo/conteudo', {
    })
}

export const alterar = () => {
    return Http.put('/publico-conteudo/conteudo', {
    })
}

export const deleteById = (id) => {
    return Http.delete('/publico-conteudo/conteudo/' + id, {
    })
}

export const deleteTodos = () => {
    return Http.delete('/publico-conteudo/conteudo', {
    })
}