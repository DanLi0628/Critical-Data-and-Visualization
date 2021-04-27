w = 1000;
h = 600;

let viz = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;

d3.json("data.json").then(gotData);

function gotData(incomingData){
  console.log(incomingData);
  let group1 = viz.selectAll(".datagroup").data(incomingData).enter()
      .append("g")
        .attr("class","datagroup")
    ;

  // group1.append("circle")
  //   .attr("cx",0)
  //   .attr("cy",0)
  //   .attr("r",10)
  //   .attr("fill","white")
  // ;

  group1.append("image")
    .attr("xlink:href","2.jpg")
    .attr("x",0)
    .attr("y",0)
    .attr("width",800)
    .attr("height",400)
  ;
}
