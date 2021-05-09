w = 1200;
h = 680;

// document.addEventListener("mousemove", () => {
//   let mousex = event.clientX; // Gets Mouse X
//   let mousey = event.clientY; // Gets Mouse Y
//   console.log(mousex/2000, mousey/2000); // Prints data
// });


var svg = d3.select("div#container")
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 "+w+" "+h)
  .classed("svg-content", true)
  .style("background-color", "lavender")
;


let graphGroup = svg.append("g").attr("class", "graphGroup");
let basemapGroup = graphGroup.append("g").attr("class", "basemapGroup");
let vizGroup = graphGroup.append("g").attr("class", "vizGroup");

basemapGroup.append("svg:image")
  .attr("xlink:href","map.png")
  .attr("x",0)
  .attr("y",0)
  .attr("width",w)
;

d3.json("data.json").then(gotData);
let currentDay = 0;

function gotData(incomingData){
  data = incomingData;
  //console.log(data.length);

  drawGraph();


  function drawGraph(){
    let entrances = {
      "original":{
        x : 0.705*w,
        y : 0.5175*w
      },
      "sevenDwarfsMineTrain":{
        x : 0.635*w,
        y : 0.0955*w
      },
      "rexsRacer":{
        x : 0.228*w,
        y : 0.135*w
      },
      "tronLightcyclePowerRunPresentedByChevrolet":{
        x : 0.178*w,
        y : 0.38*w
      },
      "piratesOfTheCaribbeanBattleForTheSunkenTreasure":{
        x : 0.8525*w,
        y : 0.1755*w
      },
      "roaringRapids":{
        x : 0.711*w,
        y : 0.307*w
      },
      "soaringOverTheHorizon":{
        x : 0.853*w,
        y : 0.3645*w
      }
    }

    let attractionNames = ["piratesOfTheCaribbeanBattleForTheSunkenTreasure","roaringRapids","sevenDwarfsMineTrain","soaringOverTheHorizon","tronLightcyclePowerRunPresentedByChevrolet","rexsRacer"];

    let daydata = data.find(function (d,i){
      if(i == currentDay){
        return true
        }
      })

    attractions = attractionNames.map(function(name){
      return{
        attraction:name,
        wait: daydata[name]
      }
    })
    console.log(attractions);

    let attractionGroups = vizGroup.selectAll(".attractionGroup").data(attractions);
    let enterAttractionGroups = attractionGroups.enter().append("g")
    .attr("class", "attractionGroup")
    .attr("transform", function(d, i){
      let x = entrances[d.attraction].x
      let y = entrances[d.attraction].y
      return "translate( "+x+", "+y+")"

    })
  ;

    console.log("attractionGroups", attractionGroups)

    attractionGroups = attractionGroups.merge(enterAttractionGroups)

    let visitors = attractionGroups.selectAll(".visitor").data(function(d, i){
                                            let visitorArray = d3.range(d.wait/10)
                                            console.log("d", d)
                                            console.log("vistorArray", visitorArray)
                                            visitorArray = visitorArray.map(function(value){
                                              return {
                                                attraction: d.attraction
                                              }
                                            })
                                            console.log("vistorArray", visitorArray)

                                            return visitorArray
                                          })
                                          ;


    let visitorsEnteringGroup = visitors.enter().append("g").attr("class", "visitor");
    let visitorsExitingGroup = visitors.exit()

    // basemapGroup.append("svg:image")
    //   .attr("xlink:href","map.png")
    //   .attr("x",0)
    //   .attr("y",0)
    //   .attr("width",w)
    // ;

    visitorsEnteringGroup.append("svg:image")
      .attr("xlink:href", "icons/1.png")
      .attr("width",20)
      .attr('x', function(d, i){
        // console.log(d)
        return i*20 - 50;
      })
      .attr('y', -10)
      .transition()
      .duration(1000)
      .attr('y', 0)
    ;

    visitorsExitingGroup.transition().duration(1000)
      .attr("transform", function(d, i){
        let x = i*20 - 50;
        let y = 100;
        return "translate("+x+", "+y+")"
      })
      .remove()

    // Updating Visitors
    visitors.select("visitor").transition().duration(1000).attr("width", 10)


  }

  function image(){

  }


  d3.select("#nextDay").on("click", function(){
    currentDay++;
    console.log(currentDay);
    if(currentDay>=data.length){
      currentDay=0;
    }
    drawGraph();
  })

}
