w = 1200;
h = 680;
let xpadding = 100;
let ypadding = 50;

var svg = d3.select("div#container")
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 "+w+" "+h)
  .classed("svg-content", true)
  .style("background-color", "lavender")
;


svg.append("text")
    .text("Here is the conclusion! As is shown left, surprisingly")
    .attr("x",650)
    .attr("y",100)
    .attr("font-size",25)
    .attr("font-family","Times New Roman")
  ;
svg.append("text")
  .text("Monday and Friday attract more tourists. It is because")
  .attr("x",650)
  .attr("y",130)
  .attr("font-size",25)
  .attr("font-family","Times New Roman")
;
svg.append("text")
    .text("the weekend tickets are more expensive, so people")
    .attr("x",650)
    .attr("y",160)
    .attr("font-size",25)
    .attr("font-family","Times New Roman")
  ;
svg.append("text")
  .text("tend to go to Disney on weekdays. Monday, most")
  .attr("x",650)
  .attr("y",190)
  .attr("font-size",25)
  .attr("font-family","Times New Roman")
;
svg.append("text")
    .text("people will go to work, a great choice! Friday, after")
    .attr("x",650)
    .attr("y",220)
    .attr("font-size",25)
    .attr("font-family","Times New Roman")
  ;
svg.append("text")
    .text("a week's hard work, reward myself!")
    .attr("x",650)
    .attr("y",250)
    .attr("font-size",25)
    .attr("font-family","Times New Roman")
  ;

  svg.append("text")
      .text("Some Stories")
      .attr("x",650)
      .attr("y",350)
      .attr("font-size",35)
      .attr("font-family","Times New Roman")
    ;

svg.append("text")
    .text("2017.11.15, Disney prohibits bringing your own food")
    .attr("x",650)
    .attr("y",380)
    .attr("font-size",25)
    .attr("font-family","Times New Roman")
  ;
  svg.append("text")
      .text("2019.01 Graduate student Wang took Disney to court")
      .attr("x",650)
      .attr("y",410)
      .attr("font-size",25)
      .attr("font-family","Times New Roman")
    ;
svg.append("text")
    .text("2019.09.07 Tourists are allowed to bring food")
    .attr("x",650)
    .attr("y",440)
    .attr("font-size",25)
    .attr("font-family","Times New Roman")
  ;
svg.append("text")
    .text("2019.09.07 Tourists are allowed to bring food")
    .attr("x",650)
    .attr("y",440)
    .attr("font-size",25)
    .attr("font-family","Times New Roman")
  ;
svg.append("text")
    .text("2019.04.26 Disney opened marvel theme park")
    .attr("x",650)
    .attr("y",470)
    .attr("font-size",25)
    .attr("font-family","Times New Roman")
  ;
svg.append("text")
    .text("2020.01.25 It was shut down due to the pandemic")
    .attr("x",650)
    .attr("y",500)
    .attr("font-size",25)
    .attr("font-family","Times New Roman")
  ;
svg.append("text")
    .text("2020.05.11 It reopened and tourists started to queue")
    .attr("x",650)
    .attr("y",530)
    .attr("font-size",25)
    .attr("font-family","Times New Roman")
  ;
  svg.append("text")
      .text("at 6 am.")
      .attr("x",765)
      .attr("y",560)
      .attr("font-size",25)
      .attr("font-family","Times New Roman")
    ;




d3.json("day.json").then(gotData);

