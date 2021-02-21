const mon = document.querySelector('.mon');
const tue = document.querySelector('.tue');
const wed = document.querySelector('.wed');
const thu = document.querySelector('.thu');
const fri = document.querySelector('.fri');

//change background color of day icons - red/green

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

//change day icons

let icons=["url('img/workout.svg')", "url('img/coding.svg')", "url('img/simulator.svg')", "url('img/book.svg')", "url('img/sleep.svg')"];
let m1= 0;
let t1 = 0;
let w1 = 0;
let th1 = 0;
let f1 = 0;

let chngIconMon = () => {  
  
  mon.style.backgroundImage = icons[m1];
  if (m1 < icons.length-1){
      m1++;
  } else {
    m1 = 0;
  }
};

let chngIconTue = () => {  
  tue.style.backgroundImage = icons[t1];
  if (t1 < icons.length-1){
      t1++;
  } else {
    t1 = 0;
  }
};

let chngIconWed = () => {  
  wed.style.backgroundImage = icons[w1];
  if (w1 < colors.length-1){
      w1++;
  } else {
    w1 = 0;
  }
};

let chngIconThu = () => {  
  thu.style.backgroundImage = icons[th1];
  if (th1 < colors.length-1){
      th1++;
  } else {
    th1 = 0;
  }
};

let chngIconFri = () => {  
  fri.style.backgroundImage = icons[f1];
  if (f1 < colors.length-1){
      f1++;
  } else {
    f1 = 0;
  }
};

// Randomize icons
let randomIcons = () => {

  let randomMon = Math.floor(Math.random()*6);
  let randomTue = Math.floor(Math.random()*6);
  let randomWed = Math.floor(Math.random()*6);
  let randomThu = Math.floor(Math.random()*6);
  let randomFri = Math.floor(Math.random()*6);
  
  mon.style.backgroundImage = icons[randomMon];
  tue.style.backgroundImage = icons[randomTue];
  wed.style.backgroundImage = icons[randomWed];
  thu.style.backgroundImage = icons[randomThu];
  fri.style.backgroundImage = icons[randomFri];
};

