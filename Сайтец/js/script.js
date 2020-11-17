var legend = document.querySelector(".btn-find");
var form = document.querySelector(".find-hotel form");
var criticalButton = document.querySelector(".critical-btn-find");
criticalButton.classList.add("hidden");

var checkIn = document.querySelector("[name=check-in]");
var checkOut = document.querySelector("[name=check-out]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");

legend.addEventListener("click", function () {
	form.classList.toggle("hidden");
	checkIn.focus();
});

var a_plus = document.querySelector(".plus-adults");
var a_minus = document.querySelector(".minus-adults");
var c_plus = document.querySelector(".plus-children");
var c_minus = document.querySelector(".minus-children");

a_plus.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (adults.value != -1) {
		adults.value++;
	}
	
});

a_minus.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (adults.value != 0) {
		adults.value--;
	}
});

c_plus.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (children.value != -1) {
		children.value++;
	}
});

c_minus.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (children.value != 0) {
		children.value--;
	}
});

form.addEventListener("submit", function (evt) {
	if (!checkIn.value || !checkOut.value || !children.value || !adults.value) {
		evt.preventDefault();
		console.log('Нужно заполнить все поля!');
	}
});