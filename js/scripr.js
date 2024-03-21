
// Calculando o IMC
// var -> Criar uma variável, pórem, permite que esta seja "redeclarada" podendo causar BUGS
// Não permite que a variavel seja "redeclarada" e só funciona dentro do seu escopo
// const -> semelhante ao let com uma observação: NÃO PODE TER SEU VALOR ALTERADO

//Fórmula do IMC: imc peso / (altura*altura)


const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnCalcular = document.querySelector('#btn-calcular');
const contentIMC = document.querySelector('.content-imc');
const resultIMC = document.querySelector('.result-imc');
const btnResult = document.querySelector('.result-imc button');

const infoResult = document.querySelector('.result-imc h2 span'); //IMC
const infoClass = document.querySelector('.result-imc p span'); //Classificação

function colorIMC(cor){
    infoClass.style.color = cor;
    infoResult.style.color = cor;
}


btnCalcular.addEventListener('click', function () {

    //se peso e altura forem diferentes de vazio
    // == comparação (igualdade)
    // != comparação (diferente)
    // && e
    // || ou


    if (peso.value != '' && altura.value != '') {

        //Alterando a classe "show"
        contentIMC.classList.toggle('show');
        resultIMC.classList.toggle('show');

        let valorPeso = parseFloat(peso.value);
        let valorAltura = parseFloat(altura.value);
        let imc = valorPeso / (valorAltura * valorAltura);
        //alert(imc);

        
        infoResult.innerHTML = imc.toFixed(2);

        if(imc < 18.5){
            infoClass.innerHTML = 'Magreza';
            colorIMC('red');
        }

        else if(imc >= 18.5 && imc <= 24.9){
            infoClass.innerHTML = "Normal";
            colorIMC('green');
        }

        else if(imc >= 25.0 && imc <= 29.9){
            infoClass.innerHTML = "Sobrepeso";
            colorIMC('orange');
        }

        else if(imc >= 30.0 && imc <= 39.9){
            infoClass.innerHTML = "Obesidade";
            colorIMC('red');
        }

        else{
            infoClass.innerHTML = "Obesidade Grave"
            colorIMC('#B10303')
        }

    }

    else {
        alert('Preencha os campos para calcular');
    }

})



//alert('ok');
//Ao clicar no botão de refazer o teste
btnResult.addEventListener('click', function () {

    contentIMC.classList.toggle('show');
    resultIMC.classList.toggle('show');
    
    //Limpando os campos
    peso.value = '';
    altura.value = '';

})


