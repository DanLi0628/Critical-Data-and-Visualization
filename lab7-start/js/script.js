//step1: build buttons on the page
function add(){
  addDatapoints(1);
  console.log("new data", data);
  allNames = data.map(function(d){return d.key});

  xScale.domain(allNames);

  yMax = d3.max(data, function(d){return d.value});
  yScale.domain(yDomain);

  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);

  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  enteringElements = elementsForPage.enter();
  //exitingElements = elementsForPage.exit();
  // elementsForPage.attr("transform", function(d, i){
  //   return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  // });
  elementsForPage.transition().duration(500).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
    .transition()
    .delay(1000)
    .duration(200)
    .attr("width", function(){
      return xScale.bandwidth();
  })
    .attr("y", function(d,i){
      return -yScale(d.value);
  })
    .attr("height", function(d, i){
      return yScale(d.value);
  })
  ;
let incomingDataGroups = enteringElements
  .append("g")
    .classed("datapoint", true)
;
incomingDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
incomingDataGroups
  .append("rect")
    .attr("y", function(d,i){
      return 0;
    })
    .attr("height", function(d, i){
      return 0;
    })
    .attr("width", function(){
      return xScale.bandwidth();
    })
    .attr("fill", "#F27294")
    .transition()
    .delay(200)
    .duration(1000)
    .attr("y", function(d,i){
      return -yScale(d.value);
    })
    .attr("height", function(d, i){
      return yScale(d.value);
    })
    .attr("fill", "black")
 ;
}
document.getElementById("buttonA").addEventListener("click", add);

function remove(){
  removeDatapoints(1);
  allNames = data.map(function(d){return d.key});

  xScale.domain(allNames);

  yMax = d3.max(data, function(d){return d.value});
  yScale.domain(yDomain);

  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);

  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  exitingElements = elementsForPage.exit();
  exitingElements.remove();
  console.log(elementsForPage);
  //enteringElements = elementsForPage.enter();
  elementsForPage.attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.transition().duration(500).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });

  elementsForPage.select("rect")
    .transition()
    .delay(1000)
    .duration(200)
    .attr("width", function(){
      return xScale.bandwidth();
  })
    .attr("y", function(d,i){
      return -yScale(d.value);
  })
    .attr("height", function(d, i){
      return yScale(d.value);
  })
  ;
  // let incomingDataGroups = exitingElements
  //   .append("g")
  //     .classed("datapoint", true)
  // ;
  // incomingDataGroups.attr("transform", function(d, i){
  //   return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  // });
  // incomingDataGroups
  //   .append("rect")
  //     .attr("y", function(d,i){
  //       return 0;
  //     })
  //     .attr("height", function(d, i){
  //       return 0;
  //     })
  //     .attr("width", function(){
  //       return xScale.bandwidth();
  //     })
  //     .attr("fill", "black")
  //     .transition()
  //     .delay(200)
  //     .duration(1000)
  //     .attr("y", function(d,i){
  //       return -yScale(d.value);
  //     })
  //     .attr("height", function(d, i){
  //       return yScale(d.value);
  //     })
  //     .attr("fill", "blue")
  //  ;
  }
document.getElementById("buttonB").addEventListener("click", remove);

function removeAndAdd(){
  removeDatapoints(Math.random()*3);
  allNames = data.map(function(d){return d.key});

  xScale.domain(allNames);

  yMax = d3.max(data, function(d){return d.value});
  yScale.domain(yDomain);

  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);

  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  exitingElements = elementsForPage.exit();
  exitingElements.remove();
  console.log(elementsForPage);
  //enteringElements = elementsForPage.enter();
  elementsForPage.attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.transition(1000).duration(2000).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });

  elementsForPage.select("rect")
    .transition()
    .delay(1000)
    .duration(200)
    .attr("width", function(){
      return xScale.bandwidth();
  })
    .attr("y", function(d,i){
      return -yScale(d.value);
  })
    .attr("height", function(d, i){
      return yScale(d.value);
  })
  ;

  addDatapoints(Math.random()*3);
  console.log("new data", data);
  allNames = data.map(function(d){return d.key});

  xScale.domain(allNames);

  yMax = d3.max(data, function(d){return d.value});
  yScale.domain(yDomain);

  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);

  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  enteringElements = elementsForPage.enter();
  //exitingElements = elementsForPage.exit();
  // elementsForPage.attr("transform", function(d, i){
  //   return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  // });
  elementsForPage.transition().duration(500).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
    .transition()
    .delay(1000)
    .duration(200)
    .attr("width", function(){
      return xScale.bandwidth();
  })
    .attr("y", function(d,i){
      return -yScale(d.value);
  })
    .attr("height", function(d, i){
      return yScale(d.value);
  })
  ;
