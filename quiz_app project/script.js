const form_ele = document.getElementById('quiz-form')
const answer_input= Array.from(document.querySelectorAll('.answer'))
// const ques_items= document.querySelectorAll('.question-item')
const alert= document.getElementById('alert')


form_ele.addEventListener('submit', e=>{
    e.preventDefault()
    const checkedAnswers=answer_input.filter(answer_input => answer_input.checked)
    
    checkedAnswers.forEach(answer_input=>{
        const isCorrect = answer_input.value==="true"
        const questionItem= answer_input.closest('.question-item')

        if(isCorrect){
            questionItem.classList.add("correct")
        }

        else{
            questionItem.classList.add("incorrect");
            questionItem.classList.remove("correct")
        }

        console.log(questionItem)
    })
})