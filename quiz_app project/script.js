const limain= document.getElementById('limain')
const li1= document.getElementById('li1')

const options = document.getElementById('options')

const checkboxes = document.querySelectorAll('#myCheckbox')


checkboxes.forEach(e=>{
    e.addEventListener('change', ()=>{
        if(this.checked){
            checkboxes.forEach(e=>e.checked=false);
            this.checked=true;
        }
    })
})