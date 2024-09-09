const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1;
};


function lampOn(){
    if(!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
};

function lampOff(){
    if(!isLampBroken ()) {
        lamp.src =  './img/desligada.jpg';
    }
};

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff() {
    if(turnOnOff.textContent === 'ON'){
        lampOn();
        turnOnOff.textContent = 'OFF';
        turnOnOff.style.backgroundColor = 'red';
    } else {
        lampOff();
        turnOnOff.textContent = 'ON';
        turnOnOff.style.backgroundColor = 'green';
    }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);