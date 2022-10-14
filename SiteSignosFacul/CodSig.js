let dianascimento1 = document.querySelector('input#dianascimento');
let mesnascimento1 = document.querySelector('input#mesnascimento');
let divcentro = document.querySelector('section#divcentral');
let imagem = document.querySelector('img#imagem');

function verificarsignos(){
    let dianascimento = Number(dianascimento1.value);
    let mesnascimento = Number(mesnascimento1.value);

    if ((dianascimento >= 22 && dianascimento <= 31 && mesnascimento == 1) || (dianascimento >= 1 && dianascimento <= 19 && mesnascimento == 2)){
        imagem.src = 'imagens/aquario.png'
    }else if((dianascimento >= 20 && dianascimento <= 28 && mesnascimento == 2) || (dianascimento >= 1 && dianascimento <= 20 && mesnascimento == 3)){
        imagem.src ='imagens/peixes.png'
    }else if((dianascimento >= 21 && dianascimento <= 31 && mesnascimento == 3) || (dianascimento >= 1 && dianascimento <= 20 && mesnascimento == 4)){
        imagem.src ='imagens/aries.png'
    }else if((dianascimento >= 21 && dianascimento <= 30 && mesnascimento == 4) || (dianascimento >= 1 && dianascimento <= 20 && mesnascimento == 5)){
        imagem.src ='imagens/touro.png'
    }else if((dianascimento >= 21 && dianascimento <= 31 && mesnascimento == 5) || (dianascimento >= 1 && dianascimento <= 20 && mesnascimento == 6)){
        imagem.src ='imagens/gemeos.png'
    }else if((dianascimento >= 21 && dianascimento <= 30 && mesnascimento == 6) || (dianascimento >= 1 && dianascimento <= 21 && mesnascimento == 7)){
        imagem.src ='imagens/cancer.png'
    }else if((dianascimento >= 22 && dianascimento <= 31 && mesnascimento == 7) || (dianascimento >= 1 && dianascimento <= 22 && mesnascimento == 8)){
        imagem.src ='imagens/leao.png'
    }else if((dianascimento >= 23 && dianascimento <= 31 && mesnascimento == 8) || (dianascimento >= 1 && dianascimento <= 22 && mesnascimento == 9)){
        imagem.src ='imagens/virgem.png'
    }else if((dianascimento >= 23 && dianascimento <= 30 && mesnascimento == 9) || (dianascimento >= 1 && dianascimento <= 22 && mesnascimento == 10)){
        imagem.src ='imagens/libra.png'
    }else if((dianascimento >= 23 && dianascimento <= 31 && mesnascimento == 10) || (dianascimento >= 1 && dianascimento <= 21 && mesnascimento == 11)){
        imagem.src ='imagens/escorpiao.png'
    }else if((dianascimento >= 22 && dianascimento <= 30 && mesnascimento == 11) || (dianascimento >= 1 && dianascimento <= 21 && mesnascimento == 12)){
        imagem.src ='imagens/sargitario.png'
    }else if((dianascimento >= 22 && dianascimento <= 31 && mesnascimento == 12) || (dianascimento >= 1 && dianascimento <= 21 && mesnascimento == 1)){
        imagem.src ='imagens/capricornio.png'
    }
}