let viz = d3.select("#viz-container")
  .append("svg")
    .attr("id","viz")
;

//some words and legends
viz.append("text")
    .text("Delivery Food")
      .attr("x",500)
      .attr("y",50)
      .attr("font-size",30)
;
viz.append("text")
    .text("Legend")
      .attr("x",1200)
      .attr("y",50)
      .attr("font-size",20)
;
viz.append("text")
    .text("Radius of circle: cost")
      .attr("x",1150)
      .attr("y",80)
      .attr("font-size",16)
;
viz.append("circle")
      .attr("cx",1130)
      .attr("cy",75)
      .attr("r",10)
      .attr("fill","pink")
;
viz.append("line")
  .style("strokeWeight",2)
  .style("stroke","black")
  .attr("x1",1130)
  .attr("y1",75)
  .attr("x2",1140)
  .attr("y2",75)
;

colors = ["red","purple","gold","lightYellow","lightGreen","white","pink"];

//legend circle
let legend = viz.selectAll(".circle").data(colors).enter()
  .append("g")
;

legend.append("circle")
        .attr("cx",1130)
        .attr("cy",yLocation)
        .attr("r",10)
        .attr("fill",legendColor)
        .attr("class","circle")
;

//legend words
legend.append("text")
  .text(legendText)
    .attr("x",1150)
    .attr("y",yLocation)
    .attr("font-size",16)
;



function legendText(incomingData){
  if (incomingData == "red"){
    type = "spicy food";
  }else if (incomingData == "purple"){
    type = "Korean food";
  }else if (incomingData == "gold"){
    type = "fast food";
  }else if (incomingData == "lightYellow"){
    type = "rice/dumplings";
  }else if (incomingData == "lightGreen"){
    type = "fruits";
  }else if (incomingData == "white"){
    type = "Japanese food";
  }else if (incomingData == "pink"){
    type = "desserts";
  }
  return type;
}


function legendColor(incomingData){
  return incomingData;
}

function yLocation(incomingData,i){
  y = 75 + 35*(i+1);
  return y;
}



d3.json("data.json").then(gotData);

function gotData(incomingData){
  console.log(incomingData);

//circle, 2rects, 2texts
  let group1 = viz.selectAll(".datagroup").data(incomingData).enter()
    .append("g")
      .attr("class","datagroup")
  ;

//motivation
  let group2 = viz.selectAll(".motivation").data(incomingData).enter()
    .append("g")
      .attr("class","motivation")
    ;

 // the size of the circle represents cost, and the color represents the food type
  group1.append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",radius)
    .attr("fill",color)
  ;

// the time that i order the food
  group1.append("text")
    .text(time)
      .attr("x",-20)
      .attr("y",50)
      .attr("font-weight",20)
  ;

// these shapes represent whether the food arrives early or late
  group1.append("rect")
      .attr("x",0)
      .attr("y",-5)
      .attr("width",arrivalTime)
      .attr("height",10)
      .attr("stroke","darkBlue")
      .attr("fill","white")
  ;

// how much time it arrives early/late
  group1.append("rect")
      .attr("x",periodLocation)
      .attr("y",5)
      .attr("width",period)
      .attr("height",10)
      .attr("stroke","darkGreen")
      .attr("fill","green")
  ;

//what did i do when eating
  group1.append("text")
      .text(doThings)
        .attr("x",-20)
        .attr("y",75)
        .attr("font-weight",20)
    ;

//my motivation of ordering
//complete this after class!!!!!
  group2.append("image")
      .attr("xlink:href",link)
      .attr("width",20)
      .attr("height",20)
      .attr("x",-10)
      .attr("y",-20)
  ;


//locate these shapes, give them a relative location
  group1.attr("transform",circleLocation)
  ;
  group2.attr("transform",circleLocation)
  ;

}

function link(incomingData,i){
  let link="";
  motivation = incomingData.whatsYourMotivationOfOrdering;
  if (motivation == "dinner"){
    link = "dinner.png";
  }else if (motivation == "don't wanna study"){
    link = "anxiety.jpg";
  }else if (motivation == "motivate me to write essay"){
    link = "book.jpg";
  }else if (motivation == "for a balanced diet" || motivation == "balanced diet"){
    link = "diet.png";
  }else if (motivation == "treat my friend"){
    link = "friend.jpg"
  }

  return link;
}




function doThings(incomingData,i){
  return incomingData.whatDidYouDoWhenEating;
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
  let y = 120;
  if (i > 4 && i <=9){
    x = (i - 4) *200;
    y = 290;
  }else if (i > 9 && i <=14){
    x = (i - 9) *200;
    y = 460;
  }else if (i > 14){
    x = (i - 14)*200
    y = 630;
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
