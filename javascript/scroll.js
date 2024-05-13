

window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.offsetHeight;

    var footerHeight = footer.offsetHeight;

    
    if (scrollPosition + windowHeight >= documentHeight - footerHeight) {
        footer.style.transform = 'translateY(0%)'; 
    } else {
        footer.style.transform = 'translateY(100%)'; 
    }
});

