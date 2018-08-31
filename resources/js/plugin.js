/**
 * Parallax Scrolling
 */
var parallaxImgSection = document.querySelectorAll('.danzerpress-section .danzerpress-parallax'),
    parallaxImgTitle = document.querySelector('.danzerpress-title-area .danzerpress-parallax');

parallaxImgSection.forEach(parallaxImg => {
    document.addEventListener("scroll", () => {
        console.log(parallaxImg.closest('.danzerpress-section'));
        parallax(parallaxImg, parallaxImg.closest('.danzerpress-section'));
    });
});

if (parallaxImgTitle) {
    document.addEventListener("scroll", () => {
        parallax(parallaxImgTitle, parallaxImgTitle.closest('.danzerpress-title-area'));
    });
} 

function parallax(parallaxImg, sectionParent) {
    var sectionParentTop = getElementOffset(sectionParent),
        parentOffsetBottom = sectionParentTop + sectionParent.offsetHeight;
        console.log(sectionParentTop);
    if (window.pageYOffset > sectionParentTop && window.pageYOffset < parentOffsetBottom) {
        parallaxImg.style.transform = 'translate3d(0, ' + ((window.pageYOffset - sectionParentTop) * .2) + 'px, 0)';
    }
}

function getElementOffset(el) {
    let top = 0;
    let element = el;
  
    // Loop through the DOM tree
    // and add it's parent's offset to get page offset
    do {
      top += element.offsetTop || 0;
      element = element.offsetParent;
    } while (element);
  
    return top;
  }