const main_form = document.querySelector('.form')
const form_child= document.querySelector('.form-child')
const username= document.getElementById('username')
const password= document.getElementById('password')
const password_confirmation=document.getElementById('password-confirmation')
const submit=document.getElementById('button')
const checkbox_button=document.getElementById('checkbox-id')
const incorrect_y = document.querySelector('.incorrect')

const correct_display=document.querySelector(".correct")

main_form.addEventListener('submit', e=>{

    const username_input= username.value.trim();

    e.preventDefault()

    const input_value=String(password.value.trim())
    const input_value2= String(password_confirmation.value.trim())
    
    if (input_value.trim() === '' && input_value2.trim() === '' && checkbox_button.checked) {
        console.log("Do nothing because inputs contain only spaces");
    } 
    else if (username_input!=='' && input_value === input_value2 && checkbox_button.checked) {
        console.log(input_value);
        correct_display.classList.add('show');
        main_form.classList.add('hide');
    } 
    else {
        incorrect_y.classList.add('show')
        console.log("Passwords do not match or checkbox is not checked or you entered wrong username.");
    }
})

main_form.addEventListener('submit', e=>{
    e.preventDefault();


})