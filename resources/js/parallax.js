class Parallax {
    constructor() 
    {
        this.parallaxItems = document.querySelectorAll('.danzerpress-parallax');
        this.navHeight = document.querySelector('header').offsetHeight;
        this.init();
    }

    init() 
    {
        document.addEventListener('scroll', () => {
            window.requestAnimationFrame(() => {
                this.scrollHandler()
            });
        });
    }

    getElementOffset(el) {
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

    scrollHandler() 
    {
        this.parallaxItems.forEach(parallaxItem => {
            var sectionParent = parallaxItem.parentElement,
                sectionParentTop = this.getElementOffset(sectionParent),
                parentOffsetBottom = sectionParentTop + sectionParent.offsetHeight,
                windowHeightNav = (this.getElementOffset(parallaxItem) !== 0) ? window.pageYOffset + this.navHeight : window.pageYOffset;
    
            if (windowHeightNav > sectionParentTop && windowHeightNav < parentOffsetBottom) {
                parallaxItem.style.transform = 'translate3d(0, ' + ((windowHeightNav - sectionParentTop) * .6) + 'px, 0)';
            } else {
                parallaxItem.style.transform = 'translate3d(0, 0px, 0)';
            }
        });
    }
}

new Parallax();