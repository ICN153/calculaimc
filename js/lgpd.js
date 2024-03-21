
//selecionar os elementos que serão manipulados pelo javascript
let lgpd = document.querySelector('.lgpd');
let btnLgpd = document.querySelector('.lgpd button');


//console.log(lgpd);
//console.log(btnLgpd);

//Se o usuário já fechou a lgpd (tem a informação guardada no storage)
// se a informação guardada no storage é igual (==) a 'sim'
if (localStorage.getItem('fechouLgpd') == 'sim') {
    lgpd.style.display = 'none';
}

//Associando o evento de click ao botão da lgpd

btnLgpd.addEventListener('click', function () {
    //alert('ok');

    lgpd.style.display = 'none';

    // Além de fechar, vamos guardar uma informação no navegador do usuário

    localStorage.setItem('fechouLgpd', 'sim');


})