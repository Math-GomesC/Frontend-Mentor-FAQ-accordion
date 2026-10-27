let BotaoMaisMenos = document.querySelectorAll(".Botao-mais");
let Paragrafos = document.querySelectorAll(".Perguntas-e-Respostas__Perguntas-Paragrafo")
BotaoMaisMenos.forEach((Botao) => {
    Botao.addEventListener("click", () => {
            Botao.getAttribute("src")
        if(Botao.getAttribute("src") === "assets/images/icon-plus.svg"){
            Botao.src = "assets/images/icon-minus.svg" //MOSTRA
            Paragrafos.forEach((Paragrafo) => {
                if(Paragrafo.id == Botao.id){
                    Paragrafo.style.display: "block";
                }
            })
            console.log(Botao.id)
        }else{
            Botao.src = "assets/images/icon-plus.svg" //FECHA
            
            console.log(Botao.id)
        }
    }
)})
