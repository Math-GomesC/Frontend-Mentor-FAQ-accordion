let BotaoMaisMenos = document.querySelectorAll(".Botao-mais");
let Paragrafos = document.querySelectorAll(".Perguntas-e-Respostas__Perguntas-Paragrafo")
let SubTitulos = document.querySelectorAll("h2")

SubTitulos.forEach((SubTitulo) => {
   
})

BotaoMaisMenos.forEach((Botao) =>{
    
})




function MostrarFecharAbaDeDuvida(){
    BotaoMaisMenos.forEach((Botao) => {
        Botao.addEventListener("click", () => {
            if(Botao.getAttribute("src") === "assets/images/icon-plus.svg"){ //MOSTRA ABA
                Botao.src = "assets/images/icon-minus.svg" 
                Paragrafos.forEach((Paragrafo) => {
                    if(Paragrafo.id == Botao.id){
                        Paragrafo.style.display = "block";
                    }
                })
            }else{ //FECHA ABA
                Botao.src = "assets/images/icon-plus.svg" 
                Paragrafos.forEach((Paragrafo) => {
                    if(Paragrafo.id == Botao.id){
                        Paragrafo.style.display = "none";
                    }
                })
            }
        }
    )})
}
