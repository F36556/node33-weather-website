//console.log('clint side javascript  file is loaded . it is showoing only on terminal')
    


const weatherform = document.querySelector('form')
const search = document.querySelector('input')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value
     
fetch('/weather?address='+location).then((Response)=>{
    Response.json().then((data)=>{
        if (data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

})