
var x,score=0;

function number(){
    x=Math.floor(Math.random()*16);
}
var time=60;
document.getElementById("c").innerText="Time left : "+time;
var timestop=setInterval(function(){ document.getElementById("c").innerText="Time left : "+time;time--; 
if(time<0)
clearInterval(timestop);
}, 1000);

document.getElementById("s").innerText="Score : "+score;

var stop=setInterval(function(){ 
    number();
    document.getElementById("i"+(x+1).toString()).style.display="block";
    setTimeout(function(){ 
        
        document.getElementById("i"+(x+1).toString()).style.display="none";
    }, 500);
    if(time<0)
    clearInterval(stop);
}, 800);



document.querySelector("#a1").addEventListener("click",function(){

    
    if(document.getElementById("i1").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a2").addEventListener("click",function(){

    
    if(document.getElementById("i2").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a3").addEventListener("click",function(){

    
    if(document.getElementById("i3").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a4").addEventListener("click",function(){

    
    if(document.getElementById("i4").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a5").addEventListener("click",function(){

    
    if(document.getElementById("i5").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a6").addEventListener("click",function(){

    
    if(document.getElementById("i6").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a7").addEventListener("click",function(){

    
    if(document.getElementById("i7").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a8").addEventListener("click",function(){

    
    if(document.getElementById("i8").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a9").addEventListener("click",function(){

    
    if(document.getElementById("i9").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a10").addEventListener("click",function(){

    
    if(document.getElementById("i10").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a11").addEventListener("click",function(){

    
    if(document.getElementById("i11").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a12").addEventListener("click",function(){

    
    if(document.getElementById("i12").style.display=="block")
    {
     score++;}
     console.log(score);
     document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a13").addEventListener("click",function(){

    
    if(document.getElementById("i13").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a14").addEventListener("click",function(){

    
    if(document.getElementById("i14").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a15").addEventListener("click",function(){

    
    if(document.getElementById("i15").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});

document.querySelector("#a16").addEventListener("click",function(){

   
    if(document.getElementById("i16").style.display=="block")
    {
    score++;}
    console.log(score);
    document.getElementById("s").innerText="Score : "+score;
});


