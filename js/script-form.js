function validaCampos(campos){
    
    for (const iterator of campos) {
        if(iterator.value === ""){
            return false;
        }
    }
    return true;
}

function limpaCampos(campos){
    for (const iterator of campos) {
        iterator.value = "";
    }
}

let campos = document.querySelectorAll('.input-contato');
let btn = document.querySelector('#btn-contato');


btn.addEventListener('click', (event) => {

    if(validaCampos(campos)){
        const msg = document.getElementById('mensagem');
        let html = `
        <div class="msg-enviada-ok">
            MENSAGEM ENVIADA COM SUCESSO.
        </div>
        `
        msg.insertAdjacentHTML("afterend", html);
    
        let banner = document.querySelector('.msg-enviada-ok');
    
        setTimeout(() => {
            banner.remove();
            limpaCampos(campos);
        }, 3000);
    } else{
        const msg = document.getElementById('mensagem');
        let html = `
            <div class="msg-nao-enviada">
                TODOS OS CAMPOS PRECISAM SER PREENCHIDOS.
            </div>
        `
        msg.insertAdjacentHTML("afterend", html);
    
        let banner = document.querySelector('.msg-nao-enviada');
    
        setTimeout(() => {
            banner.remove();
        }, 3000);
    }
});