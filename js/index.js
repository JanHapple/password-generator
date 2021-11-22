"use strict";

const inputField = document.querySelector('#passwordlength');
const output = document.querySelector('.output');
//const button = document.querySelector('button');
const buttons = document.querySelectorAll('.button');
const checkbox = document.querySelector('input[type=checkbox]');

let listenEvent = 0;
let count = 0;

const generatePassword = event => {
    let password = '';
    let charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
    let characterLength = charset.length;
    let length = inputField.value;

    if (Number(length) === 0 || Number(length) < 0) {
        length = 20;
    };

    for (let i=0; i < length; i++) {
        if (checkbox.checked && i > 0 && (i + 1) % 3 == 0) {
            password += charset.charAt(Math.floor(Math.random() * characterLength)).toUpperCase();
        } else {
            password += charset.charAt(Math.floor(Math.random() * characterLength));
        }
    };

    if (event.target.textContent == "Generate Password !") {
        listenEvent++;
        console.log("!", listenEvent);
        if (listenEvent == 10) {
            alert('Your basic account allows for you to generate a maximum of ten passwords. To generate more passwords, please upgrade your account!');
            event.target.removeEventListener('click', generatePassword);
            event.target.disabled = true;
            //buttons[0].disabled = true;
            event.target.style.backgroundColor = 'grey';
        };
    };

    if (event.target.textContent == "I feel lucky!") {
        event.target.removeEventListener('click', generatePassword);
        //buttons[1].disabled = true;
        event.target.style.backgroundColor = 'grey';
    }; 

    // return password;
   
    output.textContent = password;

    if (count % 2 == 0) {
        count++;
        output.style.backgroundColor = 'rgba(190, 190, 190, 0.2)';
    } else {
        count++;
        output.style.backgroundColor = 'rgba(0, 133, 0, 0.2)';
    }
};

inputField.addEventListener('change', generatePassword);
//button.addEventListener('click', insert);
buttons.forEach(button => button.addEventListener('click', generatePassword));
console.log(buttons);
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        checkbox.value = true;  
    } else {
        checkbox.value = false;
    } 
});





