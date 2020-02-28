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
