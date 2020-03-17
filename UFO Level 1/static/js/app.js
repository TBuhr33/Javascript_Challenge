// from data.js
var tableData = data;
console.log(tableData);

// reference the table body
var tbody = d3.select("tbody");

// forEach function for the  UFO data
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);

    // append a tr for each UFO sighting
    var row = tbody.append("tr");
    // use object.entires to add to console each UFO sighting
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // append a cell to the row for each 
      var cell = row.append("td");
      cell.text(value);
    });
  });

// select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");
    // select the input date get html data
    var inputElement = d3.select("#datetime");
    // get the values for input date, shape etc.
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // filter datetime equals input 
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // add the fileter values to console
    console.log(filteredData);

    //forEach function for filter
    filteredData.forEach(function(selections) {
    console.log(selections);

    // append a tr for each UFO sighting
    var row = tbody.append("tr");
    // use object.entires to add to console each UFO sighting
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // append a cell to the row for each
        var cell = row.append("td");
        cell.text(value);
    });
});
});