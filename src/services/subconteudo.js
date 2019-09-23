import Http from './http';

export const getAll = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/subconteudo/subconteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const getById = (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/subconteudo/subconteudo/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const cadastro = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.post('/subconteudo/subconteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const alterar = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.put('/subconteudo/subconteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteById = (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.delete('/subconteudo/subconteudo/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteTodos = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.delete('/subconteudo/subconteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}