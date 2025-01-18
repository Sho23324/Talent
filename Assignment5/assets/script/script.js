document.addEventListener("DOMContentLoaded", function() {
            
    let menuBar = document.getElementById("menu-bar");
    let menu = document.getElementById('menu');
    let nav = document.querySelector('nav');
    let n=0;
        menuBar.addEventListener('click', function() {
            if(n == 0) {
                menu.style.display = "block";
                nav.style.flexDirection = "column";
                n=1;
            }else {
                menu.style.display = "none";
                n=0;
            }
        });
    });

    let playBtn = document.getElementById('play-btn');
    let box = document.getElementById('box');
    let x = 0;
    playBtn.addEventListener('click', function() {
        if(x == 0) {
            box.style.display = "block";
            x=1;
        }else {
            box.style.display = "none";
            x=0;
        }
    });
    function closeBox() {
        box.style.display = "none";
    };
    function show() {

    };