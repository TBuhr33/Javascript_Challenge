//Everything for this is the same;
//except for the filter selections
var tableData = data;
console.log(tableData);
var tbody = d3.select("tbody");
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");
    //select by any input, instead of just dt
    var inputElement = d3.select("#input");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //add filters other than, use || for mulitple 
    var filteredData = tableData.filter(
      sighting => sighting.datetime === inputValue ||
      sighting.city === inputValue ||
      sighting.state === inputValue ||
      sighting.country === inputValue ||
      sighting.shape === inputValue);
      
    console.log(filteredData);
    filteredData.forEach(function(selections) {
    console.log(selections);
    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});