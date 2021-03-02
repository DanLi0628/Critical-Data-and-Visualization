let w = 1200;
let h = 900;

let viz = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width",w*2)
    .attr("height",h)
    .style("background-color","#F1E9FF")
;

viz.append("text")
  .text("Delivery Food")
    .attr("x",445)
    .attr("y",170)
    .style("font-size",60)
    .style("font-family","Gill Sans")
;
