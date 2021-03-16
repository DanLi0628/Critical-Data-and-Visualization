console.log("hi");
//data from https://towardsdatascience.com/how-to-build-animated-charts-like-hans-rosling-doing-it-all-in-r-570efc6ba382

let w = 1200;
let h = 800;
let xPadding = 50;
let yPadding = 50;

let viz = d3.select("#container")
  .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "lavender")
;


function gotData(incomingData){
  console.log(incomingData);

  // min max fertility rate (for xScale)
  let fertExtent = d3.extent(incomingData, function(d, i){
    return d.fert;
  });
  console.log("fertExtent", fertExtent);

  // make the xscale which we use to locate points along the xaxis
  let xScale = d3.scaleLinear().domain(fertExtent).range([xPadding, w-xPadding]);


  // min max life expectancy
  let lifeExtent = d3.extent(incomingData, function(d, i){
    return d.life;
  });
  console.log("lifeExtent", lifeExtent);

  // make the yscale which we use to locate points along the yaxis
  let yScale = d3.scaleLinear().domain(lifeExtent).range([h-yPadding, yPadding]);

  // using the function defined at the bottom of this script to build two axis
  buildXAndYAxis(xScale, yScale);


  // min max Population
  let popExtent = d3.extent(incomingData, function(d, i){
    return d.pop;
  });
  console.log("popExtent", popExtent);
  // you may use this scale to define a radius for the circles
  let rScale = d3.scaleLinear().domain(popExtent).range([5, 50]);




  // the simple out put of this complicated bit of code,
  // is an array of all the years the data talks about.
  // the "dates" array looks like:
  // ["1962", "1963", "1964", "1965", ... , "2012", "2013", "2014", "2015"]
  let dates = incomingData.reduce(function(acc,d,i){
    if(!acc.includes(d.year)){
      acc.push(d.year)
    }
    return acc
  }, [])

  console.log("dates", dates);

  // this block of code is needed to select a subsection of the data (by year)
  let currentYearIndex = 0;
  let currentYear = dates[currentYearIndex];
  function filterYear(d, i){
    if(d.year == currentYear){
      return true;
    }else{
      return false;
    }
  }











  // make a group for all things visualization:
  let vizGroup = viz.append("g").attr("class", "vizGroup");


  // this function is called every second.
  // inside it is a data variable that always carries the "latest" data of a new year
  // inside it we want to draw shapes and deal wirth both updating and entering element.
  function drawViz(){

    let currentYearData = incomingData.filter(filterYear);
    console.log("---\nthe currentYearData array now carries the data for year", currentYear);


    // Below here is where your coding should take place! learn from lab 6:
    // https://github.com/leoneckert/critical-data-and-visualization-spring-2020/tree/master/labs/lab-6
    // the three steps in the comments below help you to know what to aim for here

    // bind currentYearData to elements
    function getGroupLocation(d,i){
      let x = xScale(d.fert);
      let y = yScale(d.life);
      return "translate(" + x + "," + y + ")";
    }

    let datagroups = vizGroup.selectAll(".datagroup").data(currentYearData,function(d,i){
      console.log(d.Country);
      return d.Country;
    });

    // take care of entering elements
    let enteringElements = datagroups.enter()
      .append("g")
        .attr("class","datagroup")
    ;

    enteringElements.append("circle")
        .attr("r",10)
        .attr("fill",color)
    ;

    enteringElements.append("text")
      .text(function(d,i){
        return d.Country;
      })
      .attr("x",12)
      .attr("y",7)
      .attr("font-family","sans-serif")
      .attr("font-size","15px")
      .attr("fill","purple")
    ;

    // take care of updating elements
    enteringElements.transition().attr("transform",getGroupLocation);
    datagroups.transition().ease(d3.easeLinear).attr("transform",getGroupLocation);

    function color(d,i){
      country = d.Country;
      if (country == "Afghanistan" || country == "Albania" || country == "Algeria" || country == "Angola" || country == "Argentina" || country == "Australia" || country == "Austria"){
        color = "#9FE7F7";
      }else if (country == "Bahrain" || country == "Bangladesh" || country == "Belgium" || country == "Benin" || country == "Bolivia" || country == "Bosnia and Herzegovina" || country == "Botswana" || country == "Brazil" || country == "Bulgaria" || country == "Burkina Faso" || country == "Burundi"){
        color = "#F7D59F";
      }else if (country == "Cambodia" || country == "Cameroon" || country == "Canada" || country == "Central African Republic" || country == "Chad" || country == "Chile" || country == "China" || country == "Colombia" || country == "Comoros" || country == "Congo, Dem. Rep." || country == "Congo, Rep." || country == "Costa Rica" || country == "Cote d'Ivoire" || country == "Croatia" || country == "Cuba" || country == "Czech Republic"){
        color = "#F7F39F"
      }else if (country == "Denmark" || country == "Djibouti" || country == "Dominican Republic" ){
        color = "#D9F99C"
      }else if (country == "Ecuador" || country == "Egypt" || country == "El Salvador" || country == "Equatorial Guinea" || country == "Eritrea" || country == "Ethiopia" ){
        color = "#C1C1FB"
      }else if (country == "Finland" || country == "France"  ){
        color = "#EFC1FB"
      }else if (country == "Gabon" || country == "Gambia" || country == "Germany" || country == "Ghana" || country == "Greece" || country == "Guatemala" || country == "Guinea" || country == "Guinea-Bissau" ){
        color = "#C1DFFB"
      }else if (country == "Haiti" || country == "Honduras" || country == "Hong Kong, China" || country == "Hungary"){
        color = "#3297F6"
      }else if (country == "Iceland" || country == "India" || country == "Indonesia" || country == "Iran" || country == "Iraq" || country == "Ireland" || country == "Israel" || country == "Italy"){
        color = "#6FFBAC"
      }else if (country == "Jamaica" || country == "Japan" || country == "Jordan" ){
        color = "#FBD86F"
      }else if (country == "Kenya" || country == "Kuwait" ){
        color = "#FEA4B2"
      }else if (country == "Lebanon" || country == "Lesotho" || country == "Liberia" || country == "Libya"){
        color = "#FC6179"
      }else if (country == "Madagascar" || country == "Malawi" || country == "Malaysia" || country == "Mali" || country == "Mauritania" || country == "Mauritius" || country == "Mexico" || country == "Mongolia" || country == "Montenegro" || country == "Morocco" || country == "Mozambique" || country == "Myanmar" ){
        color = "#F7A5E4"
      }else if (country == "Namibia" || country == "Nepal" || country == "Netherlands" || country == "New Zealand" || country == "Nicaragua" || country == "Niger" || country == "Nigeria" || country == "Norway"){
        color = "#4E62F7"
      }else if (country == "Oman"){
        color = "#4EF7E5"
      }else if (country == "Pakistan" || country == "Panama" || country == "Paraguay" || country == "Peru" || country == "Philippines" || country == "Poland" || country == "Portugal" || country == "Puerto Rico" ){
        color = "#D2AF6D"
      }else if (country == "Reunion" || country == "Romania" || country == "Rwanda"){
        color = "#6DD295"
      }else if (country == "Sao Tome and Principe" || country == "Saudi Arabia" || country == "Senegal" || country == "Serbia" || country == "Sierra Leone" || country == "Singapore" || country == "Slovak Republic" || country == "Slovenia" || country == "Somalia" || country == "South Africa" || country == "Spain" || country == "Sri Lanka" || country == "Sudan" || country == "Swaziland" || country == "Sweden" || country == "Switzerland" || country == "Syria"){
        color = "#D2976D"
      }else if (country == "Taiwan" || country == "Tanzania" || country == "Thailand" || country == "Togo" || country == "Trinidad and Tobago" || country == "Tunisia" || country == "Turkey"){
        color = "#6D6FD2"
      }else if (country == "Uganda" || country == "United Kingdom" || country == "United States" || country == "Uruguay"){
        color = "#74C443"
      }else if (country == "Venezuela" || country == "Vietnam"){
        color = "#E88022"
      }else if (country == "West Bank and Gaza"){
        color = "#139236"
      }else if (country == "Zambia" || country == "Zimbabwe"){
        color = "white"
      }
      return color;
    }

  }




  // this puts the YEAR onto the visualization
  let year = viz.append("text")
      .text("")
      .attr("x", 100)
      .attr("y", h-100)
      .attr("font-family", "sans-serif")
      .attr("font-size", "2.7em")

  ;

  // this called the drawViz function every second
  // and changes the year of interest
  // and updates the text element that displays the year.
  setInterval(function(){
    currentYearIndex++;
    if(currentYearIndex>dates.length){
      currentYearIndex = 0;
    }
    currentYear = dates[currentYearIndex];
    year.text(currentYear)
    drawViz();
  }, 200);






}


// load data
d3.csv("data.csv").then(gotData);





// function to build x anc y axis.
// the only reasons these are down here is to make the code above look less polluted

function buildXAndYAxis(xScale, yScale){
  let xAxisGroup = viz.append("g").attr("class", 'xaxis');
  let xAxis = d3.axisBottom(xScale);
  xAxisGroup.call(xAxis)
  xAxisGroup.attr("transform", "translate(0, "+ (h-yPadding) +")")
  xAxisGroup.append("g").attr('class', 'xLabel')
    .attr("transform", "translate("+w/2+", 40)")
    .append("text")
    .attr("fill", "black")
    .text("fertility")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.7em")

  ;

  let yAxisGroup = viz.append("g").attr("class", 'yaxis');
  let yAxis = d3.axisLeft(yScale);
  yAxisGroup.call(yAxis)
  yAxisGroup.attr("transform", "translate("+xPadding+", 0)")

  yAxisGroup.append("g").attr('class', 'xLabel')
    .attr("transform", "translate(-33, "+h/2+") rotate(-90)")
    .append("text")
    .attr("fill", "black")
    .text("life expectancy")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1.7em")

  ;
}
