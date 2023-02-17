let likes = document.querySelector('.bi-hand-thumbs-up');
let txtContaLikes = document.querySelector('.conta-likes');
let qtdLikes = parseInt(txtContaLikes.textContent);


likes.addEventListener('click',function(){
    qtdLikes++;
    txtContaLikes.innerHTML = qtdLikes;
});