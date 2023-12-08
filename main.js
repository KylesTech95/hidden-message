let mouse = {x:undefined,y:undefined}
let logs_arr = document.querySelectorAll('.log')
let body = document.body;
let logList = document.querySelector('.log-list')
let yPos
let i = 3;
let array = []
let message2 = document.querySelector('.message-container2')
let message = document.querySelector('.hello-world')
function randomWord(){
    let nextWord = words[Math.floor(Math.random()*words.length)]
    return nextWord
}
const words = ['Fork for Fun','My name is Kyle','Hello World',`${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}`,'You are beautiful']
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

logs_arr.forEach((log,i)=>{
    let children = [...log.children],
    top = children[0],
    bottom = children[1]
    log.addEventListener('mouseenter',e=>{
        e.preventDefault()
        top.style = `transform:translate(0,${(yPos-top.getBoundingClientRect().height)-25}px);background:firebrick;transition:.2s;`
        bottom.style = `transform:translate(0,${(yPos - top.getBoundingClientRect().height)+25}px);background:firebrick;transition:.2s;`
        setTimeout(()=>{
            top.style = `height:50%;`
            bottom.style = `height:50%;`
        },500)
    })
    log.addEventListener('mouseleave',e=>{
        e.preventDefault()
        i+=.15
        top.style = `transform:translate(0,${(yPos-top.getBoundingClientRect().height)-100}px);transition:1s;background:brown`
        bottom.style = `transform:translate(0,${(yPos - top.getBoundingClientRect().height)+100}px);transition:1s;background:brown;`
        setTimeout(()=>{
            top.style = `height:50%;`
            bottom.style = `height:50%;`
        },25 * i)
    })
})
logList.addEventListener('mouseover',e=>{
    message.style = 'display:block'

    message2.classList.remove('appear')
    message2.classList.add('disappear')
    message.classList.add('appear')


})
logList.addEventListener('mouseout',e=>{
    let boundary = e.currentTarget
    if(boundary){
        message2.classList.add('appear')
        message2.classList.remove('disappear')
        message.style = 'display:none'
    }
        
})
