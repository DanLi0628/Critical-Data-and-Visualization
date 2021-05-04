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

  let dwarfs = [], xDwarf = 970, yDwarf = 230;
  let racer = [];
  let tron = [];
  let pirates = [];
  let rapids = [];
  let horizon = [];
  let temperature = [];
  let weather = [];
  let festival = [];
  let day = [];

  console.log(xDwarf);


  for (let i = 0; i < incomingData.length; i++){
    dwarfs.push(incomingData[i].sevenDwarfsMineTrain);
    racer.push(incomingData[i].rexsRacer);
    tron.push(incomingData[i].tronLightcyclePowerRunPresentedByChevrolet);
    pirates.push(incomingData[i].piratesOfTheCaribbeanBattleForTheSunkenTreasure);
    rapids.push(incomingData[i].roaringRapids);
    horizon.push(incomingData[i].soaringOverTheHorizon);
    temperature.push(incomingData[i].temperature);
    day.push(incomingData[i].whichDay);
  }

  let group1 = viz.selectAll(".dwarf").data(dwarfs).enter()
      .append("g")
        .attr("class","dwarf")
    ;
    console.log(dwarfs);

  group1.append("circle")
    .attr("cx",function (d,i){
      if (d != "closed"){
        return d;
      }else{
        return 0
      }
    })
    .attr("cy",100)
    .attr("r",3)
    .attr("fill","black")
  ;
}
