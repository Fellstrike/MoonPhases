function setup() 
{
  createCanvas(400, 400);
}

let moon = 0;
let highlighted = (255, 255, 255);
let selected = false;
let showMoon = false;

function draw() 
{
  background(0);
  if (!showMoon)
  {
    phaseSelector();
  }
  if (moon > 0 && moon < 31)
  {
    showMoon = true;
    drawMoon(moon);
  }
}

function drawMoon(phase) 
{
  let moonDiameter = 300;
  let centerX = width / 2;
  let centerY = height / 2;

  if (phase == 1 || phase == 30)
  {
    fill(0);
    circle(centerX, centerY, moonDiameter);
    push();
    fill(155);
    textSize(30);
    text("New Moon", width/3, 385);
    pop();
  }
  else if (phase > 1 && phase < 8)
  {
    fill(255, 255, 200);
    circle(centerX, centerY, moonDiameter);
    fill(0);
    circle(centerX - ((25+phase)*phase), centerY, moonDiameter + (5*phase * phase));
    push();
    fill(155);
    textSize(30);
    text("Waxing Crescent", width/4, 385);
    pop(); 
  }
  else if (phase == 8)
  {
    fill(255, 255, 200);
    circle(centerX, centerY, moonDiameter);
    fill(0);

    beginShape();
    vertex(centerX, centerY + moonDiameter);
    vertex(centerX, centerY - moonDiameter);
    bezierVertex(centerX, centerY - moonDiameter, centerX - 2*moonDiameter, centerY, centerX, centerY + moonDiameter);
    endShape(CLOSE);
    push();
    fill(155);
    textSize(30);
    text("1st Quarter", width/3, 385);
    pop();
  }
  else if (phase > 8 && phase < 16)
  {
    let growth = phase/2;
    fill(255, 255, 200);
    circle(centerX, centerY, moonDiameter);
    fill(0);
    beginShape();
    vertex(centerX -phase, centerY - moonDiameter/2);
    bezierVertex(centerX - phase, centerY - moonDiameter/2, centerX - phase*phase, centerY, centerX - growth*phase, centerY + moonDiameter/2);
    vertex(centerX - phase, centerY + moonDiameter/2);
    bezierVertex(centerX - phase, centerY + 3*moonDiameter/4, centerX - 2*moonDiameter, centerY, centerX - growth*phase, centerY - 3*moonDiameter/4);
    endShape(CLOSE);
    push();
    fill(155);
    textSize(30);
    text("Waxing Gibbous", width/4, 385);
    pop();
  }
  else if (phase == 16)
  {
    fill(255, 255, 200);
    circle(centerX, centerY, moonDiameter);
    push();
    fill(155);
    textSize(30);
    text("Full Moon", width/3, 385);
    pop();
  }
  else if (phase > 16 && phase < 23)
  {
    let growth = 14;
    for(let c = 14; c < phase; c++)
    {
      growth--;
    }
    fill(255, 255, 200);
    circle(centerX, centerY, moonDiameter);
    fill(0);
    beginShape();
    vertex(centerX + growth/2, centerY - moonDiameter/2);
    bezierVertex(centerX + growth/2, centerY - moonDiameter/2, centerX + 2*growth*growth, centerY, centerX + 4*growth, centerY + moonDiameter/2);
    vertex(centerX + growth/2, centerY + moonDiameter/2);
    bezierVertex(centerX + growth/2, centerY + 3*moonDiameter/4, centerX + 2*moonDiameter, centerY, centerX + growth*4, centerY - 3*moonDiameter/4);
    endShape(CLOSE);
    push();
    fill(155);
    textSize(30);
    text("Waning Gibbous", width/4, 385);
    pop();
    
  }
  else if (phase == 23)
  {
    fill(255, 255, 200);
    circle(centerX, centerY, moonDiameter);
    fill(0);

    beginShape();
    vertex(centerX, centerY + moonDiameter);
    vertex(centerX, centerY - moonDiameter);
    bezierVertex(centerX, centerY - moonDiameter, centerX + 2*moonDiameter, centerY, centerX, centerY + moonDiameter);
    endShape(CLOSE);
    push();
    fill(155);
    textSize(30);
    text("3rd Quarter", width/3, 385);
    pop();
  }
  else if (phase > 23 && phase < 30)
  {
    let growth = 2;
    for (let c = 23; c < phase; c++)
    {
      growth += 1.5;
    }
    fill(255, 255, 200);
    circle(centerX, centerY, moonDiameter);
    fill(0);
    beginShape();
    vertex(centerX, centerY + 3 * moonDiameter/4);
    bezierVertex(centerX, centerY + 3* moonDiameter/4, centerX - phase*growth, centerY, + centerX, centerY - 3 * moonDiameter/4);
    vertex(centerX, centerY - 3*moonDiameter/4);
    bezierVertex(centerX , centerY - 3*moonDiameter/4, centerX + 2*moonDiameter, centerY, centerX, centerY + 3*moonDiameter/4);
    endShape(CLOSE);
    push();
    fill(155);
    textSize(30);
    text("Waning Crescent", width/4, 385);
    pop();
  }

  fill(155);
  square(0, 360, 40);
  fill(0);
  text("Prev", 10, 380);
  fill(155);
  square(360, 360, 40);
  fill(0);
  text("Next", 370, 380);

  push();
  fill(155);
  textSize(30);
  text("Phase " + phase, width/4, 30);
  pop();
}

