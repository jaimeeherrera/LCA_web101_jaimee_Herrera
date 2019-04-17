alert("This is a Test ALERT- NO NEED TO WORRY ;)");
$(function () {

    let $list = $('ul');
    let $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        let text = $('input[type="text"]').val();
        $list.append(`<li>${text}</li>`);
        $('input[type="text"]').val('');
    });

    $list.on('click', 'li', function () {
        let $this = $(this);
        $this.remove();
    });

});

var myLocation = document.getElementById("my-coordinates")

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayPosition)
    } else {
        myLocation.innerHTML = "Not available"
    }
}

function displayPosition(position) {
    myLocation.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
}

function startTime() {
    var today = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('clk1').innerHTML = today.getHours() + " : ";
    document.getElementById('clk2').innerHTML = today.getMinutes() + " : ";
    document.getElementById('clk3').innerHTML = today.getSeconds();
    document.getElementById("day").innerHTML = today.getDate() + " /";
    document.getElementById('month').innerHTML = today.getMonth() + 1 + " /";
    document.getElementById('year').innerHTML = today.getFullYear();
    var t = setTimeout(function () { startTime() }, 500);
    document.getElementById("weekdays").innerHTML = "Today is " + weekdays[today.getDay()];
}
startTime();

function addNumber(num) {
    document.querySelector("#results").value +=
        num;
}
function clearResults() {
    document.querySelector("#results").value = "";
}
function addition() {
    document.querySelector("#results").value += "+";
}

function multiply() {
    document.querySelector("#results").value += "*";
}
function divide() {
    document.querySelector("#results").value += "/";
}
function equals() {
    document.querySelector("#results").value = eval(document.querySelector("#results").value);
}