const sobra = 10; //Serve para dar um espaco entre as bordas do canvas
let loop_um = 0;

function setup(){
    createCanvas(1020, 450);
    textSize(10);
    textAlign(CENTER, CENTER);
    width -= sobra;
    height -= sobra;
}

function quadrado(umX, umY, doisX, doisY, tresX, tresY, quatroX, quatroY){
    line(umX, umY, doisX, doisY);
    line(doisX, doisY, tresX, tresY);
    line(tresX, tresY, quatroX, quatroY);
    line(umX, umY, quatroX, quatroY);
}

function verificar_alinhamento(){
    fill("green");
    stroke("green");
    line(0, 0, width+sobra, height+sobra);
    line(0, height+sobra, width+sobra, 0);

    quadrado(sobra, sobra, sobra, height, width, height, width, sobra);
}

function cartesiano(){
    line(sobra, height/2, width, height/2);
    line(width/2, sobra, width/2, height);

    tracejar(sobra, height/2, true);
    tracejar(width, height/2, true);
    for(let i=width/8; i<width; i += width/8){
        console.log(i);
        tracejar(i, height/2, true);
    }

    //tracejar(width/2, sobra, false);
    //tracejar(width/2, height, false);
    for(let i=sobra/2; i<=height; i+=height/4){
        console.log(i);
        tracejar(width/2, i, false);
    }
}

function tracejar(centroX, centroY, vertical){
    const tamLinha = 5;
    
    //desenha no eixo X
    if(vertical){
        line(centroX, centroY-tamLinha, centroX, centroY+tamLinha);
    }

    //desenha no eixo Y
    else{
        line(centroX-tamLinha, centroY, centroX+tamLinha, centroY);
    }
}

function draw(){
    if(loop_um == 0){
        background(0);

        fill("blue");
        stroke(255);
        ellipse((sobra+width)/2, (sobra+height)/2, 4);

        fill("red");
        stroke(255);
        ellipse(width/2, height/2, 4);

        fill(255);
        
        cartesiano();

        verificar_alinhamento();
        /*
        text('23', 0.75 * width, height/2-10);
        tracejar(0.75 * width, height/2, true);
        tracejar(width/2, 0.75 *height, false);
        */

        

        loop_um = 1;
    }
}