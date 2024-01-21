let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");

setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
  }, 1280);


const img= document.querySelector('#defante')
const btn = document.querySelector('.btn')


img.addEventListener("click",()=>{
 alert('Baby, baby do biruleibe leibe')
})

btn.addEventListener("mouseover",()=>{
    btn.innerText = 'aprovo'
})
btn.addEventListener("mouseout",()=>{
    btn.innerText = '#defante no bb24'
})