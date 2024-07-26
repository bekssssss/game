const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

const options = ['камень', 'ножницы', 'бумага'];


const computerPlay = () => options[Math.floor(Math.random() * 3)];


function playRound(playerSelection , computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Ничья!';
    } else if (
        (playerSelection === 'камень' && computerSelection === 'ножницы') ||
    (playerSelection === 'ножницы' && computerSelection === 'бумага') ||
    (playerSelection === 'бумага' && computerSelection === 'камень')
) {
        return 'Вы победили!';
    } else {
        return 'Компьютер победил!';
    }
}

buttons.forEach(button => {
    button.addEventListener('click',() => {
        let pcUser = computerPlay()

        return result.innerHTML =  `
        <p>${playRound(button.value, pcUser)}</p>
        <p>Компьютер: ${pcUser}</p>
        <p>Вы: ${button.value}</p>
        `
    });
})

