function playClick() {
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0; // reset biar bisa klik cepat2
    sound.play();
}

function playTombol() {
    const sound = document.getElementById("clickSoundSamaDengan");
    sound.currentTime = 0; // reset biar bisa klik cepat2
    sound.play();
}


function appenValue(value){
    playClick();
    document.getElementById('display').value += value;
}


function clearDisplay(){
    playClick();
    document.getElementById('display').value = '';
}


function calculate(){
    playTombol()
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = 'error';
    }
}