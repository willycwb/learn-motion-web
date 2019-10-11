import Http from './http';

export const getAll = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/usuario/usuario', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const getById = (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/usuario/usuario/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const cadastro = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.post('/usuario/usuario', 
    {
        nivel
    },
    {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const alterar = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.put('/usuario/usuario', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteById = (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.delete('/usuario/usuario/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteTodos = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.delete('/usuario/usuario', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}