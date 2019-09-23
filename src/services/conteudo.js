import Http from './http';

export const getAll = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/conteudo/conteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const getById = (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/conteudo/conteudo/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const cadastro = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.post('/conteudo/conteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const alterar = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.put('/conteudo/conteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteById = (id) => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.delete('/conteudo/conteudo/' + id, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export const deleteTodos = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.delete('/conteudo/conteudo', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}