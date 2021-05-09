w = 1200;
h = 680;

var svg = d3.select("div#container")
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 "+w+" "+h)
  .classed("svg-content", true)
;

svg.append("svg:image")
  .attr("xlink:href","disneyland daily attendance cover.png")
  .attr("x",0)
  .attr("y",0)
  .attr("width",w)
;

d3.json("data.json").then(gotData);

function gotData(incomingData){
  console.log(incomingData);
  let group1 = viz.selectAll(".datagroup").data(incomingData).enter()
      .append("g")
        .attr("class","datagroup")
    ;

}
