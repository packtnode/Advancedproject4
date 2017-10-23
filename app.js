const express = require('express'), 
    app  = express(),
    ejs  = require('ejs'), 
    port = process.env.PORT || 3000, 
    c    = console.log; 


app.set('view engine', 'ejs');




app.use(express.static('public'));

app.get('/profile',(req,res)=> {
    let user = {
        name: 'Joe',
        img: 'http://www.how-to-draw-funny-cartoons.com/images/cartoon-boy-004.jpg'
    }
    res.render('profile',{user: user})

}); //localhost:3000/

app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(port,(err)=>{
        if(!err){
            c('listening on port',port)
        }else{
            c(err);
        }
  })


