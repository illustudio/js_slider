class Slider {

    // 생성자 선언
    constructor(wrapper) {
        // 슬라이더 wrapper 선언
        this._wrapper = document.querySelector(wrapper);
        // 자식 요소 배열 생성
        this._children = [];
        this._currentIndex = 0;        

        this._isPause = false;
        
        this.setElements();
        if(!this._isPause){
            this.move();
            console.log(this._isPause);
        } else {
            this.stop();
            console.log(this._isPause);
        }
    }

    setElements() {
        // wrapper 자식 요소를 배열에 삽입
        for (let i = 0; this._wrapper.children.length > i; i++) {
            this._children.push(this._wrapper.children[i]);
        }

        // 자식요소를 감싸는 wrapper 생성
        this._slideWrapper = document.createElement('div');
        this._slideWrapper.className = 'slider-wrapper';

        // slider wrapper에 wrapper의 자식 요소 삽입
        this._slideWrapper.append(...this._wrapper.children);
        // wrapper에 slider wrapper 삽입
        this._wrapper.appendChild(this._slideWrapper);

    }
    move() {
        setInterval(()=>{
            if (this._slideWrapper.children.length - 1 > this._currentIndex) {
                this._currentIndex++;
                this.next();
            } else {
                this._currentIndex = 0;
                this._slideWrapper.style.left = this._currentIndex * 100 +'%';
    
                console.log(this._currentIndex);
            }
        },2000);

    }

    next() {
        this._slideWrapper.style.left = -(100 * this._currentIndex) + '%';
        console.log(this._currentIndex);
    }
    prev() {
        this._slideWrapper.style.left = (100 * this._currentIndex) + '%';
        console.log(this._currentIndex);
    }
    stop() {
        clearInterval(this.move());
        console.log('stop');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.wrapper');
});


