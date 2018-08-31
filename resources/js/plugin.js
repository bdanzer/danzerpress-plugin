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
    var parentOffsetBottom = sectionParent.offsetTop + sectionParent.offsetHeight;
    console.log(window.pageYOffset);
    console.log(parentOffsetBottom);
    if (window.pageYOffset > sectionParent.offsetTop && window.pageYOffset > parentOffsetBottom) {
        parallaxImg.style.transform = 'translate3d(0, ' + ((window.pageYOffset - parentOffsetBottom) * .2) + 'px, 0)';
    }
}