let express = require('./config/express')
let app = express()


let port = process.port ||3001
app.listen(port,()=>{
    console.log('server running on port',port)
})