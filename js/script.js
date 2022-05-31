const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const botao = document.querySelector('.restart');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 90){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px'; 
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10);

const restart = () => {
    mario.src = './img/mario.gif';
    mario.style.width = '150px'; 
    mario.style.marginLeft = '0';
    mario.style.bottom = '0';
    mario.style.animation = null;

    
    pipe.style.right = '100%';
}

botao.addEventListener('click', restart);
document.addEventListener('keydown', jump);