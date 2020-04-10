
exports.recievepack =((req,res)=>{
    console.log(req.body.productName);
    
    res.json({pack:[req.body]})

})
exports.product = ((req,res)=>{
    res.json({product:[
        {id:1,productName:'Plant',unit:3,thumbnail:"/image/plant.jpg",readView:false,colorButton:"btn btn-block btn-info"},
      {id:2,productName:'Cloth',unit:5,thumbnail:"/image/cloth.jpg",readView:false,colorButton:"btn btn-block btn-info"},
      {id:3,productName:'Shoes',unit:2,thumbnail:"/image/vansold.jpg",readView:false,colorButton:"btn btn-block btn-info"},
      {id:4,productName:'Watch',unit:1,thumbnail:"/image/watch.jpg",readView:false,colorButton:"btn btn-block btn-info"},
      {id:5,productName:'Belt',unit:1,thumbnail:"/image/belt.jpg",readView:false,colorButton:"btn btn-block btn-info"},
      ]})
})