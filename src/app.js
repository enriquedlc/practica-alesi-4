const { JSONToObject } = require('./common/jsonobject')
const { objectToCSV } = require('./common/objectToCSV')

const jsonFileP = process.cwd() + '\\src\\data\\products.json'
const exportCSV = "src/exports/filename.csv"

async function app() {
    try {
        const products = await JSONToObject(jsonFileP)
        const OK = await objectToCSV(products, ["price", "name" ], exportCSV, (elto) => elto.price >= 10)
    } catch (error) {
        console.log(error)
    }
}

app()