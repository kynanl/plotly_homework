let jsonData;
//connect to json data set
d3.json("./samples.json").then((importedData) => {
  jsonData = importedData
  let samples = importedData.samples;
  console.log(samples)
  //capture array of patient ids with variable names
  let names = importedData.names;
  console.log(names)
  //capture changes in patient id dropdown with variable samle
  let sample = names[0]
  //create variable with filtered results 
  let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
  console.log(resultArray);
  let result = resultArray;
  console.log(result)
  let ids = samples.map(d => d.id);
  console.log(ids)
  // var otu_ids = result.map(d => d.otu_ids);
  // console.log(otu_ids)
  // let otu_labels = result.map(d => d.otu_labels);
  // console.log(otu_labels);
  // let topTen = otu_labels.slice(0, 10);
  // console.log(topTen);
  // let sample_values = result.map(d => d.sample_values);
  // console.log(sample_values)
  let demoInfo = jsonData.metadata;
  console.log(demoInfo);
  //barPlot()
  subjectIds(names);
  //subjectDemo(demoInfo[0]);
  optionChanged(names[0])
});
//Create default bar chart
function barPlot(id) {
  let demoInfo = jsonData.samples.filter(sampleObj => sampleObj.id == id)[0];
  console.log(demoInfo);
  var otu_ids = demoInfo.otu_ids.map(d => `otu_id ${d}`);
  console.log(otu_ids)
  let otu_labels = demoInfo.otu_labels;
  console.log(otu_labels);
  // let topTen = otu_labels.slice(0, 10);
  // console.log(topTen);
  let sample_values = demoInfo.sample_values;
  console.log(sample_values)

  var trace1 = {
    y: otu_ids.slice(0, 10),
    x: sample_values.slice(0, 10),
    type: "bar",
    orientation: "h"
  };

  var data = [trace1];

  var layout = {
    title: "'Bar' Chart"
  };

  Plotly.newPlot("bar", data, layout);

}
//Create function for test subject dropdown
function subjectIds(ids) {
  let menu = d3.select("#selDataset");
  let option;
  for (let i = 0; i < 154; i++) {
    option = menu.append("option");
    option.append("option").text(ids[i]);

  }
}
//Create function for individual subject metadata
function subjectDemo(id) {
  let demoInfo = jsonData.metadata.filter(sampleObj => sampleObj.id == id)[0];
  let list = d3.select("#sample-metadata");
  list.html("")
  let textEntry = Object.entries(demoInfo).forEach(function ([key, value]) {
    list.append("p").text(`${key} : ${value}`)
  });
  for (let i = 0; i < id.length; i++) {
    person = list.append("p");
    person.append(textEntry)
  };
};

function optionChanged(id) {
  subjectDemo(id);
  barPlot(id)

}

//     function getData(person) {
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
//     // Initialize an empty array for the person's data
//     var personaldata = [];

//     if (dataset == '') {
//       personaldata = sample;
//     }
//     else if (dataset == 'uk') {
//       personaldata = uk;
//     }
//     else if (dataset == 'canada') {
//       data = canada;
//     }
//     // Call function to update the chart
//     updatePlotly(data);
//   }
