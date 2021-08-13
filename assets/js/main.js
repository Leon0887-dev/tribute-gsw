window.onload = function (){
    document.querySelector('.menumobile').addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex'){
            document.querySelector('.menu nav ul').style.display = 'none';
        }else {
            document.querySelector('.menu nav ul').style.display = 'flex';
        }
    })
}

function subirTela(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

function decidirBotao(){
    if (window.scrollY === 0){
        document.querySelector('.rolagem').style.display = 'none';
    }else {
        document.querySelector('.rolagem').style.display = 'block';
    }
}

window.addEventListener('scroll', decidirBotao)
