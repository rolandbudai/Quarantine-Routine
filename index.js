const mon = document.querySelector('.mon');
const tue = document.querySelector('.tue');
const wed = document.querySelector('.wed');
const thu = document.querySelector('.thu');
const fri = document.querySelector('.fri');


let colors =['#44bd32', '#c23616'];
let m = 0;
let t = 0;
let w = 0;
let th = 0;
let f = 0;


let chngMon = () => {  
    mon.style.backgroundColor = colors[m];

    if (m < colors.length-1){
        m++;
    } else {
      m = 0;
    }
};

let chngTue = () => {  
    tue.style.backgroundColor = colors[t];

    if (t < colors.length-1){
        t++;
    } else {
      t = 0;
    }
};

let chngWed = () => {  
    wed.style.backgroundColor = colors[w];

    if (w < colors.length-1){
        w++;
    } else {
      w = 0;
    }
};

let chngThu = () => {  
    thu.style.backgroundColor = colors[th];

    if (th < colors.length-1){
        th++;
    } else {
      th = 0;
    }
};

let chngFri = () => {  
    fri.style.backgroundColor = colors[f];

    if (f < colors.length-1){
        f++;
    } else {
      f = 0;
    }
};