function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

// function optionChanged(newSample) {
//   console.log(newSample);
// }

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");
      PANEL.html("");

    // using object.entries to automate demographics panel
    // Object.entries(result).forEach(([key, value]) => {
    //   PANEL.append("h6").text(`${key}: ${value}`);
    // }
    // )
    // for (const [key,value] of Object.entries(result)){
    //   PANEL.append(`${key}: ${value}`)
    // }
    // hard coding demographics panel 
    PANEL.append("h6").text("ID:  " + result.id);
    PANEL.append("h6").text("ETHNICITY:  " + result.ethnicity);
    PANEL.append("h6").text("GENDER:  " + result.gender);
    PANEL.append("h6").text("AGE:  " + result.age);
    PANEL.append("h6").text("LOCATION:  " + result.location);
    PANEL.append("h6").text("BBTYPE:  " + result.bbtype);
    PANEL.append("h6").text("WFREQ:  " + result.wfreq);
    
  });
}

// function init() {
//     data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16] }];
//     Plotly.newPlot("plot", data);
//   };
  
//   d3.selectAll("#dropdownMenu").on("change", updatePlotly);
//   function updatePlotly() {
//     var dropdownMenu = d3.select("#dropdownMenu");
//     var dataset = dropdownMenu.property("value");
  
//     var xData = [1, 2, 3, 4, 5];
//     var yData = [];
  
//     if (dataset === 'dataset1') {
//       yData = [1, 2, 4, 8, 16];
//     };
  
//     if (dataset === 'dataset2') {
//       yData = [1, 10, 100, 1000, 10000];
//     };
  
//     var trace = {
//       x: [xData],
//       y: [yData],
//     };
//     Plotly.restyle("plot", trace);
//   };
  
//   init();
