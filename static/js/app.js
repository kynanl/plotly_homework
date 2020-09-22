d3.json("./samples.json").then((importedData) => {
    let samples = importedData.samples;
    let sample = 940;
    console.log(samples);
    let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    console.log(resultArray);
    let result = resultArray[0];
    console.log(result)
    var otu_ids = result.otu_ids;
    console.log(otu_ids)
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;
    
});




// data = "../samples.json";
// console.log(data);

// d3.json("../plotly_homework/samples.json",  function(data) {
//     console.log(data);
// });

// ).then((data) => {
//     var samples = data.samples;
//     console.log(samples);
// });
//console.log(samples)