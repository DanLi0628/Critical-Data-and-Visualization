let w = 1200;
let h = 900;

let viz = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width",w*2)
    .attr("height",h)
    .style("background-color","#F1E9FF")
;
//title
viz.append("text")
  .text("Delivery Food")
    .attr("x",445)
    .attr("y",170)
    .style("font-size",60)
    .style("font-family","Gill Sans")
;
//phone
viz.append("rect")
    .attr("x",950)
    .attr("y",250)
    .attr("width",90)
    .attr("height",150)
    .attr("fill","darkgrey")
;

viz.append("rect")
    .attr("x",965)
    .attr("y",270)
    .attr("width",60)
    .attr("height",80)
    .attr("fill","white")
;

viz.append("circle")
    .attr("cx",995)
    .attr("cy",380)
    .attr("r",10)
    .attr("fill","white")
;
//美团
viz.append("rect")
    .attr("x",650)
    .attr("y",250)
    .attr("width",150)
    .attr("height",150)
    .attr("fill","#FFC44E")
;

viz.append("text")
    .text("美团")
    .attr("x",675)
    .attr("y",340)
    .attr("font-size",50)
    .style("font-weight","bold")
    .attr("height",150)
    .attr("fill","black")
;
