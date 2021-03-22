import {createAPI} from './create_api'

const api = createAPI()

export function showTable(param) {
    return api.post('/api/showTable', param)
}

export function showColumn(param) {
    return api.post('/api/showColumn', param)
}

export function getTableTrans(param) {
    return api.postJSON('/api/getTableTrans', param)
}