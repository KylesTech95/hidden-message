let mouse = {x:undefined,y:undefined}
let logs_arr = document.querySelectorAll('.log')
let body = document.body;
let logList = document.querySelector('.log-list')
let yPos
let i = 0;
let array = []
let message2 = document.querySelector('.message-container2')
let message = document.querySelector('.hello-world')
let secret = document.querySelector('.secrety')
let uncover = document.querySelector('.message-uncover')
function randomWord(){
    let nextWord = words[Math.floor(Math.random()*words.length)]
    return nextWord
}
let log_top = document.querySelectorAll('.log-top')
let log_bottom = document.querySelectorAll('.log-bottom')
let btn = document.querySelectorAll('button')
let modeElem = document.querySelector('.mode')

//Array of words
const words = ['Fork for Fun','My name is Kyle','Hello World',`Today's Date:\n${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}`,'You are beautiful']
//mousemove event listener

window.addEventListener('mousemove',e=>{
    mouse={x:e.pageX,y:e.pageY}
    array.push(mouse.y)
    yPos = array.pop()
let right = (mouse.x > (logList.getBoundingClientRect().x + logList.getBoundingClientRect().width))
let left = (mouse.x < logList.getBoundingClientRect().x)

    if(right&&right+5 || left&&left-5){
        message.textContent = randomWord()
    }
})

window.addEventListener('touchmove',e=>{
    mouse={x:e.pageX,y:e.pageY}
    array.push(mouse.y)
    yPos = array.pop()
let right = (mouse.x > (logList.getBoundingClientRect().x + logList.getBoundingClientRect().width))
let left = (mouse.x < logList.getBoundingClientRect().x)

    if(right&&right+5 || left&&left-5){
        message.textContent = randomWord()
    }
})



//forEach log-item
logs_arr.forEach((log,i)=>{
    //assign your children to a variable
    let children = [...log.children],
    top = children[0],
    bottom = children[1]

    log.addEventListener('mouseenter',e=>{
        e.preventDefault()
        i++
        //insert into log depending on yPos
        top.style=`height:${yPos < logList.clientHeight/2 ? yPos - 75 : yPos - 75}px;transition:.15s;`
        bottom.style=`height:${yPos > logList.clientHeight/2 ? (body.clientHeight - yPos) - 75 : (body.clientHeight - yPos) - 50}px;transition:.15s;`
        //setTimeout to bring both logs together at the yPos that they first met
        setTimeout(()=>{
        top.style=`height:${top.clientHeight+75}px;transition:.15s;`
        bottom.style=`height:${bottom.clientHeight+75}px;transition:.15s;`
        },25 * (i+.5))
         //setTimeout to bring both logs together evenly. set Height:50%
         //comment out setTimout for freeStyle version
         setTimeout(()=>{
            top.style=`height:50%;transition:.15;`;
            bottom.style=`height:50%;transition:.15;`
        },50 * (i+1))
    })
    window.addEventListener('touchmove',e=>{
        e.preventDefault()
        i++
        //insert into log depending on yPos
        top.style=`height:${yPos < logList.clientHeight/2 ? yPos - 75 : yPos - 75}px;transition:.15s;`
        bottom.style=`height:${yPos > logList.clientHeight/2 ? (body.clientHeight - yPos) - 75 : (body.clientHeight - yPos) - 50}px;transition:.15s;`
        //setTimeout to bring both logs together at the yPos that they first met
        setTimeout(()=>{
        top.style=`height:${top.clientHeight+75}px;transition:.15s;`
        bottom.style=`height:${bottom.clientHeight+75}px;transition:.15s;`
        },25 * (i+.5))
         //setTimeout to bring both logs together evenly. set Height:50%
         //comment out setTimout for freeStyle version
         setTimeout(()=>{
            top.style=`height:50%;transition:.15;`;
            bottom.style=`height:50%;transition:.15;`
        },50 * (i+1))
    })

})
//hidden message appears while the instructions disappear
logList.addEventListener('mouseover',e=>{
    message.style = 'display:block'
    message2.classList.remove('appear')
    message2.classList.add('disappear')
    message.classList.add('appear')
})
logList.addEventListener('touchstart',e=>{
    message.style = 'display:block'
    message2.classList.remove('appear')
    message2.classList.add('disappear')
    message.classList.add('appear')
})


//instructions appear while the hidden message disappears
logList.addEventListener('touchend',e=>{
    let boundary = e.currentTarget
    if(boundary){
        message2.classList.add('appear')
        message2.classList.remove('disappear')
        message.style = 'display:none'
    }
        
})



//Optional choice to turn log-item borders on or off
function B_ON(){
log_top.forEach(top=>top.classList.add('border-active-light'))
log_bottom.forEach(bottom=>bottom.classList.add('border-active-light'))

}
function B_OFF(){
log_top.forEach(top=>{
    top.classList.remove('border-active-light')
    top.classList.remove('border-active-dark')
})
log_bottom.forEach(top=>{
    top.classList.remove('border-active-light')
    top.classList.remove('border-active-dark')

})

}

function light(){
   
        body.classList.toggle('body-dark')
        message.classList.toggle('hello-dark')
        log_top.forEach(log=>log.classList.contains('border-active-light')?log.classList.toggle('border-active-dark'):null)
        log_bottom.forEach(log=>log.classList.contains('border-active-light')?log.classList.toggle('border-active-dark'):null)
        secret.classList.toggle('secret-dark')
        uncover.classList.toggle('uncover-dark')
        btn.forEach(button=>{
            button.classList.toggle('btn-dark')
        })
        


}