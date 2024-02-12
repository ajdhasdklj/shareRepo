function randomNumber(){
    var number = Math.random() * (100000 - 0) + 0;
    document.getElementById('numberText').textContent = number;
}
