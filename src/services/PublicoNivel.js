import Http from './http';

export const getAll = () => {
    return Http.get('/publico-nivel/nivel', {
    })
}

export const getById = (id) => {
    return Http.get('/publico-nivel/nivel/' + id, {
    })
}

export const cadastro = () => {
    return Http.post('/publico-nivel/nivel', {
    })
}

export const alterar = () => {
    return Http.put('/publico-nivel/nivel', {
    })
}

export const deleteById = (id) => {
    return Http.delete('/publico-nivel/nivel/' + id, {
    })
}

export const deleteTodos = () => {
    return Http.delete('/publico-nivel/nivel', {
    })
}