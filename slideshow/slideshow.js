var play=document.getElementsByClassName("playBtn")[0];
var stopPic=document.getElementsByClassName("stopBtn")[0];
var nxt=document.getElementsByClassName("nextBtn")[0];
var prev=document.getElementsByClassName("prevBtn")[0];
var nxtSymbol=document.getElementsByClassName("symbol_NextvBtn")[0];
var prevSymbol=document.getElementsByClassName("symbol_PrevBtn")[0];
var count=0;
var images=["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
function imgNext(){
count++;
if(count>3){
    count=0;}
var chImg = document.getElementById("myImg").src=images[count];
}
nxt.addEventListener("click", imgNext);
nxtSymbol.addEventListener("click", imgNext);
var picos;
function imgPrev(){
    count--;
    if(count<0){
        count=3;}
    var chImg2 = document.getElementById("myImg").src=images[count];
    }
    prev.addEventListener("click", imgPrev);
    prevSymbol.addEventListener("click", imgPrev);

    play.addEventListener("click", function(){
        picos=setInterval(imgNext,1000)
    })

    stopPic.addEventListener("click", function(){
        clearInterval(picos)
    })