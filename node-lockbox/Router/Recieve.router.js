
module.exports = (app)=>{
    let pack = require('../controller/Recieve.controller')
    app.post('/recievepack',pack.recievepack)
    app.get('/products',pack.product)
}