var color = {
    0: "rgb(255, 25, 0)",
    1: "rgb(255, 25, 0)",
    2: "rgb(255, 0, 0)",
    3: "rgb(255, 0, 0)",
    4: "rgb(255, 47, 0)",
    5: "rgb(255, 47, 0)",
    6: "rgb(255, 51, 0)",
    7: "rgb(255, 51, 0)",
    8: "rgb(255, 58, 0)",
    9: "rgb(255, 58, 0)",
    10: "rgb(255, 64, 0)",
    11: "rgb(255, 64, 0)",
    12: "rgb(255, 81, 0)",
    13: "rgb(255, 81, 0)",
    14: "rgb(255, 94, 0)",
    15: "rgb(255, 94, 0)",
    16: "rgb(255, 102, 0)",
    17: "rgb(255, 102, 0)",
    18: "rgb(255, 115, 0)",
    19: "rgb(255, 115, 0)",
    20: "rgb(255, 123, 0)",
    21: "rgb(255, 123, 0)",
    22: "rgb(255, 132, 0)",
    23: "rgb(255, 132, 0)",
    24: "rgb(255, 140, 0)",
    25: "rgb(255, 140, 0)",
    26: "rgb(255, 149, 0)",
    27: "rgb(255, 149, 0)",
    28: "rgb(255, 157, 0)",
    29: "rgb(255, 157, 0)",
    30: "rgb(255, 166, 0)",
    31: "rgb(255, 166, 0)",
    32: "rgb(255, 174, 0)",
    33: "rgb(255, 174, 0)",
    34: "rgb(255, 183, 0)",
    35: "rgb(255, 183, 0)",
    36: "rgb(255, 191, 0)",
    37: "rgb(255, 191, 0)",
    38: "rgb(255, 200, 0)",
    39: "rgb(255, 200, 0)",
    40: "rgb(255, 208, 0)",
    41: "rgb(255, 208, 0)",
    42: "rgb(255, 217, 0)",
    43: "rgb(255, 217, 0)",
    44: "rgb(255, 225, 0)",
    45: "rgb(255, 225, 0)",
    46: "rgb(255, 234, 0)",
    47: "rgb(255, 234, 0)",
    48: "rgb(255, 242, 0)",
    49: "rgb(255, 242, 0)",
    50: "rgb(255, 251, 0)",
    51: "rgb(255, 251, 0)",
    52: "rgb(255, 255, 0)",
    53: "rgb(255, 255, 0)",
    54: "rgb(251, 255, 0)",
    55: "rgb(251, 255, 0)",
    56: "rgb(242, 255, 0)",
    57: "rgb(242, 255, 0)",
    58: "rgb(234, 255, 0)",
    59: "rgb(234, 255, 0)",
    60: "rgb(225, 255, 0)",
    61: "rgb(225, 255, 0)",
    62: "rgb(217, 255, 0)",
    63: "rgb(217, 255, 0)",
    64: "rgb(208, 255, 0)",
    65: "rgb(208, 255, 0)",
    66: "rgb(204, 255, 0)",
    67: "rgb(204, 255, 0)",
    68: "rgb(200, 255, 0)",
    69: "rgb(200, 255, 0)",
    70: "rgb(195, 255, 0)",
    71: "rgb(195, 255, 0)",
    72: "rgb(187, 255, 0)",
    73: "rgb(187, 255, 0)",
    74: "rgb(183, 255, 0)",
    75: "rgb(183, 255, 0)",
    76: "rgb(174, 255, 0)",
    77: "rgb(174, 255, 0)",
    78: "rgb(166, 255, 0)",
    79: "rgb(166, 255, 0)",
    80: "rgb(157, 255, 0)",
    81: "rgb(157, 255, 0)",
    82: "rgb(149, 255, 0)",
    83: "rgb(149, 255, 0)",
    84: "rgb(140, 255, 0)",
    85: "rgb(140, 255, 0)",
    86: "rgb(132, 255, 0)",
    87: "rgb(132, 255, 0)",
    88: "rgb(123, 255, 0)",
    89: "rgb(123, 255, 0)",
    90: "rgb(123, 255, 0)",
    91: "rgb(123, 255, 0)",
    92: "rgb(111, 255, 0)",
    93: "rgb(111, 255, 0)",
    94: "rgb(85, 255, 0)",
    95: "rgb(85, 255, 0)",
    96: "rgb(85, 255, 0)",
    97: "rgb(85, 255, 0)",
    98: "rgb(55, 255, 0)",
    99: "rgb(55, 255, 0)",
    100: "rgb(55, 255, 0)"

}
var num1 = 85;
var num2 = 68;
var num3 = 25;

console.log(color[2]);

var temp1 = document.getElementById('first');
temp1.innerText = num1;
var temp2 = document.getElementById('secnd');
temp2.innerText = num2;
var temp3 = document.getElementById('thierd');
temp3.innerText = num3;
var ex1 = document.getElementById('firstc');
ex1.style.stroke = color[num1];
ex1.style = 'stroke-dashoffset:calc(440px - (440px * ' + num1 + ')/100)';

var ex2 = document.getElementById('secondc');
ex2.style = 'stroke-dashoffset:calc(440px - (440px * ' + num2 + ')/100)';
ex2.style.stroke = color[num2];

var ex3 = document.getElementById('thierdc');
ex3.style = 'stroke-dashoffset:calc(440px - (440px * ' + num3 + ')/100)';
ex3.style.stroke = color[num3];

function pluse1() {

    num1 = num1 + 1;
    if (num1 > 100) {
        num1 = 100;
    }



    ex1.style = 'stroke-dashoffset:calc(440px - (440px * ' + num1 + ')/100)';
    ex1.style.stroke = color[num1];
    temp1.innerText = num1;
}

function min1() {
     num1 = num1 - 1;
    if (num1 < 0) {
        num1 = 0;
    }


   

    ex1.style = 'stroke-dashoffset:calc(440px - (440px * ' + num1 + ')/100)';
    ex1.style.stroke = color[num1];
    temp1.innerText = num1;
}

function pluse2() {
     num2 = num2 + 1;
    if (num2 > 100) {
        num2 = 100;
    }
   

    ex2.style = 'stroke-dashoffset:calc(440px - (440px * ' + num2 + ')/100)';
    ex2.style.stroke = color[num2];
    temp2.innerText = num2;
}

function min2() {
       num2 = num2 - 1;
    if (num2 < 0) {
        num2 = 0;
    }
 

    ex2.style = 'stroke-dashoffset:calc(440px - (440px * ' + num2 + ')/100)';
    ex2.style.stroke = color[num2];
    temp2.innerText = num2;
}

function pluse3() {

    num3 = num3 + 1;
    if (num3 > 100) {
        num3 = 100;
    }

    ex3.style = 'stroke-dashoffset:calc(440px - (440px * ' + num3 + ')/100)';
    ex3.style.stroke = color[num3];
    temp3.innerText = num3;
}

function min3() {
    
    num3 = num3 - 1;
    if (num3 < 0) {
        num3 = 0;
    }

    ex3.style = 'stroke-dashoffset:calc(440px - (440px * ' + num3 + ')/100)';
    ex3.style.stroke = color[num3];
    temp3.innerText = num3;
}




// var temp = document.querySelector('.sv');


// console.log(temp.firstElementChild);
