const text = document.querySelector('.input')
const btns = document.querySelectorAll('button')


btns.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        const elem = btn.innerHTML

       if(elem === '='){
            try{
                const res = eval(text.innerHTML)
                text.innerHTML = res
            }catch (err){
               text.innerHTML = err.message
            }
       }else if(elem === 'AC'){
        text.innerHTML = ''
       }else{
        text.innerHTML += elem
       }
    })
})