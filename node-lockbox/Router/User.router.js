
module.exports = (app)=>{
    let member = require('../controller/User.controller')
    app.post('/login',member.login)
}