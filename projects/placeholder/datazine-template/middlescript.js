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
  //[group1] create a "bowl" class
  let semiCircles = viz.selectAll(".semi").data(incomingData).enter()
  .append("g")
    .attr("class","semi")
  ;

  //create semi circle
  let arcGenerator = d3.arc()
      .outerRadius(90)
      .innerRadius(0)
      .startAngle(Math.PI/2)
      .endAngle(Math.PI*1.5)
    ;

  //draw semi circles
  semiCircles.append("path")
    .attr("transform",shapeLocation)
    .attr("d",arcGenerator)
    .attr("fill",color)
  ;

  //rects below the circles
  let rect = semiCircles.append("rect")
    .attr("x",-45)
    .attr("y",80)
    .attr("width",90)
    .attr("height",20)
    .attr("fill","darkGrey")
  ;

  //translate the rectLocation
  rect.attr("transform",shapeLocation)
  ;

  //[group2] time rects below
  let timeRects = viz.selectAll(".timeRect").data(incomingData).enter()
  .append("g")
    .attr("class","timeRect")
  ;

  //create rects
  let firstRect = timeRects.append("rect")
    .attr("x",0)
    .attr("y",130)
    .attr("width",arrivalWidth)
    .attr("height",15)
    .attr("stroke","black")
    .attr("fill",arrivalColor)
  ;

  //early/late time
  let timeRect = timeRects.append("rect")
    .attr("x",0)
    .attr("y",150)
    .attr("width",timeWidth)
    .attr("height",15)
    .attr("stroke","black")
    .attr("fill",timeColor)
  ;

  firstRect.attr("transform",shapeLocation)
  ;
  timeRect.attr("transform",rectsLocation)
  ;

}

//the rectLocation of each shape
function shapeLocation(d,i){
  let x = 240;
  let y = 150;
  if (i<=4){
    x = (w/5) * (i+1)-120;
    y = 130;
  }else if(i<=9){
    x = (w/5) * (i+1-5)-120;
    y = 530;
  }else if (i<=14){
    x = 1200  + (w/5) * (i+1-10)-120;
    y = 130;
  }else if (i <=19){
    x = 1200  + (w/5) * (i+1-15)-120;
    y = 530;
  }
  return "translate("+ x +"," + y +")";
}

//the color of each bowl
function color(incomingData,i){
  type = incomingData.whatDidYouOrder;
  if (type == "Korean Bibimbap"){
    color = "#DD9CFC";
  }else if (type == "bubble tea"){
    color = "pink";
  }else if (type == "hamburger"){
    color = "#FCD99C";
  }else if (type == "spicy hot pot" || type == "spicy hot pot(rice)"){
    color = "#FCA09C";
  }else if (type == "fruits" || type == "cherry"){
    color = "#80FC80";
  }else if (type == "pancake" || type == "steamed vermicelli roll, steamed dumpling, osmanthus cake"){
    color = "lightYellow";
  }else if (type == "rice with beef"){
    color = "white";
  }
  return color;
}

//the width of rects
function arrivalWidth(d,i){
  return d.howLongDidItTakeToArrive * 3;
}

//the color of timeRects
function arrivalColor(d,i){
  let arrivalColor = "grey";
  let motivation = d.whatsYourMotivationOfOrdering;
  if (motivation == "dinner"){
    arrivalColor = "#575855";
  }else if (motivation == "balanced diet" || motivation == "for a balanced diet"){
    arrivalColor = "#AEFDD4";
  }else if (motivation == "don't wanna study" || motivation == "motivate me to write essay"){
    arrivalColor = "orange";
  }else if (motivation == "treat my friend"){
    arrivalColor = "#F9A6FE";
  }
  return arrivalColor;
}

//width of early/late
function timeWidth(d,i){
  let early = d.didItArriveEarly;
  let late = d.didItArriveLate;
  let timeWidth = 0;
  if (early != 0){
    timeWidth = early;
  }if (late != 0){
    timeWidth = late;
  }
  return timeWidth * 3;
}

//color of early/late
function timeColor(d,i){
  let early = d.didItArriveEarly;
  let late = d.didItArriveLate;
  let timeColor;
  if (early != 0){
    timeColor = "green";
  }else if (late != 0){
    timeColor = "red";
  }
  return timeColor;
}

//rectLocation of early/late
function rectsLocation(d,i){
  let early = d.didItArriveEarly;
  let late = d.didItArriveLate;
  let x=0;
  let y=0;
  let rectLocation = "";
  if (early != 0){
    if (i<=4){
      x = (w/5) * (i+1)-120;
      y = 130;
      return "translate("+ x +"," + y +")";
    }else if(i<=9){
      x = (w/5) * (i+1-5)-120;
      y = 530;
      return "translate("+ x +"," + y +")";
    }else if (i<=14){
      x = 1200  + (w/5) * (i+1-10)-120;
      y = 130;
      return "translate("+ x +"," + y +")";
    }else if (i <=19){
      x = 1200  + (w/5) * (i+1-15)-120;
      y = 530;
      return "translate("+ x +"," + y +")";
    }
  }else if (late != 0){
    if (i<=4){
      x = (w/5) * (i+1)-120-late*3;
      y = 130;
      return "translate("+ x +"," + y +")";
    }else if(i<=9){
      x = (w/5) * (i+1-5)-120-late*3;
      y = 530;
      return "translate("+ x +"," + y +")";
    }else if (i<=14){
      x = 1200  + (w/5) * (i+1-10)-120-late*3;
      y = 130;
      return "translate("+ x +"," + y +")";
    }else if (i <=19){
      x = 1200  + (w/5) * (i+1-15)-120-late*3;
      y = 530;
      return "translate("+ x +"," + y +")";
    }
  }
}
