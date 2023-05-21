function responsiveNavbar() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.addEventListener('scroll', function () {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("name").style.fontSize = "70px";
        document.getElementById("photos").style.padding = "14px 16px";
        document.getElementById("about").style.padding = "14px 60px 14px 0px";
    } else if (window.innerWidth > 1630) {
        document.getElementById("name").style.fontSize = "250px";
        document.getElementById("photos").style.padding = "60px 16px";
        document.getElementById("about").style.padding = "60px 60px 60px 0px";
    }

});

const icon = document.querySelector('.icon');
icon.addEventListener("click", responsiveNavbar);



