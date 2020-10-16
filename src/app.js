const path = require ('path')
const express = require ('express') 
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const { env } = require('process')

const app = express()
const port = process.env.PORT || 5000

const publicdirctorypath = path.join(__dirname ,  '../public')
const viewspath = path.join(__dirname,'../templates/views')
const patialspath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(patialspath)

app.use(express.static(publicdirctorypath))


app.get('',(req,res)=>{
    res.render('index.hbs',{
        titel : ' weather',
        name : 'vaibhav rathore home page on 50000'   })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        titel: 'about page',
        name: ' somil rathore'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
      titel : ' help page php',
      name : ' vaibhav'  
    })
})


app.get('/weather',(req,res)=>{
        if (!req.query.address){
        return res.send ({
            error : 'location is not found try antother location'
        }) }
geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if (error){
        return res.send({error})
    }
forecast(latitude,longitude,(error,forecastdata)=>{
        if (error){
        return res.send({error})
        }
               res.send({
               forecast : forecastdata,
               location,
               address : req.query.address
        })
    })

})})

 app.get('/help/*',(req,res)=>{
        res.render('404',{ titel : 'help page unknone page chexk',
    name : 'kavita',
    errormessage: ' this is not /help page '
})
    })

  app.get('/product',(req,res)=>{
          
    if(!req.query.search){
          return  res.send ({
            error: 'you must provide seaerch trem'})
        }

  console.log(req.query.search)
      res.send({
          product : []
      }) })

app.get('*',(req,res)=>{
    res.render('404',{
        titel: ' vaibhav ',
        name : '404',
        errormessage : 'page is not mila'
    })})


app.listen(port,()=>{
    console.log('sever is runing'+port)
})
