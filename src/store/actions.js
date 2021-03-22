import {getTableTrans, showColumn, showTable} from "@/api";

export default {
    showColumn: ({commit}, {param}) => {
        console.log(commit)
        return showColumn(param).then((res) => {
            return res
        })
    },
    showTable: ({commit}, {param}) => {
        console.log(commit)
        return showTable(param).then((res) => {
            return res
        })
    },

    getTableTrans: ({commit}, param) => {
        console.log(commit)
        return getTableTrans(param).then((res) => {
            return res
        })
    },
}
