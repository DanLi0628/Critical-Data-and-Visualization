let viz = d3.select("#viz-container")
  .append("svg")
    .attr("id","viz")
;

d3.json("data.json").then(gotData);

let x = [];
let cost = [];

function gotData(incomingData){
  for (let i = 0; i < incomingData.length; i++){
    cost.push(incomingData[i].howMuchIsIt);
    x.push(i+1);
  }

  viz.selectAll("div").data(x).enter()
    .append("text")
    .text(txt)
      .attr("x", txtLocation)
      .attr("y",250)

  viz.append("text")
      .text(title)
        .attr("id","txt")
        .attr("x",550)
        .attr("y",50)
        .attr("font-weight",5)
  ;

  viz.selectAll("div").data(x).enter()
    .append("text")
    .text(txt)
      .attr("x", txtLocation)
      .attr("y",250)

  viz.append("text")
      .text(title)
        .attr("id","txt")
        .attr("x",550)
        .attr("y",50)
        .attr("font-weight",5)
  ;

  viz.selectAll("circle").data(x).enter()
    .append("circle")
      .attr("cx",xLocation)
      .attr("cy",150)
      .data(cost)
      .attr("r",money)
      .attr("fill","white")
  ;

  viz.selectAll("div").data(x).enter()
    .append("text")
    .text(txt)
      .attr("x", txtLocation)
      .attr("y",250)
  ;
      }

function title(){
  return "Cost";
}

function txt(x){
  return "Order " + x
}

function txtLocation(x){
  var n = x*145;
  return n;
}

function xLocation(x){
  var n = x*150;
  return n;
}

function money(cost){
  return cost * 2;
}
