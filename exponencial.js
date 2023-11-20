const tamanho = 30;
let lambda = 1;

function resultado_exponencial(x, lambda){
    return lambda*Math.E**(-lambda*x);
}

function soma_cumulativa(x, lambda){
    return 1-Math.E**(-lambda * x);
}

function inversa_funcao_densidade(probabilidade, lambda){
    const x = (Math.log(1-probabilidade)/Math.log(Math.E))/(-lambda);
    return x;
}

console.log("Probabilidade de 2 com lambda 3: " +soma_cumulativa(3, 0.1));
console.log("Inversa: ", inversa_funcao_densidade(soma_cumulativa(3, 0.1), 0.1).toFixed(2));

var desenho = null;

function desenhar_exponencial(lambda){
    if(lambda && Number(lambda) == lambda){
        //Calculando a distribuição de massa e de densidade
        let valoresX = [];
        let valoresY = [];
        let valoresCumulativos = [];

        //Monta a lista com os valores de x e y
        if(lambda <=6){
            for(let i=0; i<tamanho; i++){
                valoresX.push(i/4);
                valoresY.push(resultado_exponencial(i/4, lambda));
                valoresCumulativos.push(soma_cumulativa(i/4, lambda));
                }
        }
        else if(lambda <= 25){
            for(let i=0; i<tamanho; i++){
                valoresX.push(i/10);
                valoresY.push(resultado_exponencial(i/10, lambda));
                valoresCumulativos.push(soma_cumulativa(i/10, lambda));
                }
        }
        else{
            for(let i=0; i<tamanho; i++){
                valoresX.push(i/20);
                valoresY.push(resultado_exponencial(i/20, lambda));
                valoresCumulativos.push(soma_cumulativa(i/20, lambda));
                }
        }
        

        //Limpa o chart anterior caso exista
        if(desenho != null){
            desenho.destroy();
        }

        //Desenha um chart na tela
        desenho = new Chart("myChart", {
        type: "line",
        data: {
            labels: valoresX,
            datasets: [{
                label: "Função de Densidade",
                data: valoresY,
                borderColor: "red",
                fill: false
            },
            { 
            label: "Função de Massa",
            data: valoresCumulativos,
            borderColor: "blue",
            fill: false
            }]
        }
        });
    }

    //Atualizar as informaçẽos úteis
    const informacoes_uteis = document.getElementById("informacoes");
    if(informacoes_uteis == null){
        alert("Algo está errado");
    }
    else{
        document.getElementById("mostrar_lambda").textContent = "λ = " + lambda;
        document.getElementById("prob1").textContent = "P(X≤x)=68.27% ⇒ x=" + inversa_funcao_densidade(0.6827, lambda).toFixed(3);
        document.getElementById("prob2").textContent = "P(X≤x)=95.45% ⇒ x=" + inversa_funcao_densidade(0.9545, lambda).toFixed(3);
        document.getElementById("prob3").textContent = "P(X≤x)=99.70%  ⇒ x=" + inversa_funcao_densidade(0.997, lambda).toFixed(3);
    }
}

desenhar_exponencial(1);

document.getElementById("lambda").addEventListener("keyup", ()=>{
    desenhar_exponencial(document.getElementById("lambda").value);
});

document.getElementById("lambda").addEventListener("click", ()=>{
    desenhar_exponencial(document.getElementById("lambda").value);
});