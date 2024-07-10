document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



let scrollTopBtn = document.getElementById("scrollTopBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
