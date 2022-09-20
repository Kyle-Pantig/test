//function move() {
    //var x = Math.floor(Math.random() * 800);
    //var y = Math.floor(Math.random() * 800);
    //document.getElementById("btn2").style.top = x + 'px';
    //document.getElementById("btn2").style.right = y + 'px';
    //}
function show(){
    document.getElementById('q').style.display='none'
    document.getElementById('btn1').style.display='none'
    document.getElementById('btn2').style.display='none'
    document.getElementById('msg').style.display='block'
    document.getElementById('aud').style.display='none'
    document.getElementById('gif').style.display='block'
    }

let btn2 = document.getElementById("btn2");
let position;
    btn2.addEventListener("mouseover", () =>{
        position = position ? 0 : 100;
        btn2.style.transform = "translate(" + position + 'px, 0px)';
    });