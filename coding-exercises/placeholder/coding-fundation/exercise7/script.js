let w = 1200;
let h = 800;
let padding = 90

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "lavender")
;


// IMPORT DATA
d3.json("countries.geojson").then(function(geoData){
  d3.csv("countrydata.csv").then(function(incomingData){

    incomingData = incomingData.map(function(d,i){
      d.population = Number(d.population);
      return d;
    })

    let minPop = d3.min(incomingData,function(d,i){
      return d.population;
    })

    let maxPop = d3.max(incomingData,function(d,i){
      return d.population;
    })
    console.log(minPop,maxPop);

    let colorScale = d3.scaleLinear().domain([minPop,maxPop]).range(["white","red"])

    // PRINT DATA
    console.log(geoData);

    // SCALES (to translate data values to pixel values)
    // let xDomain = d3.extent(incomingData, function(d){ return Number(d.year); })
    // let xScale = d3.scaleLinear().domain(xDomain).range([padding,w-padding]);
    // let yDomain = d3.extent(incomingData, function(d){ return Number(d.birthsPerThousand); })
    // let yScale = d3.scaleLinear().domain(yDomain).range([h-padding,padding]);


    // PATH (line) MAKER - gets points, returns one of those complicated looking path strings
    let projection = d3.geoEqualEarth()
    .translate([w/2,h/2])
    .center([103.8,34.1])
    .fitExtent([[padding,padding],[w-padding,h-padding]],geoData)
    ;




    let pathMaker = d3.geoPath(projection);

    // CREATE SHAPES ON THE PAGE!
  viz.selectAll(".province").data(geoData.features).enter()
    .append("path")
    .attr("class", "province")
    .attr("d", pathMaker)
    .attr("fill", "black")
    .attr("stroke", "white")
    ;

    //let pixelvalue = projection([longitude,latitude]);

    viz.selectAll(".circles").data(geoData.features).enter()
      .append("circle")
      .attr("cx", function(d,i){
        let correspondingDataPoint = incomingData.find(function(datapoint){
          if (datapoint.country == d.properties.name){
            return true
          }else{
            return false;
          }
        })
        if (correspondingDataPoint != undefined){
          longitude = Number(correspondingDataPoint.longitude);
          lon = projection([longitude,0]);
        }
        console.log(lon[0]);
        return lon[0];
      })
      .attr("cy",function(d,i){
        let correspondingDataPoint = incomingData.find(function(datapoint){
          if (datapoint.country == d.properties.name){
            return true
          }else{
            return false;
          }
        })
        if (correspondingDataPoint != undefined){
          latitude = Number(correspondingDataPoint.latitude);
          lat = projection([0,latitude])
        }
        console.log(lat[1]);
        return lat[1];
      })
      .attr("r",3)
      .attr("fill","red")
    ;


  })





})
