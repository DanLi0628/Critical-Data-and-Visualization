w = window.innerWidth;
h = window.innerHeight;


let viz = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width", w)
    .attr("height", h)
    //.style("background-color", "lavender")
;

viz.append("svg:image")
  .attr("xlink:href","map.jpg")
  .attr("x",0)
  .attr("y",0)
  .attr("width",w-50)
  .attr("height",h-50)
;


d3.json("data.json").then(gotData);

function gotData(incomingData){
  console.log(incomingData);

  let dwarfs = [], xDwarf = 970-1100, yDwarf = 230-1000;
  let racer = [], xRacer = 340-1100, yRacer = 330-1000;
  let tron = [], xTron = 280-1100, yTron = 780-1000;
  let pirates = [], xPirates = 1290-1100, yPirates = 380-1000;
  let rapids = [], xRapids = 1060-1100, yRapids = 580-1000;
  let horizon = [], xHorizon = 1300-1100, yHorizon = 580-1000;
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
    .attr("x",1050)
    .attr("y",1000)
    .attr("width",50)
    .attr("height",50)
  ;
  enteringElements1.transition()
      .duration(1000)
      .attr("transform", "translate(-220,-240)")
      .transition()
      .duration(1000)
      .attr("transform", "translate(-200,-460)")
      .transition()
      .duration(1000)
      .attr("transform", "translate(-140,-510)")
      .transition()
      .duration(1000)
      .attr("transform", "translate(-240,-700)")
      .transition()
      .attr("transform", "translate(" + xDwarf + "," + yDwarf + ")")

  let group2 = viz.selectAll(".racer").data(racer);
  let enteringElements2 = group2.enter()
        .append("g")
          .attr("class","racer")
        ;
  enteringElements2.append("svg:image")
    .attr("xlink:href","icons/2.png")
    .attr("x",1050)
    .attr("y",1000)
    .attr("width",50)
    .attr("height",50)
  ;
  enteringElements2.transition()
      .duration(1000)
      .attr("transform", "translate(-220,-240)")
      .transition()
      .duration(1000)
      .attr("transform", "translate(-200,-460)")
      .transition()
      .duration(1000)
      .attr("transform", "translate(-350,-550)")
      .transition()
      .duration(1000)
      .attr("transform", "translate(-500,-500)")
      .transition()
      .duration(1000)
      .attr("transform", "translate(-770,-550)")
      .transition()
      .attr("transform", "translate(" + xRacer + "," + yRacer + ")")



}
