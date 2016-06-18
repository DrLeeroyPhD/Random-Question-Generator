var button = document.getElementById('next');


// Color Changing Goodness!!!
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
}

getRandomColor();


var xmlhttp = new XMLHttpRequest();
var url = "json/questions.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var questions = JSON.parse(xmlhttp.responseText);
        
        button.onmousedown = function(){
            var number = Math.floor(Math.random() * questions.general.length);
            var random = questions.general[number];
            document.getElementById('display').innerHTML=random;
            getRandomColor();
        }
        
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
