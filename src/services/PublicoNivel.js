import Http from './http';

export const getAll = () => {
    return Http.get('/publico-nivel/nivel', {
    })
}

export const getById = (id) => {
    return Http.get('/publico-nivel/nivel/' + id, {
    })
}