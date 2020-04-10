    const bcrypt = require('bcryptjs');

exports.login =((req,res)=>{
    console.log(req.body.password);
    let password =req.body.password
        const saltRounds = 10;
        const myPlaintextPassword = 's0/\/\P4$$w0rD';
        const someOtherPlaintextPassword = 'not_bacon';
        bcrypt.hash(password, saltRounds, function(err, hash) {
            res.json({pass:password})
          });
})