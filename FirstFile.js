"use strict";

document.getElementById("btn1").onmousedown = function () {
	buttonDown();
};

document.getElementById("btn1").onmouseup = function () {
	buttonUp();
};

document.getElementById("btn1").onclick = function () {
	clickCounter();
};

document.getElementById("btn1").onmouseover = function () {
	mouseOver();
};

document.getElementById("btn1").onmouseleave = function () {
	mouseLeave();
};

document.getElementById("btn2").onclick = function () {
	changeColor();
};

var temp = document.querySelector(".temp");

// window.addEventListener("load", ()=> {
// 	if(navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition(position => {
// 			let lon = position.coords.longitude;
// 			let lat = position.coords.latitude;
// 			let key = config.myKey;
// 			const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,daily&appid=${key}`;
// 			fetch(api)
// 				.then(response => {
// 					return response.json();
// 				})
// 				.then(data => {
// 					console.log(data);
// 					const {temperature} = data.currently;
// 					temp.textContent = temperature
// 				})
// 		})
// 	}
// });

// Change Color Button

function componentToHex(num) {
	var hex = num.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function changeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	hex = rgbToHex(r, g, b);
	document.getElementById("p4").innerHTML = "rgb("
		.concat(r, ", ")
		.concat(g, ", ")
		.concat(b, ") ")
		.concat(hex);
	document.body.style.background = "rgb("
		.concat(r, ", ")
		.concat(g, ", ")
		.concat(b, ")");
}

// Info Button

var count = 1;

function clickCounter() {
	document.getElementById("p2").innerHTML = "Click count: ".concat(count++);
}

function mouseOver() {
	document.getElementById("p3").innerHTML = "On Button";
}

function mouseLeave() {
	document.getElementById("p3").innerHTML = "Not on Button";
}

function buttonDown() {
	document.getElementById("p1").innerHTML = "Button: DOWN";
}

function buttonUp() {
	document.getElementById("p1").innerHTML = "Button: UP";
}
