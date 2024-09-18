
let rand_num1 = 0
let rand_num2 = 0
let correct_answers = 0
let wrong_answers = 0

const get_Rand_Num = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

const randomize_Numbers = () => {
    rand_num1 = get_Rand_Num(1, 10)
    rand_num2 = get_Rand_Num(1, 10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

const update_score = () => {
    document.querySelector('#correct_answers').innerHTML = correct_answers
    document.querySelector('#wrong_answers').innerHTML = wrong_answers
}

addEventListener("DOMContentLoaded", () => {
    randomize_Numbers()
    update_score()
})


const answer_button = document.getElementById('calculate');
answer_button.addEventListener('click', answer_Button_Click);
/* 
    Couldn't get the code working with the code sample in the
    assignment so I went with normal function instead because
    code that works is better than code that doesn't work
*/
function answer_Button_Click(){

    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2

    if (answer === correctAnswer)
    {
        document.querySelector('#answer_state').innerHTML = "Correct!"
        ++correct_answers
    } 
    else
    {
        document.querySelector('#answer_state').innerHTML = "Wrong! Correct answer was: " + String(correctAnswer)
        ++wrong_answers
    }

    update_score()
    randomize_Numbers()
    document.querySelector('input').value=''
}

