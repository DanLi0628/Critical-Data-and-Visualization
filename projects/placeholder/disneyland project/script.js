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
  .attr("xlink:href","disneyland daily attendance cover.png")
  .attr("x",0)
  .attr("y",0)
  .attr("width",w-50)
  .attr("height",h-50)
;

d3.json("data.json").then(gotData);

function gotData(incomingData){
  console.log(incomingData);
  let group1 = viz.selectAll(".datagroup").data(incomingData).enter()
      .append("g")
        .attr("class","datagroup")
    ;


  // group1.append("circle")
  //   .attr("cx",function (d,i){
  //     return i + Math.random()*w;
  //   })
  //   .attr("cy",function (d,i){
  //     return i + Math.random()*h;
  //   })
  //   .attr("r",10)
  //   .attr("fill","white")
  // ;

}
