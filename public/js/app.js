//console.log('clint side javascript  file is loaded . it is showoing only on terminal')
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageOne = document.querySelector('#message-2')




weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value
    messageOne.textContent='loding...'
    messageOne.textContent=''
 
fetch('/weather?address='+location).then((Response)=>{
    Response.json().then((data)=>{
        if (data.error){
            messageOne.textContent=data.error

        }else{
            messageOne.textContent=data.location
            messageOne.textContent=data.forecast

        }
    })
})

})