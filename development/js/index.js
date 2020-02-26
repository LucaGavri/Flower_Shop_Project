//zmiejszanie headera po scrollu

const header = document.querySelector("header");


function widthForHeader(){
    if(window.innerWidth > 750){
        window.onscroll = function () {
            headerScroll();
        };
        function headerScroll() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                header.style.height = "50px";
            } else {
                header.style.height = "80px";
            }
        }
        headerScroll();
    }
    else {
        header.style.height = "50px";
    }
}
widthForHeader();

//animacja i rozwijanie menu burgera
const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.headerNavigationMobile');

burger.addEventListener('click', function (e) {
    e.preventDefault();
    burger.classList.toggle('activeBurger');

    if (burger.classList.contains('activeBurger')) {
        navMobile.style.top = "50px";
    } else {
        navMobile.style.top = "100vh";
    }
});

//slider

let myIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("sliderText");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 6000);
}
