const backgroundChange = document.querySelector('#button-background-change');
const buttonAlert = document.querySelector('#button-alert');
const buttonText = document.querySelector('#button-text-change');
const buttonColor = document.querySelector('#button-color-change');
const buttonScroll = document.querySelector('#button-scroll')
const buttonTilt = document.querySelector('#button-tilt');
const buttonHide = document.querySelector('#button-hider')
const buttonReloader = document.querySelector('#button-reloader')
const buttonBacker = document.querySelector('#button-back')
const buttonConfirmer = document.querySelector('#button-confirmer')
const buttonOpenWinner = document.querySelector('#button-opener')
const buttonTimer = document.querySelector('#button-timer')
const buttonLeft = document.querySelector('#button-left')
const buttonCenter = document.querySelector('#button-center')

const body = document.body;



backgroundChange.addEventListener('click', colorChange);
buttonAlert.addEventListener('click', showAlert);
buttonColor.addEventListener('click', textChange);
buttonText.addEventListener('click', textEnlarge);
buttonScroll.addEventListener('click', buttScroll);
buttonHide.addEventListener('click', buttonHider)
buttonReloader.addEventListener('click', buttonReload)
buttonBacker.addEventListener('click', buttonBack)
buttonConfirmer.addEventListener('click', buttonConfirm)
buttonOpenWinner.addEventListener('click', buttonOpenWin)
buttonTimer.addEventListener('click', buttonBomb)
buttonLeft.addEventListener('click', buttonBomba)
buttonCenter.addEventListener('click', buttonBombas)


function colorChange() {
    body.style.backgroundColor = 'red';
}

function showAlert() {
    alert('Det her er en alert');
}

function textChange() {
    body.style.zoom = '50'
}

function textEnlarge() {
    body.style.fontSize = '2em'
}

function buttScroll() {
    body.style.margin = '2em'
}

function buttonHider() {
    body.style.padding = '2em'
}

function buttonReload() {
    console.error("du grim");

}
function buttonBack() {
    location.reload();

}
function buttonConfirm() {
    confirm("Det her er en 'confirm'");

}

function buttonOpenWin() {
    myWindow = window.open('', '', 'width=400, height=200');
}

function buttonBomb() {
    body.style.float = 'right'
}
function buttonBomba() {
    body.style.float = 'left'

}
function buttonBombas() {
    body.style.scale = '2'
}