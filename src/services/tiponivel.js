import Http from './http';

export const getAll = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    return Http.get('/tiponivel/tiponivel', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}