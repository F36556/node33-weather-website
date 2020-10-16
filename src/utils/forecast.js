const request = require('request')
const forcast = (latitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/8105eeed5a44c7f587ae28185872e341/' + latitude + ',' + longitude
 
   request ( {  url , json : true },(error,{body})=>{'https://api.darksky.net/forecast/8105eeed5a44c7f587ae28185872e341/'
       if (error){
                    callback('unable to connect weather server',undefined)
       } else if (body.error){
                    callback('unable to find location',undefined)
       } else {
                    callback(undefined,body.daily.data [0].summary +'it is currently '+ body.currently.temperature + 'dgrres out . thre is  a ' + body.currently.precipProbability + '% chance to rain')
       }

         })
                                               }
                                             
module.exports= forcast