let incomingDataGroups = enteringElements
  .append("g")
    .classed("datapoint", true)
;
incomingDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
incomingDataGroups
  .append("rect")
    .attr("y", function(d,i){
      return 0;
    })
    .attr("height", function(d, i){
      return 0;
    })
    .attr("width", function(){
      return xScale.bandwidth();
    })
    .attr("fill", "#F27294")
    .transition()
    .delay(200)
    .duration(1000)
    .attr("y", function(d,i){
      return -yScale(d.value);
    })
    .attr("height", function(d, i){
      return yScale(d.value);
    })
    .attr("fill", "black")
 ;
}
document.getElementById("buttonC").addEventListener("click", removeAndAdd);

function sortData(){
  sortDatapoints();
  allNames = data.map(function(d){return d.key});

  xScale.domain(allNames);

  yMax = d3.max(data, function(d){return d.value});
  yScale.domain(yDomain);

  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);
  console.log("new data", data);
  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  elementsForPage.transition().duration(100).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
    .transition()
    .delay(100)
    .duration(200)
    .attr("width", function(){
      return xScale.bandwidth();
  })
    .attr("y", function(d,i){
      return -yScale(d.value);
  })
    .attr("height", function(d, i){
      return yScale(d.value);
  })
  ;
}
document.getElementById("buttonD").addEventListener("click", sortData);

function shuffleData(){
  shuffleDatapoints();
  allNames = data.map(function(d){return d.key});

  xScale.domain(allNames);

  yMax = d3.max(data, function(d){return d.value});
  yScale.domain(yDomain);

  xAxisGroup.transition().call(xAxis).selectAll("text").attr("font-size", 18);
  console.log("new data", data);
  elementsForPage = graphGroup.selectAll(".datapoint").data(data);
  elementsForPage.transition().duration(100).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });
  elementsForPage.select("rect")
    .transition()
    .delay(100)
    .duration(200)
    .attr("width", function(){
      return xScale.bandwidth();
  })
    .attr("y", function(d,i){
      return -yScale(d.value);
  })
    .attr("height", function(d, i){
      return yScale(d.value);
  })
  ;
}
document.getElementById("buttonE").addEventListener("click", shuffleData);

//step2: settings
let w = 800;
let h = 500;
let padding = 50;
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
;

//step3: x-axis
let allNames = data.map(function(d){return d.key});
console.log(allNames);
let xScale = d3.scaleBand()
    .domain(allNames)
    .range([padding, w-padding])
    .paddingInner(0.1)
;
let xAxis = d3.axisBottom(xScale);
xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});
let xAxisGroup = viz.append("g").classed("xAxis", true);
xAxisGroup.call(xAxis);
xAxisGroup.selectAll("text").attr("font-size", 24).attr("y", 9);
xAxisGroup.selectAll("line").remove();
xAxisGroup.attr("transform", "translate(0,"+ (h-padding) +")")

//step4: y-axis
let yMax = d3.max(data, function(d){return d.value});
yDomain = [0, yMax];
let yScale = d3.scaleLinear().domain(yDomain).range([0, h-padding*2]);

//step5: create a group
let graphGroup = viz.append("g").classed("graphGroup", true);

//step6
let elementsForPage = graphGroup.selectAll(".datapoint").data(data);
console.log("D3's assessment of whats needed on the page:", elementsForPage);

//step7
let enteringElements = elementsForPage.enter();
let exitingElements = elementsForPage.exit();
console.log("enteringElements", enteringElements);
console.log("exitingElements", exitingElements);

//entering elements
let enteringDataGroups = enteringElements.append("g").classed("datapoint", true);
enteringDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});
enteringDataGroups
  .append("rect")
    .attr("width", function(){
      return xScale.bandwidth();
    })
    .attr("height", function(d, i){
      return yScale(d.value);
    })
    .attr("y", function(d,i){
      return -yScale(d.value);
    })
    .attr("fill", "black")
;
