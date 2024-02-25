const open_buttton= document.querySelector('#open-modal-btn')
const overlay= document.querySelector('#overlay')
const close_button = document.querySelector('#close-modal-btn')
// const button_class= document.querySelector('.button-class')
const modal= document.querySelector('#modal')

open_buttton.addEventListener('click',e => {
    e.preventDefault()

    // const item= document.createElement('div')
    modal.classList.add('open')
    overlay.classList.add('open')
})

close_button.addEventListener('click', ()=>{
    modal.classList.remove('open')
    overlay.classList.remove('open')
})

overlay.addEventListener('click',()=>{
    modal.classList.remove('open')
    overlay.classList.remove('open')
})