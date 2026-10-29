let Questoes = document.querySelectorAll(".Perguntas-e-Respostas__Perguntas");

Questoes.forEach((Questao) =>{
    Questao.addEventListener("click", () => {
            let IconeMaisMenos = Questao.querySelector("img");
            let CaminhoIcone = IconeMaisMenos.getAttribute("src");
            let Paragrafo = Questao.nextElementSibling;
        if(CaminhoIcone == "assets/images/icon-plus.svg"){ //abre
            IconeMaisMenos.src = "assets/images/icon-minus.svg"
            Paragrafo.style.display = "block"
        }else{ //fecha
            IconeMaisMenos.src = "assets/images/icon-plus.svg"
            Paragrafo.style.display = "none"
        }
    })
})