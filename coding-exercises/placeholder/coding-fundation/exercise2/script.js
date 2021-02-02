// the function dates a data
// arrayn as an argument
function averageData(data){
  // new empty array to be filled
  // with data in new structure
  let newData = [];
  // assuming each data point has the same
  // keys/categories, we extract an array of them from the
  // first data point in the array
  // in class we changed it to the last element instead
  // as the first one did not have all the categories filled out
  // there is more thorough ways to do this, but for out purposes
  // now, this will be enough
  let keys = Object.keys(data[0]);
  // now we loop over the keys/categories
  for(let i = 0; i < keys.length; i++){
    // store the current key/category in
    // a variable:
    let key = keys[i];
    // now we will loop over each data point
    // in the data set, check if it has a value
    // for the key/category and add them to
    // a total sum variable
    // as well as count the occurences in order to
    // calulate the averae in the end
    let sum = 0;
    let num = 0;
    for(let j = 0; j < data.length; j++){
      let datum = data[j];
      // check if the key exists
      // for this datapoint
      if(key in datum){
        // add to sum
        sum += datum[key];
        // increase count
        num++;
      }
    }
    // now calculate the average
    let avg = sum/num;
    // make sure the value is a number
    // (some value might be strings)
    if(!isNaN(avg)){
      // create an object with both the average
      // and also the number of measurements that
      // went into the average
      let newDataPoint = {"name": key, "average": avg, 'numMeasurements': num};
      // add the new datapoint to the new data array
      newData.push(newDataPoint);
    }
  }
  // return everything when it is done
  return newData;
}

var transformedData = averageData(data);
console.log(transformedData);
container = document.getElementById('container');

for (var i = 1; i < transformedData.length; i++){
  var bar = document.createElement('div');
  bar.className='bar';
  var barWidth = transformedData[i].average;
  bar.style.width = (barWidth*200)+"px";
  console.log(transformedData.average);

  var film = document.createElement('div');
  film.className = 'film';
  film.style.color = 'white';
  film.innerHTML = transformedData[i].name;

  var number = document.createElement('span');
  number.className = 'number';
  number.innerHTML = transformedData[i].average.toFixed(2);

  container.appendChild(bar);
  bar.appendChild(film);
  film.appendChild(number);
}
