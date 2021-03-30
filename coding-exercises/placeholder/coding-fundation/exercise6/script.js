d3.json("births.json").then(gotData);


let w = 900;
let h = 500;
let xpadding = 100;
let ypadding = 50;
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid black")
;


function gotData(incomingData){
  // the following function is defined below
  // it allows for us to NOT WORRY about parsing
  // time strings and creating JS date objects
  // in the following script
  incomingData = fixJSDateObjects(incomingData);
  console.log(incomingData);

    // temporarily flatten data to get the minima/maxima:
    let flatData = d3.merge(incomingData)
    // we can use a  time scale because our data expresses
    // years in the form of JS date objects
    let xDomain = d3.extent(flatData, function(d){ return d.year });
    let xScale = d3.scaleTime().domain(xDomain).range([xpadding, w-xpadding]);
    let xAxis = d3.axisBottom(xScale);
    let xAxisGroup = viz.append("g")
        .attr("class", "xaxisgroup")
        .attr("transform", "translate(0,"+(h-ypadding)+")")
    ;
    xAxisGroup.call(xAxis);

    let yMax = d3.max(flatData, function(d){
      return d.birthsPerThousand;
    })
    let yDomain = [0, yMax];
    let yScale = d3.scaleLinear().domain(yDomain).range([h-ypadding, ypadding]);
    let yAxis = d3.axisLeft(yScale);
    let yAxisGroup = viz.append("g")
        .attr("class", "yaxisgroup")
        .attr("transform", "translate("+(xpadding/2)+",0)")
    ;
    yAxisGroup.call(yAxis);
    //line maker
    let lineMaker = d3.line()
      .x(function(d,i){
        return xScale(d.year);
      })
      .y(function(d,i){
        return yScale(d.birthsPerThousand);
      })
    ;
    //separate us and china data
    let graphGroup = viz.append("g").attr("class", "line");
    let button1Data = [];
    let button2Data = [];
    button1Data.push(incomingData[0]);
    button2Data.push(incomingData[1])

    function button1(){
      //enter elements
      graphGroup.selectAll(".line").data(button1Data).enter()
        .append("path")
        .attr("d", lineMaker)
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("stroke","blue")
        .attr("class","line")
        ;
      //transition
      graphGroup.selectAll(".line").data(button1Data)
        .transition()
        .attr("d",lineMaker)
        .attr("stroke","blue")
      ;
    }
    function button2(){
      //enter elements
      graphGroup.selectAll(".line").data(button2Data).enter()
        .append("path")
        .attr("d", lineMaker)
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("stroke","red")
        .attr("class","line")
        ;
      //transition
      graphGroup.selectAll(".line").data(button2Data)
        .transition()
        .attr("d",lineMaker)
        .attr("stroke","red")
      ;
    }

  //click button to transfer
  document.getElementById("usa").addEventListener("click", button1);
  document.getElementById("china").addEventListener("click",button2);
}


// function that turns all datapoints year values
// into JS date objects in the very beginning
// so that WE DON'T HAVE TO DEAL WITH IT LATER
function fixJSDateObjects(dataToFix){
  // timeParser
  let timeParse = d3.timeParse("%Y");
  return dataToFix.map(function(data){
    return data.map(function(d){
      return {
        "country": d.country,
        "year": timeParse(d.year),
        "birthsPerThousand": d.birthsPerThousand
      }
    })
  });
}
