alert("Please choose a number for User1 that you guess your opponent can click on")

const user1Input = document.getElementById('user1');
const user2Input = document.getElementById('user2');

function sayi1() {
    const user1Value = document.getElementById('user1').value;
    localStorage.setItem('user1Sayi', user1Value);
    alert('User1 number saved. Please choose a number for User2 that you guess your opponent can click on');
    user1Input.value = "";
    user2Input.focus();
}

function sayi2() {
    const user2Value = document.getElementById('user2').value;
    localStorage.setItem('user2Sayi', user2Value);
    alert('User2 number saved.');
    alert(`The game starts!!!
        Please click on the buttons not to find what your opponent picked. The person whose number is chosen wins the game.`)
    user2Input.value = "";
}

function setupEnterKeyListener() {
    user1Input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sayi1();
        }
    });

    user2Input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sayi2();
        }
    });
}

function checkNumber(buttonValue) {
    const user1Sayi = localStorage.getItem('user1Sayi');
    const user2Sayi = localStorage.getItem('user2Sayi');

    if (buttonValue.toString() === user1Sayi) {
        alert('User1 number clicked!');
    } else if (buttonValue.toString() === user2Sayi) {
        alert('User2 number clicked!');
    }
    
    const button = document.querySelector(`button[type="button"]:nth-of-type(${buttonValue})`);
    button.innerHTML = 'X';
    button.style.textDecoration = 'line-through';
    button.style.backgroundColor = 'red'; 
    button.style.color = 'white'; 
}

window.onload = setupEnterKeyListener;
