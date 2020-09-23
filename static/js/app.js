d3.json("./samples.json").then((importedData) => {
    let samples = importedData.samples;
    let names = importedData.names;
    let sample = 940;
    console.log(names);
    let resultArray = samples.filter(sampleObj => sampleObj.id==sample);
    console.log(resultArray);
    let result = resultArray;
    console.log(result)
    let ids = samples.id;
    console.log(ids)
    var otu_ids = result.otu_ids;
    console.log(otu_ids)
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;
    subjectIds(names)
    demoInfo()
    
    function subjectIds(id) {
        let menu = d3.select("#selDataset");
        let option;
        for (let i = 0; i < 154; i++) {
          option = menu.append("option");
          option.append("option").text(names[i]);
       
        }
      }

    }
    function getData(person) {
        var dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.property("value");
        // Initialize an empty array for the person's data
        var personaldata = [];
      
        if (dataset == '') {
            personaldata = sample;
        }
        else if (dataset == 'uk') {
            personaldata = uk;
        }
        else if (dataset == 'canada') {
            data = canada;
        }
        // Call function to update the chart
        updatePlotly(data);
      }
});

