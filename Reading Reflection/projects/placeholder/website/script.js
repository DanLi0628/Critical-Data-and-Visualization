let viz = d3.select("#viz-container")
  .append("svg")
    .attr("id","viz")
;

d3.json("data.json").then(gotData);

let x = [];
let cost = [];
let time = [];

function gotData(incomingData){
  console.log(incomingData);
  for (let i = 0; i < incomingData.length; i++){
    cost.push(incomingData[i].howMuchIsIt);
    x.push(i+1);
    time.push(incomingData[i].whenDidYouOrderIt-900)
  }

// cost title
  viz.append("text")
      .text(title)
        .attr("id","txt")
        .attr("x",550)
        .attr("y",50)
        .attr("font-weight",5)
  ;
// order time title
  viz.append("text")
      .text(orderTime)
        .attr("id","txt")
        .attr("x",500)
        .attr("y",350)
        .attr("font-weight",5)
  ;

//circles
  viz.selectAll("circle").data(x).enter()
    .append("circle")
      .attr("cx",xLocation)
      .attr("cy",150)
      .data(cost)
      .attr("r",money)
      .attr("fill","white")
  ;
// time squares
  viz.selectAll("rect").data(time).enter()
    .append("rect")
      .attr("x",timeLocation)
      .attr("y",400)
      .attr("width",10)
      .attr("height",10)
      .attr("fill","LightYellow")
      .attr("stroke","grey")
    ;
//order 1234
  viz.selectAll("div").data(x).enter()
    .append("text")
    .text(txt)
      .attr("x", txtLocation)
      .attr("y",250)
  ;
      }
//time square xlocation
function timeLocation(time){
  return time;
}
//cost title
function title(){
  return "Cost";
}
//order time title
function orderTime(){
  return "Order Time";
}
//order 1234
function txt(x){
  return "Order " + x
}
//order 1234 xlocation
function txtLocation(x){
  var n = x*145;
  return n;
}
//circle xlocation
function xLocation(x){
  var n = x*150;
  return n;
}
//circle radius
function money(cost){
  return cost * 2;
}
