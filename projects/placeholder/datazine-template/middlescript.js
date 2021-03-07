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

  //get the data of cost and doing
  let cost = [];
  let doing = [];

  for (let i = 0; i < incomingData.length; i++){
    cost.push(incomingData[i].howMuchIsIt);
    doing.push(incomingData[i].whatDidYouDoWhenEating)
  }
  console.log(cost,doing);

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

  //create "sun"
  let sun = semiCircles.append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",20)
    .attr("fill","red")
  ;

  sun.attr("transform",circleLocation);

  //[group2] time rects below
  let timeRects = viz.selectAll(".timeRect").data(incomingData).enter()
  .append("g")
    .attr("class","timeRect")

  //wifi/video
  //if (incomingData.whatDidYouDoWhenEating == "")


  //create rects
  let firstRect = timeRects.append("rect")
    .attr("x",0)
    .attr("y",140)
    .attr("width",arrivalWidth)
    .attr("height",15)
    .attr("stroke","black")
    .attr("fill",arrivalColor)
  ;

  //early/late time
  let timeRect = timeRects.append("rect")
    .attr("x",0)
    .attr("y",190)
    .attr("width",timeWidth)
    .attr("height",15)
    .attr("stroke","black")
    .attr("fill",timeColor)
  ;

//[group3] rice
  let customShapes = viz.selectAll(".shapes").data(cost).enter()
    .append("g")
      .attr("class","customShape")
      .html(shape)
      .data(cost)
  ;

  firstRect.attr("transform",shapeLocation);

  timeRect.attr("transform",rectsLocation);

  customShapes.attr("transform",riceLocation);


}

//the rectLocation of each shape
function shapeLocation(d,i){
  let x = 240;
  let y = 150;
  if (i<=4){
    x = (w/5) * (i+1)-120;
    y = 130+25;
  }else if(i<=9){
    x = (w/5) * (i+1-5)-120;
    y = 530+25;
  }else if (i<=14){
    x = 1200  + (w/5) * (i+1-10)-120;
    y = 130+25;
  }else if (i <=19){
    x = 1200  + (w/5) * (i+1-15)-120;
    y = 530+25;
  }
  return "translate("+ x +"," + y +")";
}

function riceLocation(d,i){
  console.log(d);
  let y1=12.81;
  let y2=25.61;
  let y3=35.35;
  let y4=39.72;
  let y5=50.54;
  let y0=0;
  if (d<=20){
    y0 = y1;
  }else if (d<=25){
    y0 = y2;
  }else if (d<=30){
    y0 = y3;
  }else if (d<=35){
    y0 = y4;
  }else if (d>35){
    y0 = y5;
  }
  console.log(y0);

  let x = 240;
  let y = 150;
  if (i<=4){
    x = (w/5) * (i+1)-120-90;
    y = 130-y0+25;
  }else if(i<=9){
    x = (w/5) * (i+1-5)-120-90;
    y = 530-y0+25;
  }else if (i<=14){
    x = 1200  + (w/5) * (i+1-10)-120-90;
    y = 130-y0+25;
  }else if (i <=19){
    x = 1200  + (w/5) * (i+1-15)-120-90;
    y = 530-y0+25;
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

//the location of the sun
function circleLocation(d,i){
  let cx = 0;
  let h = d.whenDidYouOrderIt;
  let x = 240;
  let y = 150;
  if (i<=4){
    x = (w/5) * (i+1)-120;
    y = 50;
  }else if(i<=9){
    x = (w/5) * (i+1-5)-120;
    y = 450;
  }else if (i<=14){
    x = 1200  + (w/5) * (i+1-10)-120;
    y = 50;
  }else if (i <=19){
    x = 1200  + (w/5) * (i+1-15)-120;
    y = 450;
  }
  if (h <= 1200){
    cx = (1200 - h)/10;
    x = x - cx;
    y = y + cx/2;
  }else if (h > 1200){
    cx = (h-1200)/10;
    x = x + cx;
    y = y + cx/2;
  }
  return "translate("+ x +"," + y +")";
}

function shape(d,i){
  let r1= `<style type="text/css">
  	.st0{fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;}
  	.st1{fill:#FFFFFF;}
  </style>
  <path class="st0" d="M22.7,13.3L22.7,13.3z"/>
  <path class="st1" d="M0.2,13.3C2,12.5,31.3,0.8,87.7,0.5c37.6-0.2,73,4.7,92.5,12.8"/>`
  let r2= `<style type="text/css">
  	.st0{fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;}
  	.st1{fill:#FFFFFF;}
  </style>
  <path class="st0" d="M0.3,26.1L0.3,26.1z"/>
  <path class="st1" d="M0.3,26.1C2.2,24.6,31.4,1.2,87.8,0.5c37.6-0.4,73,9.4,92.5,25.6"/>`
  let r3= `<style type="text/css">
  	.st0{fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;}
  	.st1{fill:#FFFFFF;}
  </style>
  <path class="st0" d="M0.4,35.8L0.4,35.8z"/>
  <path class="st1" d="M0.4,35.8C2.2,33.7,31.4,1.4,87.9,0.5c37.6-0.6,73,12.9,92.5,35.3"/>`
  let r4= `<style type="text/css">
  	.st0{fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;}
  	.st1{fill:#FFFFFF;}
  </style>
  <path class="st0" d="M0.4,39.7L0.4,39.7z"/>
  <path class="st1" d="M0.4,39.7C2.3,37.3,31.5,1.1,87.9,0c37.8-0.6,73.1,14.5,92.5,39.7"/>`
  let r5= `<style type="text/css">
  	.st0{fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;}
  	.st1{fill:#FFFFFF;}
  </style>
  <path class="st0" d="M0.4,51L0.4,51z"/>
  <path class="st1" d="M0.4,51C2.3,48,31.5,1.8,87.9,0.5c37.6-0.8,72.9,18.4,92.5,50.5"/>`

  if (d<=20){
    r = r1;
  }else if (d<=25){
    r = r2;
  }else if (d<=30){
    r = r3;
  }else if (d<=35){
    r = r4;
  }else if (d>35){
    r = r5;
  }
  return r;
}
