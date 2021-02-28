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
  console.log(x,y);
  return "translate("+ x +"," + y +")";
}
