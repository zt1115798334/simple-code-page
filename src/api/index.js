import {createAPI} from './create_api'

const api = createAPI()

export function showTable(param) {
    return api.post('/api/table/showTable', param)
}

export function showColumn(param) {
    return api.post('/api/table/showColumn', param)
}

export function getTableTrans(param) {
    return api.postJSON('/api/table/getTableTrans', param)
}

export function ymlAnalysis(param) {
    return api.post('/api/yml/ymlAnalysis', param)
}

export function ymlExtract(param) {
    return api.post('/api/yml/ymlExtract', param)
}
export function formatWordXml(param) {
    return api.postDown('/api/format/formatWordXml', param)
}