
// Task 1

function getColor(){
	var p = document.getElementsByTagName('p');
	for (var i=0; i<p.length; i++){
		p[i].style.backgroundColor = "red";
	}
}
getColor();

// Task 2

var img = document.getElementsByTagName('img');

function getShadow(){
	for (var i = 0; i < img.length; i++) {
	var style = img[i].style;
	style.boxShadow = '16px 14px 50px 14px rgba(7,53,143,0.74)';
	}
}

getShadow();

// Task 3

function getParagraph(){

	var li = document.getElementsByTagName('li');
	
	for (var i = 0; i < li.length; i++){
		for(var num = 0; num <= i; ){
			num  += 1;
			var str = num + '. ';
		};
		
		li[i].insertAdjacentHTML('afterBegin', str);
	}
}

getParagraph();

// Task 4

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var task4 = document.getElementById('task4');

var counter = 1;

btn1.onclick = function click1(){
	if (counter){
		task4.innerHTML = 'Колличество кликов ' + counter;
		counter = counter +1;
	}
}

btn2.onclick = function click2(){
	if (counter){
		task4.innerHTML = 'Колличество кликов ' + counter;
		counter = counter +1;
	}
}

// Task 5

var task5 = document.getElementById('task5');
var button = document.getElementById('button');

function pow (number, degree){
	var number = document.getElementById('number').value,
		degree = document.getElementById('degree').value,
		rezult = 1;

		rezult= Math.pow(number,degree);

		task5.innerHTML = ' Результат - ' + rezult; 
}

button.addEventListener('click', pow, false);

// Task 6

var task6 = document.getElementById('task6');
var button6 = document.getElementById('button6');

button6.onclick = function(){
	var yearborn = document.getElementById('yearborn').value;

	if( yearborn >16 ){
		 task6.innerHTML = 'Добро пожаловать'; 
	} else if(yearborn <= 16 && yearborn > 0){
		task6.innerHTML = 'Вы еще молоды'; 
	} else {
		task6.innerHTML = 'Введите возраст';
	}
	
}


// Task 7

var arr = [];

var button7 = document.getElementById('button7');
var newArr = document.getElementById('task7'); 
var arrLength = document.getElementById('arrLength');

button7.onclick = function(){
	var elem = document.getElementById('elem').value;
	if(!elem ){
		arrLength.innerHTML = 'ОШИБКА';
	} else{
		arr.push(elem);
		newArr.innerHTML = arr;
		
	arrLength.innerHTML = 'ДЛИННА МАССИВА - '+ arr.length;
	}
				
}


// Task 8

var task8 = document.getElementById('task8');
var button8 = document.getElementById('button8');


function getNumeric(){
		var numeric = document.getElementById('numeric').value;

		if (numeric >= 10) {
		 	return task8.innerHTML = Math.pow(numeric,2);
		} else if (numeric<7){
			return task8.innerHTML = 'Число меньше 7 ';
		} else{
			return task8.innerHTML = 'Это число 7 или 8'; 
		}

}

button8.addEventListener('click', getNumeric, false);

