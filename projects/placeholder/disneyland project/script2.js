w = window.innerWidth;
h = window.innerHeight;

document.addEventListener("mousemove", () => {
  let mousex = event.clientX; // Gets Mouse X
  let mousey = event.clientY; // Gets Mouse Y
  console.log(mousex, mousey); // Prints data
});


let viz = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width", w)
    .attr("height", h)
    //.style("background-color", "lavender")
;

viz.append("svg:image")
  .attr("xlink:href","map.png")
  .attr("x",0)
  .attr("y",0)
  .attr("width",w)
  .attr("height",h)
;

d3.json("data.json").then(gotData);

function gotData(incomingData){
  console.log(incomingData);

  let x = 3/5*w, y = 4/5*h;
  let dwarfs = [], xDwarf = 1/2*w-x, yDwarf = 1/5*h-y;
  let racer = [], xRacer = 1/6*w-x, yRacer = 1/3*h-y;
  let tron = [], xTron = 1/8*w-x, yTron = 2/3*h-y;
  let pirates = [], xPirates = 0.83*w-x, yPirates = 0.34*h-y;
  let rapids = [], xRapids = 0.7*w-x, yRapids = 0.5*h-y;
  let horizon = [], xHorizon = 0.83*w-x, yHorizon = 0.59*h-y;
  let temperature = [];
  let weather = [];
  let festival = [];
  let day = [];

  for (let i = 0; i<incomingData.length; i++){
    dwarfs.push(incomingData[i].sevenDwarfsMineTrain);
    racer.push(incomingData[i].rexsRacer);
    tron.push(incomingData[i].tronLightcyclePowerRunPresentedByChevrolet);
    pirates.push(incomingData[i].piratesOfTheCaribbeanBattleForTheSunkenTreasure);
    rapids.push(incomingData[i].roaringRapids);
    horizon.push(incomingData[i].soaringOverTheHorizon);
    temperature.push(incomingData[i].temperature);
    day.push(incomingData[i].whichDay);
  }


  let group1 = viz.selectAll(".dwarf").data(dwarfs);
  let enteringElements1 = group1.enter()
        .append("g")
          .attr("class","dwarf")
        ;
  enteringElements1.append("svg:image")
    .attr("xlink:href","icons/1.png")
    .attr("x",x)
    .attr("y",y)
    .attr("width",50)
    .attr("height",50)
  ;

 a1 = -1/8*w, b1 = - 1/7*h, c1 = - 1/4*h, d1 = - 1/10*w, e1 = - 1/3*h, f1 = - 1/2*h;

  enteringElements1.transition()
  .ease(d3.easeLinear)
      .duration(1000)
      .attr("transform", "translate(" + a1 + "," + b1 + ")")
      .transition()
      .ease(d3.easeLinear)
      .duration(1000)
      .attr("transform", "translate(" + a1 + "," + c1 + ")")
      .transition()
      .ease(d3.easeLinear)
      .duration(1000)
      .attr("transform", "translate(" + d1 + "," + e1 + ")")
      .transition()
      .ease(d3.easeLinear)
      .duration(1000)
      .attr("transform", "translate(" + a1 + "," + f1 + ")")
      .transition()
      .ease(d3.easeLinear)
      .attr("transform", "translate(" + xDwarf + "," + yDwarf + ")")
    ;

  let group2 = viz.selectAll(".racer").data(racer);
  let enteringElements2 = group2.enter()
        .append("g")
          .attr("class","racer")
        ;
  enteringElements2.append("svg:image")
    .attr("xlink:href","icons/2.png")
    .attr("x",x)
    .attr("y",y)
    .attr("width",50)
    .attr("height",50)
  ;

  a2 = -1/8*w, b2 = - 1/7*h, c2 = - 1/4*h, d2 = - 1/7*w, e2 = - 1/3*h, f2 = - 2/5*w, g2 = -1/3*h;

  enteringElements2.transition()
  .ease(d3.easeLinear)
      .duration(1000)
      .attr("transform", "translate(" + a2 + "," + b2 + ")")
      .transition()
      .ease(d3.easeLinear)
      .duration(1000)
      .attr("transform", "translate(" + a2 + "," + c2 + ")")
      .transition()
      .ease(d3.easeLinear)
      .duration(1000)
      .attr("transform", "translate(" + d2 + "," + e2 + ")")
      .transition()
      .ease(d3.easeLinear)
      .duration(1000)
      .attr("transform", "translate(" + f2 + "," + g2 + ")")
      .transition()
      .ease(d3.easeLinear)
      .attr("transform", "translate(" + xRacer + "," + yRacer + ")")
    ;

  let group3 = viz.selectAll(".tron").data(tron);
  let enteringElements3 = group3.enter()
        .append("g")
          .attr("class","tron")
        ;
  enteringElements3.append("svg:image")
    .attr("xlink:href","icons/3.png")
    .attr("x",x)
    .attr("y",y)
    .attr("width",50)
    .attr("height",50)
  ;

  a3 = -1/8*w, b3 = - 1/7*h, c3 = - 1/3*h, d3 = - 1/8*w;
  enteringElements3.transition()
      .duration(1000)
      .attr("transform", "translate(" + a3 + "," + b3 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + c3 + "," + d3 + ")")
      .transition()
      .attr("transform", "translate(" + xTron + "," + yTron + ")")
    ;

  let group4 = viz.selectAll(".pirates").data(pirates);
  let enteringElements4 = group4.enter()
        .append("g")
          .attr("class","pirates")
        ;
  enteringElements4.append("svg:image")
    .attr("xlink:href","icons/4.png")
    .attr("x",x)
    .attr("y",y)
    .attr("width",50)
    .attr("height",50)
  ;

  a4 = -1/8*w, b4 = - 1/7*h, c4 = - 1/4*h, d4 = - 1/10*w, e4 = - 1/3*h, f4 = 1/25*w, g4 = -1/3*h;

  enteringElements4.transition()
      .duration(1000)
      .attr("transform", "translate(" + a4 + "," + b4 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + a4 + "," + c4 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + d4 + "," + e4 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + f4 + "," + g4 + ")")
      .transition()
      .attr("transform", "translate(" + xPirates + "," + yPirates + ")")
    ;


  let group5 = viz.selectAll(".rapids").data(rapids);
  let enteringElements5 = group5.enter()
        .append("g")
          .attr("class","rapids")
        ;
  enteringElements5.append("svg:image")
    .attr("xlink:href","icons/5.png")
    .attr("x",x)
    .attr("y",y)
    .attr("width",50)
    .attr("height",50)
  ;

  a5 = -1/8*w, b5 = - 1/7*h, c5 = - 1/4*h;
  enteringElements5.transition()
      .duration(1000)
      .attr("transform", "translate(" + a5 + "," + b5 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + a5 + "," + c5 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + xRapids + "," + yRapids + ")")
    ;

  let group6 = viz.selectAll(".horizon").data(horizon);
  let enteringElements6 = group6.enter()
        .append("g")
          .attr("class","horizon")
        ;
  enteringElements6.append("svg:image")
    .attr("xlink:href","icons/6.png")
    .attr("x",x)
    .attr("y",y)
    .attr("width",50)
    .attr("height",50)
  ;

  a6 = -1/8*w, b6 = - 1/7*h, c6 = - 1/4*h, d6 = - 1/10*w, e6 = - 1/3*h, f6 = 1/25*w, g6 = -1/3*h;
  h6 = 1/20*w; i6 = -1/5*h;
  enteringElements6.transition()
      .duration(1000)
      .attr("transform", "translate(" + a6 + "," + b6 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + a6 + "," + c6 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + d6 + "," + e6 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + f6 + "," + g6 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + h6 + "," + i6 + ")")
      .transition()
      .duration(1000)
      .attr("transform", "translate(" + xHorizon + "," + yHorizon + ")")
    ;
}
