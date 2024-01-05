// let res = document.getElementById("display");

// let calculate=(num)=>{
//     res.value += num; 
// }

// let result=()=>{
//     try{
//         res.value = eval(res.value);
//     }
//     catch(err){
//         alert("Enter the valid input")
//     }
// }

// let clrDisplay=()=>{
//     res.value = "0";
// }

// let back=()=>{
//     res.value = res.value.slice(0,-1);
// }

document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonVal = this.innerText;
            
            if (buttonVal === 'AC') {
                clrDisplay();
            } else if (buttonVal === 'DEL') {
                back();
            } else if (buttonVal === '=') {
                res();
            } else {
                txtDisplay(buttonVal);
            }
        });
    });

    function clrDisplay() {
        display.value = '';
    }

    function back() {
        display.value = display.value.slice(0, -1);
    }

    function txtDisplay(num) {
        display.value += num;
    }

    function res() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
});

