
function animation(){
    const emoji= document.getElementById('emoji');
    const btn10= document.getElementsByClassName('bt10');
        emoji.innerText=String.fromCodePoint(0x1F495,0x1F60A);
        emoji.classList.add('btn10animation');
       
}
function clearEmoji(){
    document.getElementById('emoji').innerText='';
    document.getElementById('emoji').classList.remove('btn10animation')
}