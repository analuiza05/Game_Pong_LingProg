var nivelDificuldade = Number(window.prompt("Qual a dificuldade você gostaria de jogar? Responda de 1 a 9."));

var largura = 600;
var altura = 400;

var corTabuleiro = "#3792d4";

var corBolinha = 0;
var xBolinha = 300;
var yBolinha = 200;
var dBolinha = 20;
var rBolinha = dBolinha/2;

var velocidadeXBolinha = nivelDificuldade * 2;
var velocidadeYBolinha = nivelDificuldade * 2;

var aRaquete = 150;
var lRaquete = 10;
var vRaquete = nivelDificuldade * 1.5;

var xRaqueteEsquerda = 10;
var yRaqueteEsquerda = ((altura/2) - (aRaquete/2));

var xRaqueteDireita = largura - xRaqueteEsquerda - lRaquete;
var yRaqueteDireita = ((altura/2) - (aRaquete/2));

var pontosEsquerda = 0
var pontosDireita = 0

function setup() {
  createCanvas(largura, altura);
}

function criarTabuleiro(corTabuleiro){
  background(corTabuleiro);
}

function criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha){
  circle(xBolinha, yBolinha, dBolinha);
  fill(corBolinha);
}

function criarRaqueteEsquerda(xRaqueteEsquerda, yRaqueteEsquerda, lRaquete, aRaquete){
  rect(xRaqueteEsquerda, yRaqueteEsquerda, lRaquete, aRaquete);
  
}

function criarRaqueteDireita(xRaqueteDireita, yRaqueteDireita, lRaquete, aRaquete){
  rect(xRaqueteDireita, yRaqueteDireita, lRaquete, aRaquete);
  }

function movimentarBolinha(){
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}

function movimentarRaqueteEsquerda(){
  if (keyIsDown(87)){
    if(yRaqueteEsquerda >= 0){
      yRaqueteEsquerda = yRaqueteEsquerda - vRaquete;
    }
  }
  if (keyIsDown(83)){
    if (yRaqueteEsquerda <= (altura - aRaquete)){
      yRaqueteEsquerda = yRaqueteEsquerda + vRaquete;
    }
  }
}

function movimentarRaqueteDireita(){
  if (keyIsDown(UP_ARROW)){
    if(yRaqueteDireita >= 0){
      yRaqueteDireita = yRaqueteDireita - vRaquete;
    }
  }
  if (keyIsDown(DOWN_ARROW)){
    if (yRaqueteDireita <= (altura - aRaquete)){
      yRaqueteDireita = yRaqueteDireita + vRaquete;
    }
  }
}

function verificarColisaoBolinhaParede(){
  if (yBolinha >= (altura - rBolinha) || yBolinha < rBolinha){
    velocidadeYBolinha = - velocidadeYBolinha;
    }
}

function verificarColisaoBolinhaRaquete(){
  if(xBolinha-rBolinha>=(xRaqueteEsquerda-lRaquete) && xBolinha-rBolinha<=xRaqueteEsquerda) {
   if(yBolinha>=(yRaqueteEsquerda) && yBolinha<=yRaqueteEsquerda+aRaquete) {
     velocidadeXBolinha = - velocidadeXBolinha;
     xBolinha = xRaqueteEsquerda + lRaquete + 1 + rBolinha;
   }
  }
     if(xBolinha+rBolinha>=(xRaqueteDireita) && xBolinha+rBolinha<=xRaqueteDireita+lRaquete || xBolinha+rBolinha>=(xRaqueteDireita) && xBolinha-rBolinha<=xRaqueteDireita+lRaquete ) {
      if(yBolinha>=(yRaqueteDireita) && yBolinha<=yRaqueteDireita+aRaquete) {
        velocidadeXBolinha = - velocidadeXBolinha;
        xBolinha = xRaqueteDireita - 1 - rBolinha;
      }
    }
}

function incluirPlacar(){
textSize(22);
text("Player 1: "+ pontosEsquerda + " | Player 2: " + pontosDireita, (largura/2)-110, 22);
}

function resetarBolinha(){
  if(xBolinha>=(largura-rBolinha)){
    xBolinha = 300;
    yBolinha = 200;
    pontosEsquerda = pontosEsquerda  + 1;
  }
  if(xBolinha<=rBolinha){
    xBolinha = 300;
    yBolinha = 200;
    pontosDireita = pontosDireita + 1;
  }
}

function draw() {
  criarTabuleiro(corTabuleiro);
  criarBolinha(xBolinha, yBolinha, dBolinha, corBolinha);
  criarRaqueteEsquerda(xRaqueteEsquerda, yRaqueteEsquerda, lRaquete, aRaquete);
  criarRaqueteDireita(xRaqueteDireita, yRaqueteDireita, lRaquete, aRaquete);
  verificarColisaoBolinhaParede();
  movimentarBolinha();
  movimentarRaqueteEsquerda();
  movimentarRaqueteDireita();
  verificarColisaoBolinhaRaquete();
  resetarBolinha();
  incluirPlacar();
}

// Ana Luiza         número:2 
// Turma: 35-DS