/**
 * Parallax Scrolling
 */
var parallaxImgSection = document.querySelectorAll('.danzerpress-section .danzerpress-parallax'),
    parallaxImgTitle = document.querySelector('.danzerpress-title-area .danzerpress-parallax');

parallaxImgSection.forEach(parallaxImg => {
    document.addEventListener("scroll", () => {
        parallax(parallaxImg, parallaxImg.closest('.danzerpress-section'));
    });
});

if (parallaxImgTitle) {
    document.addEventListener("scroll", () => {
        parallax(parallaxImgTitle, parallaxImgTitle.closest('.danzerpress-title-area'));
    });
} 

function parallax(parallaxImg, sectionParent) {
    if ((window.pageYOffset < (sectionParent.offsetHeight + sectionParent.offsetTop)) && (window.pageYOffset > sectionParent.offsetTop)) {
        parallaxImg.style.transform = 'translate3d(0, ' + ((window.pageYOffset - sectionParent.offsetTop) * .2) + 'px, 0)';
    }
}