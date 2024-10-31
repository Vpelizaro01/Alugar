let jogosAlugados= 0;

function aluguel(){
    console.log(`Total de jogos alugados; ${jogosAlugados}`)
}

function alterarStatus(id){
    let jogo1 = document.getElementById(`game-${id}`);
    let imagem = jogo1.querySelector(".dashboard__item__img");
    let botao = jogo1.querySelector(".dashboard__item__button");
    let nome = jogo1.querySelector(".dashboard__item__name");

    if (imagem.classList.contains('dashboard__item__img--rented')){
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nome.textContent}?`)){
         imagem.classList.remove('dashboard__item__img--rented');
         botao.classList.remove('dashboard__item__button--return');
         botao.textContent = 'Alugar';
         jogosAlugados--;
        }
        }else{ 

        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }
  aluguel();
}

document.addEventListener("DOMContentLoaded",function(){
 jogosAlugados=document.querySelectorAll(".dashboard__item__img--rented").length;
 aluguel();
});