function gotData(incomingData){

  console.log(incomingData);
  incomingData = fixJSDateObjects(incomingData);

    // temporarily flatten data to get the minima/maxima:
    let flatData = d3.merge(incomingData)
    // we can use a  time scale because our data expresses
    // years in the form of JS date objects
    let xDomain = d3.extent(flatData, function(d){ return d.month });
    let xScale = d3.scaleLinear().domain(xDomain).range([xpadding/2, (w-xpadding)/2]);
    let xAxis = d3.axisBottom(xScale);
    let xAxisGroup = svg.append("g")
        .attr("class", "xaxisgroup")
        .attr("transform", "translate(0,"+(h-ypadding)+")")
    ;
    xAxisGroup.call(xAxis);

    let yMax = d3.max(flatData, function(d){
      return d.time;
    })
    let yDomain = [0, yMax];
    let yScale = d3.scaleLinear().domain(yDomain).range([(h-ypadding), ypadding/2]);
    let yAxis = d3.axisLeft(yScale);
    let yAxisGroup = svg.append("g")
        .attr("class", "yaxisgroup")
        .attr("transform", "translate("+(xpadding/2)+",0)")
    ;
    yAxisGroup.call(yAxis);

    //line maker
    let lineMaker = d3.line()
      .x(function(d,i){
        return xScale(d.month);
      })
      .y(function(d,i){
        return yScale(d.time);
      })
    ;

    //separate us and china data
    let graphGroup = svg.append("g").attr("class", "line");
    let button1Data = [];
    let button2Data = [];
    let button3Data = [];
    let button4Data = [];
    let button5Data = [];
    let button6Data = [];
    let button7Data = [];

    button1Data.push(incomingData[0]);
    button2Data.push(incomingData[1])
    button3Data.push(incomingData[2]);
    button4Data.push(incomingData[3])
    button5Data.push(incomingData[4]);
    button6Data.push(incomingData[5])
    button7Data.push(incomingData[6]);

    function button1(){
      //enter elements
      graphGroup.selectAll(".line").data(button1Data).enter()
        .append("path")
        .attr("d", lineMaker)
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("stroke","blue")
        .attr("class","line")
        ;
      //transition
      graphGroup.selectAll(".line").data(button1Data)
        .transition()
        .attr("d",lineMaker)
        .attr("stroke","blue")
      ;
    }
    function button2(){
      //enter elements
      graphGroup.selectAll(".line").data(button2Data).enter()
        .append("path")
        .attr("d", lineMaker)
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("stroke","red")
        .attr("class","line")
        ;
      //transition
      graphGroup.selectAll(".line").data(button2Data)
        .transition()
        .attr("d",lineMaker)
        .attr("stroke","red")
      ;
    }

    function button3(){
      //enter elements
      graphGroup.selectAll(".line").data(button3Data).enter()
        .append("path")
        .attr("d", lineMaker)
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("stroke","green")
        .attr("class","line")
        ;
      //transition
      graphGroup.selectAll(".line").data(button3Data)
        .transition()
        .attr("d",lineMaker)
        .attr("stroke","green")
      ;
    }
    function button4(){
      //enter elements
      graphGroup.selectAll(".line").data(button4Data).enter()
        .append("path")
        .attr("d", lineMaker)
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("stroke","lightBlue")
        .attr("class","line")
        ;
      //transition
      graphGroup.selectAll(".line").data(button4Data)
        .transition()
        .attr("d",lineMaker)
        .attr("stroke","lightBlue")
      ;
    }
    function button5(){
      //enter elements
      graphGroup.selectAll(".line").data(button5Data).enter()
        .append("path")
        .attr("d", lineMaker)
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("stroke","pink")
        .attr("class","line")
        ;
      //transition
      graphGroup.selectAll(".line").data(button5Data)
        .transition()
        .attr("d",lineMaker)
        .attr("stroke","pink")
      ;
    }
    function button6(){
      //enter elements
      graphGroup.selectAll(".line").data(button6Data).enter()
        .append("path")
        .attr("d", lineMaker)
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("stroke","brown")
        .attr("class","line")
        ;
      //transition
      graphGroup.selectAll(".line").data(button6Data)
        .transition()
        .attr("d",lineMaker)
        .attr("stroke","brown")
      ;
    }
    function button7(){
      //enter elements
      graphGroup.selectAll(".line").data(button7Data).enter()
        .append("path")
        .attr("d", lineMaker)
        .attr("fill", "none")
        .attr("stroke-width", 5)
        .attr("stroke","orange")
        .attr("class","line")
        ;
      //transition
      graphGroup.selectAll(".line").data(button7Data)
        .transition()
        .attr("d",lineMaker)
        .attr("stroke","orange")
      ;
    }


  //click button to transfer
  document.getElementById("Mon").addEventListener("click", button1);
  document.getElementById("Tue").addEventListener("click",button2);
  document.getElementById("Wed").addEventListener("click", button3);
  document.getElementById("Thu").addEventListener("click",button4);
  document.getElementById("Fri").addEventListener("click", button5);
  document.getElementById("Sat").addEventListener("click",button6);
  document.getElementById("Sun").addEventListener("click", button7);

}

function fixJSDateObjects(dataToFix){
  // timeParser

  return dataToFix.map(function(data){
    return data.map(function(d){
      return {
        "day": d.day,
        "month": d.month,
        "time": d.time
      }
    })
  });
}
