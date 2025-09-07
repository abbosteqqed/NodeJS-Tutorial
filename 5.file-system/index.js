const fs = require("fs")
const path = require("path")

const dataFolder = path.join(__dirname, "data")

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log("Data folder created")
}

const filePath = path.join(dataFolder, "data.txt")
const filePathAsync = path.join(dataFolder, "data-async.txt")
fs.writeFileSync(filePath, "Hello Abbos")

fs.appendFileSync(filePath, "\nAbbos is great developer")


const text = fs.readFileSync(filePath, "utf-8")

console.log(text)

fs.writeFile(filePathAsync, "Hello world", (err)=>{
    if(err) console.log(err)
    console.log("Successfully write created")
})

fs.readFile(filePath, "utf-8", (err, data)=>{
    if(err) console.log(err)
        console.log(data)
})