function phaseSelector()
{
  push();
  textSize(30);
  fill(155);
  text("Select a Phase of the Moon:", 10, 30);
  pop();
  
  for(let ph = 1; ph < 31; ph++)
  {

    if (ph < 11)
    {
      if (mouseX > ((40 * ph)- 40) && mouseX < (40 * ph) && mouseY > 40 && mouseY < 80)
      {
        highlighted = color(255, 0, 0);
        if (selected)
        {
          highlighted = color(0, 0, 255);
        }
      }
      else
      {
        highlighted = color(255, 255, 255);
      }
      fill(highlighted);
      square((40 * ph - 40), 40, 40);
      fill(0, 0, 0);
      text(ph, 40 * ph - 25, 65);
    }
    else if (ph < 21)
    {
      if (mouseX > ((40 * (ph - 10)) - 40) && mouseX < (40 * (ph - 10)) && mouseY > 80 && mouseY < 120)
      {
        highlighted = color(255, 0, 0);
        if (selected)
        {
          highlighted = color(0, 0, 255);
        }
      }
      else
      {
        highlighted = color(255, 255, 255);
      }
      fill(highlighted);
      square((40 * (ph - 10) - 40), 80, 40);
      fill(0, 0, 0);
      text(ph, 40 * (ph - 10) - 25, 105);
    }
    else
    {
      if (mouseX > ((40 * (ph - 20)) - 40) && mouseX < (40 * (ph - 20)) && mouseY > 120 && mouseY < 160)
      {
        highlighted = color(255, 0, 0);
        if (selected)
        {
          highlighted = color(0, 0, 255);
        }
      }
      else
      {
        highlighted = color(255, 255, 255);
      }
      fill(highlighted);
      square((40 * (ph - 20) - 40), 120, 40);
      fill(0,0,0);
      text(ph, 40 * (ph - 20) - 25, 145);
    }
  }
  highlighted = (255, 255, 255);
  fill(highlighted);
}

function mousePressed()
{
  let anotherPhase = 0;
  if (mouseY > 40 && mouseY < 80)
  {
    moon = floor(1 + (mouseX / 40));
    selected = true;
  }
  else if (mouseY > 80 && mouseY < 120)
  {
    moon = 11 + floor(mouseX / 40);
    selected = true;
  }
  else if (mouseY > 120 && mouseY < 160)
  {
    moon = floor(21 + (mouseX / 40));
    selected = true;
  }
  else
  {
    selected = false;
  }

  if (anotherPhase == 0 && showMoon && (mouseX < 40 || (mouseX < 400 && mouseX > 360)) && (mouseY > 360 && mouseY < 400))
  {
    if (mouseX < 40)
    {
      anotherPhase = moon - 1;
      moon--;
      if (anotherPhase != 0)
      {drawMoon(anotherPhase);}
      else
      {
        showMoon = false;
        moon = 0;
      }
    }
    else if (mouseX < 400 && mouseX > 360)
    {
      anotherPhase = moon + 1;
      moon++;
      if (anotherPhase <= 30)
      {drawMoon(anotherPhase);}
      else
      {showMoon = false;
      moon = 0;}
    }
  }
  if (showMoon && anotherPhase == 0)
  {
    showMoon = false;
    moon = 0;
  }

  return false;
}

function mouseReleased()
{
  selected = false;
}

function keyPressed()
{
  if (moon != 0)
  {
    if (keyCode === LEFT_ARROW)
    {
      anotherPhase = moon - 1;
      moon--;
      if (anotherPhase != 0)
      {drawMoon(anotherPhase);}
      else
      {
        showMoon = false;
        moon = 0;
      }
    }
    else if (keyCode === RIGHT_ARROW)
    {
      anotherPhase = moon + 1;
      moon++;
      if (anotherPhase <= 30)
      {drawMoon(anotherPhase);}
      else
      {
        showMoon = false;
        moon = 0;
      }
    }
  }
}