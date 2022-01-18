const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isquebrada() {
  return lamp.src.indexOf("quebrada") > -1;
}

function ligada() {
  if (!isquebrada()) {
    lamp.src = "ligada.jpeg";
  }
}

function desligada() {
  if (!isquebrada()) {
    lamp.src = "desligada.jpeg";
  }
}

function quebrada() {
  lamp.src = "quebrada.jpeg";
}

turnOn.addEventListener("click", ligada);
turnOff.addEventListener("click", desligada);
lamp.addEventListener("mouseover", ligada);
lamp.addEventListener("mouseleave", desligada);
lamp.addEventListener("dblclick", quebrada);
