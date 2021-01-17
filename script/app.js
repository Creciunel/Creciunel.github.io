const tintelNews = document.querySelector('#news')
const navTop = document.querySelector('#nav')
const foot = document.querySelector('.page-footer')

console.dir(navTop)

setTimeout( () =>{
    addStyleTo(tintelNews, "It's a main page of news")
}, 4500)

function addStyleTo(node, text){
    node.textContent = text
    node.style.color = 'red'
    node.style.backgroundColor = 'black'
    node.style.textAlign = 'center'
    node.style.padding = '2rem'
}

setTimeout( ()=>{
    navTop.style.backgroundColor = 'black'
}, 5000)

setTimeout( ()=>{
    foot.style.backgroundColor = 'black'
    foot.style.color = "white"
}, 6000)

