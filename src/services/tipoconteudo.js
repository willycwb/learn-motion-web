import Http from './http';

export const getAll = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/tipoconteudo/tipoconteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const getById = (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/tipoconteudo/tipoconteudo/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const cadastro = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.post('/tipoconteudo/tipoconteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const alterar = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.put('/tipoconteudo/tipoconteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteById = (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.delete('/tipoconteudo/tipoconteudo/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteTodos = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.delete('/tipoconteudo/tipoconteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}