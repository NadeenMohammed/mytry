let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountain1 = document.getElementById('mountains1')
let mountain2 = document.getElementById('mountians2')
let rivir = document.getElementById('rivir')
let boat = document.getElementById('boat')
let frontMountain = document.getElementById('frontmountains')


window.onscroll=function(){
    let value=scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*4 + 'px';
    mountain1.style.top = value*1.6 + 'px';
    mountain2.style.top = value*1.1 + 'px';
    rivir.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value*3 + 'px';
    if(scrollY>=127)
        {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#1000f1)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#1000f1)'
        }
}