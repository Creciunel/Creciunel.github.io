const tintelNews = document.querySelector('#news')
const navTop = document.querySelector('nav')
const foot = document.querySelector('footer')
const cherck = document.querySelector('#check1')
const chekstd = document.querySelector('#chekstd')


cherck.onclick = () => {
    navTop.style.backgroundColor = 'black'
    foot.style.backgroundColor = 'black'
    foot.style.color = "#fff"
    if(tintelNews){
        console.dir(tintelNews)
        tintelNews.innerText = 'This is a page of news'
        tintelNews.style.color = 'red'
        tintelNews.style.backgroundColor = 'black'
        tintelNews.style.padding = '1rem'
    }
}

chekstd.onclick = () => {
    navTop.style.backgroundColor = ' rgba(92, 10, 60, 0.5)'
    foot.style.backgroundColor = ' rgba(92, 10, 60, 0.5)'
    foot.style.color = "#fff"
    if(tintelNews){
        tintelNews.innerText = 'This is a page of news'
        tintelNews.style.color = 'rgb(82, 197, 197'
        tintelNews.style.backgroundColor = '#fff'
        tintelNews.style.padding = '1rem'
    }
}

