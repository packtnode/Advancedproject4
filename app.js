const express = require('express'), 
    app  = express(),
    ejs  = require('ejs'), 
    port = process.env.PORT || 3000, 
    c    = console.log; 


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/',(req,res)=> res.render('index'));

app.listen(port,(err)=>{
        if(!err){
            c('listening on port',port)
        }else{
            c(err);
        }
  })


