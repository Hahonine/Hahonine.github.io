const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then();

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a).filter(c => c != null);
//     console.log(wfreq);
// });