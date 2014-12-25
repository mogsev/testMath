/**
 * @author mogsev@gmail.com
 */
var add = 0;
var sub = 0;
var multi = 0;
var division = 0;
var job = false;

var correctAnswer = 0;
var wrongAnswer = 0;

var userResult;
var result;
var stringResult;

/**
 * 
 * @returns {undefined}
 */
function setAdd() {    
    if (add === 0) {
        add = 1;
    } else { 
        add = 0;
    }
}

/**
 * 
 * @returns {undefined}
 */
function setSub() {
    if (sub === 0) {
        sub = 2;
    } else {
        sub = 0;
    }
}

/**
 * 
 * @returns {undefined}
 */
function setMulti() {
    if (multi === 0) {
        multi = 3;
    } else {
        multi = 0;
    }
}

/**
 * 
 * @returns {undefined}
 */
function setDivision() {
    if (division === 0) {
        division = 4;
    } else {
        division = 0;
    }
}

/**
 * 
 * @returns {undefined}
 */
function getAnswerResult() {
    document.getElementById("correctAnswer").innerHTML = 'Правильных ответов - ' + correctAnswer;
    document.getElementById("wrongAnswer").innerHTML = 'Ошибок - ' + wrongAnswer;    
}

/**
 * 
 * @returns {undefined}
 */
function checkJob() {
    if (job) {
        checkValue();
    } else {
        alert("Сгенерируйте новую задачу!");
    }
}

function checkResult() {
    var value = parseInt(document.getElementById("userResult").value);
    if (value === result) {
        correctAnswer++;
        document.getElementById("check").innerHTML = 'Правильный ответ';
    } else {
        wrongAnswer++;
        document.getElementById("check").innerHTML = 'Ошибка';
    }
    resetAll();
    getAnswerResult();
}

/**
 * 
 * @returns {undefined}
 */
function resetAll() {
    job = false;
    result = null;
    stringResult = null;
    
}

/**
 * 
 * @returns {undefined}
 */
function checkValue() {        
    var value = parseInt(document.getElementById("userResult").value);
    if (isNaN(value) || value < 0) {
        alert("Вводите только положительные натуральные числа");        
    } else {
        document.getElementById("check").innerHTML = value;
        checkResult();
    }
}

/**
 * This metod generate random number
 * @param {type} x
 * @returns {Number}
 */
function getRandomNumber(x) {     
    return Math.round(Math.random()*x);
}

/**
 * 
 * @param {type} x
 * @returns {unresolved}
 */
function getTask(x) {
    if (add === x) return x;
    if (sub === x) return x;
    if (multi === x) return x;
    if (division === x) return x;
    return getTask(getRandomNumber(4));
}

/**
 * 
 * @returns {undefined}
 */
function getJob() {
     if (((add === 0) && (sub === 0) && (multi === 0) && (division === 0))) {  
        alert("Выбирите одно из действий в установках!");
    } else { 
        if (job) {
            alert("Введите ответ и проверте результат");
        } else {
            document.getElementById("userResult").value = null;
            //document.getElementById("check").innerHTML = null;
            getRandomTask();
        }
    }
}

/**
 * This metod get random task
 * @returns {undefined}
 */
function getRandomTask() {
    var numTask = getTask(getRandomNumber(4));
    switch (numTask) {
        case 1: getAdd();
            break;
        case 2: getSub();
            break;
        case 3: getMulti();
            break;
        case 4: getDivision();
            break;
    }
}

/**
 * This metod generate sum up task
 * @returns {undefined}
 */
function getAdd() {    
    var oneNum = getRandomNumber(10);
    var twoNum = getRandomNumber(10);        
    stringResult = "Задание: ";         
    if (isNaN(result) || result == null) {                
        result = oneNum + twoNum;
        stringResult += oneNum + " + " + twoNum;
    }    
    document.getElementById("job").innerHTML = stringResult;
    document.getElementById("check").innerHTML = result;
    job = true;
}

/**
 * This metod generate subtraction task
 * @returns {undefined}
 */
function getSub() {
    var oneNum = getRandomNumber(10);
    var twoNum = getRandomNumber(oneNum);        
    stringResult = "Задание: ";         
    if (isNaN(result) || result === null) {                
        result = oneNum - twoNum;
        stringResult += oneNum + " - " + twoNum;
    }    
    document.getElementById("job").innerHTML = stringResult;
    document.getElementById("check").innerHTML = result;
    job = true;
}

/**
 * This metod generate multi task
 * @returns {undefined}
 */
function getMulti() {
    var oneNum = getRandomNumber(10);
    var twoNum = getRandomNumber(10);        
    stringResult = "Задание: ";         
    if (isNaN(result) || result === null) {                
        result = oneNum * twoNum;
        stringResult += oneNum + " * " + twoNum;
    }    
    document.getElementById("job").innerHTML = stringResult;
    document.getElementById("check").innerHTML = result;
    job = true;
}

/**
 * This metod generate division task
 * @returns {undefined}
 */
function getDivision() {
    var oneNum = getRandomNumber(10);
    var twoNum = getRandomNumber(10);        
    stringResult = "Задание: ";         
    if (isNaN(result) || result === null) {                
        result = Math.round(oneNum / twoNum);
        stringResult += oneNum + " / " + twoNum;
    }    
    document.getElementById("job").innerHTML = stringResult;
    document.getElementById("check").innerHTML = result;
    job = true;
}




