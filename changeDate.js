var dates = document.querySelector(".dates");
var popup = document.querySelector(".popup");
var close = document.querySelector('.popup .close');
var submit = document.querySelector('.popup div.button');
var radioButtons = document.getElementsByName('drone');
var textarea = document.querySelector('textarea');

var days = document.querySelectorAll(".dates span");

var clicked;
var checked;
var spanContext = new Array(42).fill("");

for (var i = 0; i < days.length; i++) {
    var day = days[i];
    day.value = i;
}


dates.addEventListener('click', function (event) {
    clicked = event.target;
    popup.style.display = 'block';
    textarea.value = spanContext[clicked.value];
});

close.addEventListener('click', function () {
    popup.style.display = 'none';

});

function fit(str) {
    switch (str) {
        case 'fuyao':
            return '#B8D4E3';
            break;
        case 'duanlian':
            return '#f3f31c';
        case 'qita':
            return 'pink';
        default:
            break;
    }
}

submit.addEventListener('click', function () {
    popup.style.display = 'none';
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            checked = radioButtons[i].value;
            clicked.style.backgroundColor = fit(checked);
            spanContext[clicked.value] = textarea.value;
            break;
        }
    }

});







