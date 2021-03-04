import {getTableTrans, showColumn, showTable} from "@/api";

export default {
    showTable: ({param}) => {
        return showTable(param).then((res) => {
            return res
        })
    },
    showColumn: (param) => {
        return showColumn(param).then((res) => {
            return res
        })
    },
    getTableTrans: ({param}) => {
        return getTableTrans(param).then((res) => {
            return res
        })
    },
}
