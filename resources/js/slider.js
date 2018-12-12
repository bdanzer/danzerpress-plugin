class Slider {
    constructor() 
    {
        this.height = 0;
        this.sliderNumber = 3;
        this.sliderWrap = document.querySelector('.danzerpress-slider-wrap');
        this.slider = document.querySelector('.danzerpress-slider');

        if (!this.slider) {
            return;
        }
        this.createPagination();
        this.handleSlider();   
    }

    createPagination()
    {
        let sliderPagination = `
            <div class="danzerpress-slider-pagination">
                <ul>
                </ul>
            </div>
        `;

        let doc = new DOMParser().parseFromString(sliderPagination, 'text/html').body.firstChild;
        for (let i = 0; i < this.slider.children.length; i++) {

            if (i > this.sliderNumber) {
                let button = document.createElement('li');
                doc.children[0].append(button);
                button.classList.add('active');

                button.addEventListener('click', (e) => {
                    let activeDiv = document.querySelectorAll('.danzerpress-slider div.active');
                    let activeLi = document.querySelectorAll('.danzerpress-slider-pagination ul li');

                    this.setActiveStuff(activeDiv);
                    this.setActiveStuff(activeLi);

                    e.target.classList.add('active');
                });
            }
        }
        this.sliderWrap.append(doc);
    }

    handleSlider() 
    {
        for (let i = 0; i < this.slider.children.length; i++) {        
            let child = this.slider.children[i];
            let itemHeight = child.offsetHeight;

            if (itemHeight > this.height) {
                this.height = itemHeight;
            }

            child.style.position = 'absolute';
            child.classList.add('slider-child');
            child.classList.add('active');
        }
        this.slider.style.height = this.height + 'px';
    }

    setActiveStuff(thing) 
    {
        if (thing) {
            thing.forEach((div) => {
                div.classList.remove('active');
            });
        }
    }
}
new Slider();