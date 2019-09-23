import Http from './http';

export const getAll = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/nivel/nivel', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const getById = (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/nivel/nivel/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const cadastro = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.post('/nivel/nivel', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const alterar = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.put('/nivel/nivel', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteById = (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.delete('/nivel/nivel/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteTodos = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.delete('/nivel/nivel', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}