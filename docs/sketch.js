var time = 0.0;
var title = "Art Bristol Code";

function setup()
{
  createCanvas(windowWidth, windowHeight);
}

function draw()
{
  time = time + 0.1;
  background(128 + sin(time * 0.1) * 64, 0, 196 - sin(time * 0.1) * 64);
  noStroke();

  for (var character = 0; character < title.length; character++)
  {
    textAlign(CENTER, CENTER);
    textSize(100 + 20 * sin(time * 0.5 + character * 0.1));
    fill(220 + sin(time * 0.1 + character * 0.1) * 30, 0, 220 + sin(time * 0.1 + character * 0.1) * 30);
    text(title[character], mouseX + character * 50 - (title.length * 25), mouseY - 100 + 20 * sin(time * 0.5 + character * 0.1));
  }
}

function mouseClicked()
{
  window.location.href = "http://www.github.com/artbristolcode/openprocessingday";
}
