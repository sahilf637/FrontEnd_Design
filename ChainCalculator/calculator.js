let val = document.getElementById("value")

console.log("Script Working")

let buttons = document.querySelectorAll('.button')

let stack = [];

str = ""

function eval(){
    len = stack.length - 1;
    console.log(stack)
    if(len == -1)
        return;

    number = []

    while(len > -1 && stack[len] != '+' && stack[len] != '-' && stack[len] != '*' && stack[len] != '/' && stack[len] != '%'){
        number.push(stack.pop())
        console.log(number);
        
        len--;
    }

    val = 0;
    for(let i = number.length - 1; i >= 0; i--){
        val = Number(val) * 10 + number[i];
        len--;
    }

    stack.push(val);
}

function solve(){
    val = 0;
    num1 = stack.pop();
    opp = stack.pop();
    num2 = stack.pop();
    if(opp == '+')
        val = num1 + num2;
    else if(opp == '-')
        val = num2 - num1;
    else if(opp == '*')
        val = num1 * num2;
    else if(opp == '/')
        val = num2 / num1;
    else if(opp == '%')
        val = num2 % num1;

    stack.push(val);
    return val;
}

function Update(val1){
    console.log(val1)
    val = document.getElementById("value");
    str = str + val1;
    val.innerText = str;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.innerText) {
            case '=':
                eval();
                str = "";
                Update(solve());
                break;
            case '1':
                eval();
                stack.push(1);
                Update(1);
                break;
            case '2':
                eval();
                stack.push(2);
                Update(2);
                break;
            case '3':
                eval();
                stack.push(3);
                Update(3);
                break;
            case '4':
                eval();
                stack.push(4);
                Update(4);
                break;
            case '5':
                eval();
                stack.push(5);
                Update(5);
                break;
            case '6':
                eval();
                stack.push(6);
                Update(6);
                break;
            case '7':
                eval();
                stack.push(7);
                Update(7);
                break;
            case '8':
                eval();
                stack.push(8);
                Update(8);
                break;
            case '9':
                eval();
                stack.push(9);
                Update(9);
                break;
            case '0':
                eval();
                stack.push(0);
                Update(0);
                break;
            case '+':
                eval();
                stack.push('+');
                Update('+');
                break;
            case '*':
                eval();
                stack.push('*');
                Update('*');
                break;
            case '-':
                eval();
                stack.push('-');
                Update('-');
                break;
            case '/':
                eval();
                stack.push('/');
                Update('/');
                break;
            case '%':
                eval();
                stack.push('%');
                Update('%');
                break;
            case "C":
                str = "";
                Update(0);
                stack = [];
        }
    })
})