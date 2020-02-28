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
    setTimeout(carousel, 3000);
}
