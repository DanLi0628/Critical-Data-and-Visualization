let viz = d3.select("#viz-container")
  .append("svg")
    .attr("id","viz")
;

d3.json("data.json").then(gotData);

function gotData(incomingData){
  console.log(incomingData);

  let datagroups = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .attr("class","datagroup")
  ;

datagroups.append("circle")
  .attr("cx",0)
  .attr("cy",0)
  .attr("r",radius)
  .attr("fill","white")
;

datagroups.attr("transform",circleLocation)
;

}

function circleLocation(incomingData,number){
  let x = (number+1)*200;
  let y = 100;
  if (number > 4 && number <=9){
    x = (number - 4) *200;
    y = 250;
  }else if (number > 9 && number <=14){
    x = (number - 9) *200;
    y = 400;
  }else if (number > 14){
    x = (number - 14)*200
    y = 550;
  }
  return "translate(" + x + "," + y +")";
}


function radius(incomingData,number){
  data = incomingData;
  cost = data.howMuchIsIt;
  console.log(cost);
  return cost;
}
