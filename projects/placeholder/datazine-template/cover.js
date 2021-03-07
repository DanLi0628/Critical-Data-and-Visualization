let w = 1200;
let h = 900;



let viz = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width",w*2)
    .attr("height",h)
    .style("background-color","#F1E9FF")
;

let box = `<style type="text/css">
.st0{fill:#D99F6A;stroke:#231815;stroke-width:3;stroke-miterlimit:10;}
.st1{fill:#DDB26A;stroke:#231815;stroke-width:3;stroke-miterlimit:10;}
.st2{fill:none;stroke:#231815;stroke-width:5;stroke-miterlimit:10;}
.st3{fill:none;stroke:#231815;stroke-width:3;stroke-miterlimit:10;}
.st4{fill:#FFFFFF;stroke:#231815;stroke-width:2;stroke-miterlimit:10;}
</style>
<rect x="76.8" y="462.2" class="st0" width="117.9" height="184.4"/>
<polygon class="st0" points="194.7,462.2 231.6,422.9 231.6,588.4 194.7,646.6 "/>
<polygon class="st1" points="76.8,462.2 117.3,422.9 231.6,422.9 194.7,462.2 "/>
<path class="st2" d="M110.7,461.9c11.2-31.8,38-104.3,52-101.1c12.6,2.8,9.5,66.1,6.9,101.5"/>
<path class="st2" d="M153,420.8c0-31.4,4.1-56.1,12.2-57.5c8.4-1.4,21.2,22.6,32,57.8"/>
<line class="st3" x1="141.3" y1="462.4" x2="136.1" y2="491.7"/>
<polygon class="st4" points="117.8,489.3 153,495.5 140.7,571.9 104.4,565.5 "/>`
viz.html(box)

//title
viz.append("text")
  .text("Delivery Food")
    .attr("x",445)
    .attr("y",170)
    .style("font-size",60)
    .style("font-family","Gill Sans")
;
//phone
viz.append("rect")
    .attr("x",950)
    .attr("y",210)
    .attr("width",90)
    .attr("height",150)
    .attr("fill","darkgrey")
;

viz.append("rect")
    .attr("x",965)
    .attr("y",230)
    .attr("width",60)
    .attr("height",80)
    .attr("fill","white")
;

viz.append("circle")
    .attr("cx",995)
    .attr("cy",340)
    .attr("r",10)
    .attr("fill","white")
;
//美团
viz.append("rect")
    .attr("x",650)
    .attr("y",250)
    .attr("width",150)
    .attr("height",150)
    .attr("fill","#FFC44E")
;

viz.append("text")
    .text("美团")
    .attr("x",675)
    .attr("y",340)
    .attr("font-size",50)
    .style("font-weight","bold")
    .attr("height",150)
    .attr("fill","black")
;

//eleme
viz.append("rect")
    .attr("x",400)
    .attr("y",250)
    .attr("width",150)
    .attr("height",150)
    .attr("fill","#53DBF8")
;

viz.append("text")
    .text("e")
    .attr("x",437)
    .attr("y",375)
    .attr("font-size",170)
    .style("font-weight","bold")
    .attr("height",150)
    .attr("fill","white")
    .attr("rotate",-15)
;

//word bubbles
viz.append("circle")
  .attr("cx",700)
  .attr("cy",600)
  .attr("r",90)
  .attr("fill","white")
  .attr("stroke","black")
;
viz.append("text")
  .text("Thank U")
  .attr("x",630)
  .attr("y",610)
  .attr("font-size",40)
  .style("font-weight","bold")
  .attr("height",150)
  .attr("fill","black")
;
viz.append("circle")
  .attr("cx",570)
  .attr("cy",570)
  .attr("r",70)
  .attr("fill","white")
  .attr("stroke","black")
;
viz.append("text")
  .text("饿")
  .attr("x",530)
  .attr("y",590)
  .attr("font-size",70)
  .attr("height",150)
  .attr("fill","black")
;

viz.append("circle")
  .attr("cx",200)
  .attr("cy",150)
  .attr("r",90)
  .attr("fill","white")
  .attr("stroke","black")
;
viz.append("text")
  .text("Hungry")
  .attr("x",137)
  .attr("y",160)
  .attr("font-size",40)
  .attr("height",150)
  .attr("fill","black")
  .style("font-weight","bold")
;

viz.append("text")
  .text("Linda")
  .attr("x",1050)
  .attr("y",700)
  .attr("font-size",30)
  .attr("fill","purple")
;

viz.append("text")
    .text()
