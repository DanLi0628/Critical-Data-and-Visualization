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
  cost = [0];
  colorBowl = ["red","purple","pink","orange","blue","yellow","green"];
  colorBar = ["grey","orange","pink","green"];

  let customShapes = viz.selectAll(".shapes").data(cost).enter()
    .append("g")
      .attr("class","customShape")
      .html(shape)
  ;
  customShapes.attr("transform","translate(300,155)");

  let legend1 = viz.selectAll(".bowlColor").data(colorBowl).enter()
  .append("g")
    .attr("class","bowlColor")
  ;

  let legend2 = viz.selectAll(".barColor").data(colorBar).enter()
  .append("g")
    .attr("class","barColor")
  ;

  legend2.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",20)
    .attr("height",20)
    .attr("fill",barColor)
  ;

  legend2.append("text")
    .text(motivation)
      .attr("x",-200)
      .attr("y",15)
      .attr("font-size",20)

  legend2.attr("transform",legend2Location);


  legend1.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",20)
    .attr("height",20)
    .attr("fill",color)
  ;

  legend1.append("text")
    .text(food)
      .attr("x",30)
      .attr("y",15)
      .attr("font-size",20)

  legend1.attr("transform",legend1Location);

}

function color(d,i){
  let c = "";
  if (d == "pink"){
    c = "pink";
  }else if (d == "green"){
    c = "#80FC80";
  }else if (d == "red"){
    c = "#FCA09C";
  }else if (d == "orange"){
    c = "#FCD99C";
  }else if (d == "blue"){
    c = "#ABECFF";
  }else if (d == "yellow"){
    c = "lightYellow";
  }else if (d == "purple"){
    c = "#DD9CFC";
  }
  console.log(d,c);
  return c;
}

function food(d,i){
  if (d == "pink"){
    c = "dessert";
  }else if (d == "green"){
    c = "healthy food";
  }else if (d == "red"){
    c = "spicy food";
  }else if (d == "orange"){
    c = "hamburger";
  }else if (d == "blue"){
    c = "Japanese food";
  }else if (d == "yellow"){
    c = "rice/dumpling";
  }else if (d == "purple"){
    c = "Korean food";
  }
  return c;
}


function barColor(d,i){
  let c =''
  if (d=="green"){
    c="#AEFDD4"
  }else if (d == "orange"){
    c = "orange"
  }else if (d=="pink"){
    c="#F9A6FE"
  }else if (d=="grey"){
    c="#575855"
  }
  return c
}

function motivation(d,i){
  let c =''
  if (d=="green"){
    c="for a healthy diet"
  }else if (d == "orange"){
    c = "don't wanna study"
  }else if (d=="pink"){
    c="treat my friend"
  }else if (d=="grey"){
    c="dinner"
  }
  return c
}




function legend1Location(d,i){
  console.log(i);
  let x = 850;
  let y = (i+2)*60;
  return "translate("+ x +"," + y +")";
}

function legend2Location(d,i){
  console.log(i);
  let x = 400;
  let y = (i+8)*60;
  return "translate("+ x +"," + y +")";
}


function shape(d,i){
  rice = `<style>.cls-1{fill:#fff;}</style></defs>
  <path class="cls-1" d="M.7,84.6h0Z"/>
  <path class="cls-1" d="M0,83.11C3,78.4,57.12-2.56,155,.06c91.3,2.45,140.67,75.43,145,82.15"/>`
  return  rice
}

let arcGenerator = d3.arc()
    .outerRadius(150)
    .innerRadius(0)
    .startAngle(Math.PI/2)
    .endAngle(Math.PI*1.5)
  ;

viz.append("text")
  .text("How To Read")
  .attr("x",100)
  .attr("y",100)
  .attr("font-size",50)

viz.append("circle")
  .attr("cx",270)
  .attr("cy",150)
  .attr("r",20)
  .attr("fill","red")
;

viz.append("text")
  .text("sun")
  .attr("x",230)
  .attr("y",210)
  .attr("font-size",30)
;

viz.append("text")
  .text("(order time)")
  .attr("x",120)
  .attr("y",240)
  .attr("font-size",30)
;

viz.append("rect")
  .attr("width",200)
  .attr("height",20)
  .attr("x",500)
  .attr("y",550)
  .attr("fill","grey")
;

viz.append("text")
  .text("length: time (min)")
    .attr("x",500)
    .attr("y",620)
    .attr("font-size",30)


viz.append("rect")
  .attr("width",50)
  .attr("height",20)
  .attr("x",500)
  .attr("y",650)
  .attr("fill","green")
;
viz.append("text")
  .text("red: arrive late")
    .attr("x",500)
    .attr("y",700)
    .attr("font-size",20)
;
viz.append("text")
  .text("green: arrive early")
    .attr("x",500)
    .attr("y",730)
    .attr("font-size",20)
;
viz.append("text")
  .text("rice height: cost")
    .attr("x",500)
    .attr("y",150)
    .attr("font-size",30)



viz.append("path")
  .attr("transform","translate(450,240)")
  .attr("d",arcGenerator)
  .attr("fill","#DD9CFC")
;

viz.append("rect")
  .attr("x",370)
  .attr("y",370)
  .attr("width",160)
  .attr("height",40)
  .attr("fill","darkGrey")
;
