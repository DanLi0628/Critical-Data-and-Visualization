let w = 1200;
let h = 900;

let viz = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width",w*2)
    .attr("height",h)
    .style("background-color","#F1E9FF")
;

let arcGenerator = d3.arc()
    .outerRadius(150)
    .innerRadius(0)
    .startAngle(Math.PI/2)
    .endAngle(Math.PI*1.5)
  ;

viz.append("path")
  .attr("transform","translate(250,200)")
  .attr("d",arcGenerator)
  .attr("fill","#DD9CFC")
;

viz.append("rect")
  .attr("x",170)
  .attr("y",330)
  .attr("width",160)
  .attr("height",40)
  .attr("fill","darkGrey")
;
