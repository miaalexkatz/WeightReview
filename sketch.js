//grid and clicking function inspired by https://www.javaer101.com/en/article/39601632.html

let arr = [];
var onea = false;
var oneb, onec, twoa, twob, twoc, threea, threeb, threec = false;
var zerow = 0;
var onew = 0.66;
var fourw = 0.33;
var goalnum = 100;

function setup() {

  canvas = createCanvas(300, 300);
  for (var j = 0; j < 3; j++) {
    var inArr = [];
    for (var i = 0; i < 3; i++) {
      var rect = new Rect(i, j);
      inArr.push(rect);
    }
    arr.push(inArr)
  }
}

function draw() {
  background(255);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      arr[i][j].show()
    }
  }
}

function mousePressed() {
  arr.forEach(function(e, index) {
    e.forEach(function(d, index2) {
      arr[index][index2].clicked()
    });
  });
}

function Rect(i, j) {
  this.fill = 'pink'
  this.i = i;
  this.j = j;
  this.x = i * 100
  this.y = j * 100
  this.clickcheck = false;

  this.clicked = function() {
    let x1 = this.x,
      x2 = x1 + 100,
      y1 = this.y,
      y2 = y1 + 100;

    if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
      if (this.clickcheck) {
        this.clickcheck = false;
        this.fill = 'pink';
        if (this.x == 0) {
          if (this.y == 0) {
            onea = false;
          } else if (this.y == 100) {
            twoa = false;
          } else {
            threea = false;
          }
        } else if (this.x == 100) {
          if (this.y == 0) {
            oneb = false;
          } else if (this.y == 100) {
            twob = false;
          } else {
            threeb = false;
          }
        } else {
          if (this.y == 0) {
            onec = false;
          } else if (this.y == 100) {
            twoc = false;
          } else {
            threec = false;
          }
        }
        numberRecognize();
      } else {
        this.clickcheck = true;
        this.fill = 'black'
        if (this.x == 0) {
          if (this.y == 0) {
            onea = true;
            console.log("onea click");
          } else if (this.y == 100) {
            twoa = true;
          } else {
            threea = true;
          }
        } else if (this.x == 100) {
          if (this.y == 0) {
            oneb = true;
          } else if (this.y == 100) {
            twob = true;
          } else if (this.y == 200) {
            threeb = true;
          }
        } else {
          if (this.y == 0) {
            onec = true;
          } else if (this.y == 100) {
            twoc = true;
          } else {
            threec = true;
          }
        }
        console.log(onea, oneb, onec);
        numberRecognize();
      }
    }
  }
  this.show = function() {
    fill(this.fill)
    stroke('black')
    rect(this.x, this.y, 100, 100)
  }
}

function numberRecognize() {
  zerow = document.getElementById("zerow").value;
  onew = document.getElementById("onew").value;
  fourw = document.getElementById("fourw").value;
  print(zerow, onew, fourw);
  var zero = 0;
  var one = 0;
  var four = 0;
  if (onea){
    zero += 0.45;
    four += 0.45;
    one += 0.1;
  }
  if (oneb){
    one += 0.66;
    zero += 0.33;
  } 
  if (onec){
    zero +=0.5;
    four += 0.5;
  }
  if (twoa){
    zero +=0.5;
    four +=0.5;
  } if (twob){
    one += onew;
    four += fourw;
    zero += zerow;
  } 
  if(twoc){
    zero +=0.5;
    four +=0.5;
  }
  if (threea){
    zero += 1;
  }
  if (threeb){
    one +=0.66;
    zero += 0.33;
  }
  if (threec){
    zero +=0.5;
    four +=0.5;
  }
  if (zero > four && zero > one){
    finalnum = 0;
  } else if (one > zero && one > four){
    finalnum = 1;
  } else {
    finalnum = 4;
  }
  console.log(zero, one, four);
  document.getElementById("result").innerHTML = finalnum;
}
