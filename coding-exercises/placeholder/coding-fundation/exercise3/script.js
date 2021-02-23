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

 // the size of the circle represents cost, and the color represents the food type
  datagroups.append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",radius)
    .attr("fill",color)
  ;

// the time that i order the food
  datagroups.append("text")
    .text(time)
      .attr("x",-20)
      .attr("y",50)
      .attr("font-weight",20)
  ;

// these shapes represent whether the food arrives early or late
  datagroups.append("rect")
      .attr("x",0)
      .attr("y",-5)
      .attr("width",arrivalTime)
      .attr("height",10)
      .attr("stroke","darkBlue")
      .attr("fill","white")
  ;

// how much time it arrives early/late
  datagroups.append("rect")
      .attr("x",periodLocation)
      .attr("y",5)
      .attr("width",period)
      .attr("height",10)
      .attr("stroke","darkGreen")
      .attr("fill","green")
  ;

  datagroups.attr("transform",circleLocation)
  ;

}

function period(incomingData,i){
  let time1 = incomingData.didItArriveEarly;
  let time2 = incomingData.didItArriveLate;
  let minutes;
  if (time1 != 0){
    minutes = time1;
  }else{
    minutes = time2;
  }
  return minutes*2;
}

function periodLocation(incomingData,i){
  let time1 = incomingData.didItArriveEarly;
  let time2 = incomingData.didItArriveLate;
  let x;
  if (time1 != 0){
    x = -time1*2;
  }else{
    x = 0;
  }
  return x;
}



function arrivalTime(incomingData,i){
  return incomingData.howLongDidItTakeToArrive*2;
}

function time(incomingData,i){
  return incomingData.whenDidYouOrderIt;
}


function circleLocation(incomingData,i){
  let x = (i+1)*200;
  let y = 100;
  if (i > 4 && i <=9){
    x = (i - 4) *200;
    y = 250;
  }else if (i > 9 && i <=14){
    x = (i - 9) *200;
    y = 400;
  }else if (i > 14){
    x = (i - 14)*200
    y = 550;
  }
  return "translate(" + x + "," + y +")";
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

function radius(incomingData,i){
  data = incomingData;
  cost = data.howMuchIsIt;
  return cost;
}
