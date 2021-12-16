const menuBtn = document.querySelector('.hambugerBtn')
const header = document.querySelector('.header')

menuBtn.addEventListener('click',()=>{
    const leftPosition = menuBtn.offsetLeft
    
    header.classList.toggle('showBtn')
    if(header.classList.contains('showBtn')){
        console.log(menuBtn)
        menuBtn.style.left = leftPosition + 70 +'px'
    }else{
        menuBtn.style.left = leftPosition -70 + 'px'
    }
})