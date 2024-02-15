function setup() 
{
  createCanvas(800, 800); //canvas needs to be square
}

//Declare global variables
let moon = 0;
let highlighted = (255, 255, 255);
let selected = false;

function draw() 
{
  background(0);
  if (moon == 0)  //if we aren't showing the moon select a phase.
  {
    phaseSelector();
  }
  if (moon > 0 && moon < 31)  //if a phase was selected pass it to the draw moon function.
  {
    drawMoon(moon);
  }
}

function drawMoon(phase) 
{
  let moonDiameter = 3*width/4;
  let centerX = width / 2;
  let centerY = height / 2;

  if (phase == 1 || phase == 30)
  {
    fill(0);
    circle(centerX, centerY, moonDiameter);
    push();
    fill(155);
    textSize(3*height/40);
    text("New Moon", width/3, height - (15*height/400));
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
    textSize(3*height/40);
    text("Waxing Crescent", width/4, height - (15*height/400));
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
    textSize(3*height/40);
    text("1st Quarter", width/3, height - (15*height/400));
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
    textSize(3*height/40);
    text("Waxing Gibbous", width/4, height - (15*height/400));
    pop();
  }
  else if (phase == 16)
  {
    fill(255, 255, 200);
    circle(centerX, centerY, moonDiameter);
    push();
    fill(155);
    textSize(3*height/40);
    text("Full Moon", width/3, height - (15*height/400));
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
    textSize(3*height/40);
    text("Waning Gibbous", width/4, height - (15*height/400));
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
    textSize(3*height/40);
    text("3rd Quarter", width/3, height - (15*height/400));
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
    textSize(3*height/40);
    text("Waning Crescent", width/4, height - (15*height/400))
    pop();
  }

  fill(155);
  square(0, 9*height/10, height/10);
  textSize(width/40);
  fill(0);
  text("Prev", width/40, 19*height/20);
  fill(155);
  square(9*width/10, 9*height/10, height/10);
  fill(0);
  text("Next", width - 3*width/40, height - height/20);

  push();
  fill(155);
  textSize(3*height/40);
  text("Phase " + phase, width/3, 3*height/40);
  pop();
}

function phaseSelector()
{     //draw the buttons to select a moon phase
  push();
  textSize(3*height/40);
  fill(155);
  text("Select a Phase of the Moon:", width/40, 3*height/40);
  pop();
  
  for(let ph = 1; ph < 31; ph++)
  {

    if (ph < 11) //for the first row of buttons(the first 10)
    {
      if (mouseX > ((width/10 * ph)- width/10) && mouseX < (width/10 * ph) && mouseY > height/10 && mouseY < 2*height/10)
      {
        highlighted = color(255, 0, 0); //if the mouse is hovering over a button change that button to red
        if (selected)
        {
          highlighted = color(0, 0, 255);
        }
      }
      else
      {
        highlighted = color(255, 255, 255);
      }
      fill(highlighted);    //fill with white or red, then draw the square and write the phase #
      square((width/10 * ph - width/10), height/10, width/10);
      fill(0, 0, 0);
      text(ph, width/10 * ph - width/16, 13*height/80);
    }
    else if (ph < 21) //for the second row of squares
    {
      if (mouseX > ((width/10 * (ph - 10)) - width/10) && mouseX < (width/10 * (ph - 10)) && mouseY > height/5 && mouseY < 3*height/10)
      {
        highlighted = color(255, 0, 0); //set coolor to red if mouse is hovering over it
        if (selected)
        {
          highlighted = color(0, 0, 255);
        }
      }
      else
      {
        highlighted = color(255, 255, 255);
      }
      fill(highlighted);  //fill with white or red, then draw the square and write the phase #
      square((width/10 * (ph - 10) - width/10), width/5, height/10);
      fill(0, 0, 0);
      text(ph, width/10 * (ph - 10) - width/16, 21*height/80);
    }
    else    //if not the first or second row of squares then it's the third row. Which is the same.
    {
      if (mouseX > ((width/10 * (ph - 20)) - 40) && mouseX < (width/10 * (ph - 20)) && mouseY > 3*height/10 && mouseY < 2*height/5)
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
      square((width/10 * (ph - 20) - width/10), 3*width/10, height/10);
      fill(0,0,0);
      text(ph, width/10 * (ph - 20) - width/16, 29*height/80);
    }
  }
  highlighted = (255, 255, 255);
  fill(highlighted);
}

function mousePressed()
{
  let anotherPhase = 0;
  if (mouseY > height/10 && mouseY < height/5)
  {
    moon = floor(1 + (mouseX / width/10));
    selected = true;
  }
  else if (mouseY > height/5 && mouseY < 3*height/10)
  {
    moon = 11 + floor(mouseX / width/10);
    selected = true;
  }
  else if (mouseY > 3*height/10 && mouseY < 2*height/5)
  {
    moon = floor(21 + (mouseX / width/10));
    selected = true;
  }
  else
  {
    selected = false;
  }

  if (anotherPhase == 0 && moon > 0 && (mouseX < width/10 || (mouseX < width && mouseX > 9*width/10)) && (mouseY > 9*height/10 && mouseY < height))
  {
    if (mouseX < width/10)
    {
      anotherPhase = moon - 1;
      moon--;
      if (anotherPhase != 0)
      {drawMoon(anotherPhase);}
      else
      {
        moon = 0;
      }
    }
    else if (mouseX < width && mouseX > 9*width/10)
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
        moon = 0;
      }
    }
  }
}