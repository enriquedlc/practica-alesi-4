const path = require("path")
const fs = require('fs')
const fsPromises = fs.promises
const exportFolderPath = "src/exports"

const objectToCSV = async (data, fields, filename, filter = null) => {
    let separador = ','
    let columns = []

    const sonLas2 = () => {
        fields.forEach((element) => {
            columns.push(element.charAt(0).toUpperCase() + element.substring(1))
        })
        return columns
    }


    let writeFile = [
        sonLas2().join(','),
        ...data.map(datos => fields.reduce(
            (counter, p) => `${counter}${!counter.length ? '' : separador}${datos[p] ? datos[p] : ''}`, '',
        ))
    ]

    const filterItems = () => {
        if (filter === null) {
            return true
        } else {
            // console.log(writeFile)

            data.forEach((element) => {
                console.log(writeFile)
                if (!filter(element)) {
                    for (let i = 0; i < writeFile.length; i++) {
                        writeFile.pop(writeFile[i])
                    }
                } else {

                    console.log("else final")
                }
            })
        }
    }


    filterItems()


    // hacer .join('\n') al terminar la funcion de filter

    await fsPromises.mkdir(exportFolderPath, { recursive: true })
    await fsPromises.writeFile(filename, writeFile, { flag: 'w' })
    return writeFile
}



module.exports = { objectToCSV }

    // let arrFields = fields
    // arrFields.forEach((element, restoCadena) => {
    //     console.log(element)
    //     element = element.charAt(0).toUpperCase()
    //     console.log(element)
    //     restoCadena += restoCadena
    // })

