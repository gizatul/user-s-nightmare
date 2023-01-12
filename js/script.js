'use strict';

const minus = document.querySelector('.minus'),
      plus = document.querySelector('.plus'),
      phone = document.querySelector('.phone__number');

let number = 9274560001;
plus.addEventListener('click', () => {
    number++;
    if(number == 9999999999) {
        number = 1000000000;
    }
    transformNumber (number);
});

minus.addEventListener('click', () => {  
    number--;
    if(number == 1000000000) {
        number = 9999999999;
    }
    transformNumber (number);  
});

function transformNumber (value) {
    let arr = String(value).split('');
    phone.textContent = `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}-${arr[8]}${arr[9]}`;
}


