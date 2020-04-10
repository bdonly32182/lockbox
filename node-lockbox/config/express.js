let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

module.exports=()=>{
    let app = express()

    app.use(cors())
    app.use(bodyParser.urlencoded({
        extended:true
    }))
    app.use(bodyParser.json())
    require('../Router/User.router')(app)
    require('../Router/Recieve.router')(app)
    return app
}