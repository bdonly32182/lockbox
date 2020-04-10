const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000;
const dev  = process.env.NODE_ENV !="production"
const app  = next({dev});
const handle = app.getRequestHandler();


//defind path by app.prepare
app.prepare().then(()=>{
    const server = express()

    server.get('/blogs/detail/:id',(req,res)=>{
        //path detail only
        return app.render(req,res,"blogs/detail",{id:req.params.id})
    })
    server.get('*',(req,res)=>{
        //if not path detail will return same page by execute handle
        return handle(req,res)
    })
    server.listen(port,err =>{

        if(err) throw err
        console.log("ready on Localhost:",port);
    })
})

