document.querySelector('#btn-contato').addEventListener('click', () => {
    const msg = document.getElementById('mensagem');
    let html = `
    <div class="msg-enviada-ok">
        MENSAGEM ENVIADA COM SUCESSO
    </div>
`
    msg.insertAdjacentHTML("afterend", html);

    let banner = document.querySelector('.msg-enviada-ok');

    setTimeout(() => {
        banner.remove();
    }, 3000);
});