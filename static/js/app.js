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
  let demoInfo = jsonData.metadata;
  console.log(demoInfo);
  
  subjectIds(names);
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
  let sample_values = demoInfo.sample_values;
  console.log(sample_values);


  var trace1 = {
    y: otu_ids.slice(0, 10),
    x: sample_values.slice(0, 10).reverse(),
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
//create function for bubblechart
function bubble(id) {
  let demoInfo = jsonData.samples.filter(sampleObj => sampleObj.id == id)[0];
  test = demoInfo.otu_ids;
  console.log(demoInfo);
  let otu_ids = demoInfo.otu_ids;
  let otu_labels = demoInfo.otu_labels;
  let sample_values = demoInfo.sample_values;
  var bubbleLayout = {
    title: "Bacteria Cultures Per Sample",
    margin: { t: 0 },
    hovermode: "closest",
    xaxis: { title: "OTU ID" },
    margin: { t: 30 }
  };
  var trace1 = {
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {
      color: otu_ids,
      colorscale: "Earth",
      size: sample_values
    }
  };

  var data = [trace1];

  var layout = {
    title: 'Belly Button Bubble Chart',
    showlegend: false,
  };

  Plotly.newPlot("bubble", data, layout);

};
//create function for gague

function gauge(id) {
  let demoInfo = jsonData.metadata.filter(sampleObj => sampleObj.id == id)[0];
  let moonValue = demoInfo.wfreq;
  console.log(moonValue);
  let gaugeLayout = [{
    domain: { x: [0, 9], y: [0, 9] },
    value: moonValue,
    title: { text: "Belly Button Washing Frequency: Scrubs Per Week" },
    type: "indicator",
    mode: "gauge+number",
    text: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9" ],
    gauge: {
      axis: { 'range': [0, 9] },
      'steps': [
        { 'range': [0, 2], 'color': "chartreuse"},
        { 'range': [1, 3], 'color': "chartreuse" },
        { 'range': [2, 4], 'color': "chartreuse"},
        { 'range': [3, 5], 'color': "chartreuse" },
        { 'range': [4, 6], 'color': "chartreuse" },
        { 'range': [5, 7], 'color': "chartreuse" },
        { 'range': [6, 8], 'color': "chartreuse" },
        { 'range': [7, 9], 'color': "chartreuse" },
        { 'range': [8, 10], 'color': "chartreuse" },
      ],
    },

  }];
  let layout3 = { width: 600, height: 500, margin: { t: 0, b: 0 } };
  Plotly.newPlot("gauge", gaugeLayout, layout3);
};

//run function embedded in the html
function optionChanged(id) {
  subjectDemo(id);
  barPlot(id);
  bubble(id);
  gauge(id);
}
//init();