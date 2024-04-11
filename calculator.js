var lastCalc = ""; 
var operationCount = 0; 
var lastNum = ""; 
var lastOperation = ""; 

function insert(num) {
    var numero = document.getElementById('result').innerHTML;
    if(num === ',' && lastNum.includes(',')) {
        return;
    }
    if(['+', '-', 'x', '÷'].includes(num)) {
        if(numero === "" && num !== "-") {
           
            return;
        } else if(operationCount > 0) {
           
            numero = numero.slice(0, -1);
        } else {
            operationCount++;
        }
        lastOperation = num; 
        lastNum = ""; 
    } else {
       
        if((lastNum + num).length > 10) {
            return;
        }
        lastNum += num;
        if(lastOperation !== "") {
            
            operationCount = 0;
            lastOperation = "";
        }
    }
    document.getElementById('result').innerHTML = numero + num;
}

function clean() {
    document.getElementById('result').innerHTML = "";
    operationCount = 0; 
    lastNum = ""; 
}

function back() {
    var result = document.getElementById('result').innerHTML;
    var lastChar = result.slice(-1);
    if(['+', '-', 'x', '÷'].includes(lastChar)) {
        operationCount--; 
    } else {
       
        lastNum = lastNum.slice(0, -1);
    }
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calculate() {
    var result = document.getElementById('result').innerHTML;
    if(result) {
        var originalResult = result;
        result = result.replace(/x/g, '*').replace(/÷/g, '/').replace(/,/g, '.');
        var calculationResult = eval(result);
        lastCalc = originalResult + " = " + calculationResult; 
        var displayedResult = calculationResult.toString().replace(/\./g, ',');
        if(displayedResult.length > 10) {
            displayedResult = "..." + displayedResult.slice(-1);
        }
        document.getElementById('result').innerHTML = displayedResult;
        document.getElementById('last-calc').innerHTML = lastCalc.replace(/\./g, ','); 
        operationCount = 0; 
        lastNum = ""; 
    } else {
        document.getElementById('result').innerHTML = "Nada...";
    }
}

function calculatePercentage() {
    var result = document.getElementById('result').innerHTML;
    if(result) {
        document.getElementById('result').innerHTML = eval(result) / 100;
    }
}

function toggleSign() {
    var result = document.getElementById('result').innerHTML;
    if(result.charAt(0) === "-") {
        document.getElementById('result').innerHTML = result.slice(1);
    } else {
        document.getElementById('result').innerHTML = "-" + result;
    }
}
