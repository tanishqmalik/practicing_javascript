const form_ele = document.getElementById('quiz-form')
const answer_input= Array.from(document.querySelectorAll('.answer'))
// const ques_items= document.querySelectorAll('.question-item')
const alertone= document.querySelector('#alert')


form_ele.addEventListener('submit', e=>{
    e.preventDefault()
    const checkedAnswers=answer_input.filter(answer_input => answer_input.checked)
    
    checkedAnswers.forEach(answer_input=>{
        const isCorrect = answer_input.value==="true"
        const questionItem= answer_input.closest('.question-item')

        if(isCorrect){
            questionItem.classList.add("correct")
            // alertone.classList.add('open')
        }

        else{
            questionItem.classList.add("incorrect");
            questionItem.classList.remove("correct")
        }

        // console.log(isCorrect)
        // const truevalues = questionItem.isCorrect
        // console.log(truevalues)



        // form_ele.addEventListener('submit', e=>{
        //     e.preventDefault()
        //     if(correctAnswers){
        //         alertone.classList.add('open')
        //     }
        // })
    })



    // const correctAnswers = questionItem => questionItem.isCorrect;

    // form_ele.addEventListener('submit',e=>{
    //     e.preventDefault()
    //     const correctAnswers = document.querySelectorAll('.correct')
    //     if(correctAnswers.isCorrect){
    //         alertone.classList.add('open')
    //     }
    //     // alertone.classList.add('open')
    //     console.log(alertone)
    
    // })

    const correctAnswers= Array.from(document.querySelectorAll('.correct'))
    console.log(correctAnswers)

    if(correctAnswers){
        alertone.classList.add('open')
    }
    console.log(alertone)


    
})



