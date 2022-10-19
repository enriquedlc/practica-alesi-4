const path = require("path")
const fs = require('fs')
const { connected } = require("process")
const fsPromises = fs.promises

const JSONToObject = async (jsonFileP) => {
    try {
        const data = await fsPromises.readFile(jsonFileP)
        return JSON.parse(data)
    } catch (error) {
        return null
    }
}


module.exports = { JSONToObject }