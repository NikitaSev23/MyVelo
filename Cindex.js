//TODO Не помню
/*window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    var body = document.querySelector('body');
    //var hop = document.getElementById('plane')
    if (scrolled > 0) {
        body.classList.add('scrolled-down');
        //hop.style.background = 'grey';
    } else {
        body.classList.remove('scrolled-down');
        //hop.style.background = 'none';
    }
});*/

var lastscroll_value = 0;
var rotationAngle = 0;
window.addEventListener('scroll', function() {
    let scroll_value = window.scrollY;
    let Wheels = document.getElementsByClassName("wheel")
    for (let i = 0; i < Wheels.length; i++) {
        Wheels[i].style.transform = `rotate(${scroll_value / 2}deg)`;
    }
    /* //TODO Ненужный алгоритм, который пытается сделать строчку выше))))
    if (scroll_value > lastscroll_value) {
        console.log("Прокрутка вниз");
        rotationAngle += 5;
        for (let i = 0; i < Wheels.length; i++) {
            Wheels[i].style.transform = `rotate(${rotationAngle}deg)`;
        }
    } else {
        console.log("Прокрутка вверх или остановка");
        //! if(!(scroll_value == 0)) 
            rotationAngle -= 5;
        //! else rotationAngle -= 10;
        for (let i = 0; i < Wheels.length; i++) {
            Wheels[i].style.transform = `rotate(${rotationAngle}deg)`;
        }
    }
    lastscroll_value = scroll_value <= 0 ? 0 : scroll_value; */
    /* //TODO Прокрутка до нужной координаты
    var Square = document.getElementById('green-square');
    if (scroll_value > 10 && scroll_value < 25){
        //document.body.style.overflow = 'hidden';
        window.scrollBy({
            top: this.innerHeight,
            behavior: "smooth",
            //! duration: 100000 не работает
        });
    } */
    //Square.style.marginLeft = scroll_value * 0.5 + 'px';
    
});