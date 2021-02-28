let w = 1200;
let h = 900;

let viz = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width",w*2)
    .attr("height",h)
    .style("background-color","#F1E9FF")
;

d3.json("data.json").then(gotData);

function gotData(incomingData){
  console.log(incomingData);
  let semiCircles = viz.selectAll(".semi").data(incomingData).enter()
  .append("g")
    .attr("class","semi")
;
  let arcGenerator = d3.arc()
      .outerRadius(90)
      .innerRadius(0)
      .startAngle(Math.PI/2)
      .endAngle(Math.PI*1.5)
    ;

  semiCircles.append("path")
    .attr("transform",semiCircleLocation)
    .attr("d",arcGenerator)
    .attr("fill",color)
  ;

  let rect = semiCircles.append("rect")
    .attr("x",-45)
    .attr("y",80)
    .attr("width",90)
    .attr("height",20)
    .attr("fill","grey")
  ;
  
  rect.attr("transform",semiCircleLocation)
  ;

}

function semiCircleLocation(d,i){
  let x = 240;
  let y = 150;
  if (i<=4){
    x = (w/5) * (i+1)-120;
    y = 150;
  }else if(i<=9){
    x = (w/5) * (i+1-5)-120;
    y = 550;
  }else if (i<=14){
    x = 1200  + (w/5) * (i+1-10)-120;
    y = 150;
  }else if (i <=19){
    x = 1200  + (w/5) * (i+1-15)-120;
    y = 550;
  }
  return "translate("+ x +"," + y +")";
}

function color(incomingData,i){
  type = incomingData.whatDidYouOrder;
  if (type == "Korean Bibimbap"){
    color = "purple";
  }else if (type == "bubble tea"){
    color = "pink";
  }else if (type == "hamburger"){
    color = "gold";
  }else if (type == "spicy hot pot" || type == "spicy hot pot(rice)"){
    color = "red";
  }else if (type == "fruits" || type == "cherry"){
    color = "lightGreen";
  }else if (type == "pancake" || type == "steamed vermicelli roll, steamed dumpling, osmanthus cake"){
    color = "lightYellow";
  }else if (type == "rice with beef"){
    color = "white";
  }
  return color;
}
