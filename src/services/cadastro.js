import Http from './http';

const TIPO_NIVEL_URL_GET_ID = '/tiponivel/tiponivel';

export const buscaTipoNivel = () => {
    let token = localStorage.getItem('token');
    return Http.get(TIPO_NIVEL_URL_GET_ID, { params:{}, headers: { 'Authorization': 'Bearer ' + token } });
}

export const buscaTipoNivelPorId = (id) => {
    let token = localStorage.getItem('token');
    return Http.get(TIPO_NIVEL_URL_GET_ID +'/'+ id, { params:{}, headers: { 'Authorization': 'Bearer ' + token } });
}
