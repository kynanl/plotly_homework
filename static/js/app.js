
//connect to json data set
d3.json("./samples.json").then((importedData) => {
  let samples = importedData.samples;
  //capture array of patient ids with variable names
  let names = importedData.names;
  console.log(names)
  //capture changes in patient id dropdown with variable samle
  let sample = names[0]
  //d3.select("#selDataset").property("value");
  let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
  console.log(resultArray);
  let result = resultArray;
  console.log(result)
  let ids = samples.id;
  console.log(ids)
  var otu_ids = result.otu_ids;
  console.log(otu_ids)
  let otu_labels = result.otu_labels;
  let sample_values = result.sample_values;
  let demoInfo = importedData.metadata;
  console.log(demoInfo);

  subjectIds(names);
  subjectDemo(demoInfo[0]);

  function subjectIds(id) {
    let menu = d3.select("#selDataset");
    let option;
    for (let i = 0; i < 154; i++) {
      option = menu.append("option");
      option.append("option").text(names[i]);

    }
  }
  function subjectDemo(id) {
    let list = d3.select("#sample-metadata");
    let textEntry = Object.entries(id).forEach(function ([key, value]) {
      list.append("p").text(`${key} : ${value}`)
      });
    for (let i = 0; i < id.length; i++) {
      person = list.append("p");
      person.append(textEntry)
    };
  };

  // function subjectDemo(id) {
  //   let list = d3.select("#sample-metadata")
  //   let person;
  //   for (let i = 0; i < id.length; i++) {
  //     person = list.append("p");
  //     person.append("p").text(id);
  //   }
  //   person = list.append("p");
  //   person.append("p").text(id)

  // }

});
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
// });

