import {formatWordXml, getTableTrans, showColumn, showTable, ymlAnalysis, ymlExtract} from "@/api";

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

    ymlAnalysis: ({commit}, {param}) => {
        console.log(commit)
        return ymlAnalysis(param).then((res) => {
            return res
        })
    },

    ymlExtract: ({commit}, {param}) => {
        console.log(commit)
        return ymlExtract(param).then((res) => {
            return res
        })
    },
    formatWordXml: ({commit}, {param}) => {
        console.log(commit)
        return formatWordXml(param).then((res) => {
            return res
        })
    },
}
