const mobile_nav = document.querySelector('.nav_mobile');
mobile_nav.style.display = 'none';
function navBar() {
    mobile_nav.style.display = 'flex';
    mobile_nav.animate([
        {transform: 'translateX(100%)'},
        {transform: 'translateX(0)'}
    ], {
        duration: 200
    });
}
function navHide() {
    mobile_nav.style.display = 'none';
}