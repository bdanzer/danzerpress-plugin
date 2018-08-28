var parallaxImg = document.getElementById('parallax-img'),
    sectionParent = parallaxImg.closest('.danzerpress-section');

document.addEventListener("scroll", function() {
    if (window.pageYOffset < sectionParent.offsetHeight) {
        parallaxImg.style.transform = 'translate(0, '+(window.pageYOffset * .2)+'px)';
    }
});