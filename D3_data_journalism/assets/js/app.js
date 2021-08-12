d3.csv("assets/data/data.csv").then(function(dataList) {
    console.log(dataList);
    povertyList = dataList.map(dataElement => dataElement.poverty);
    healthcareList = dataList.map(dataElement => dataElement.healthcare);
    stateAbbrevList = dataList.map(dataElement => dataElement.abbr);

    var trace1 = {
        x: povertyList,
        y: healthcareList,
        mode: 'markers+text',
        type: 'scatter',
        name: 'Healthcare vs Poverty',
        text: stateAbbrevList,
        textposition: 'center',
        textfont: {
            family:  'Raleway, sans-serif'
        },
        marker: { size: 25 }
    };

    var layout = {
        xaxis: {
          title: 'Poverty',
          autotick: true,
          showline: true,
          ticks: 'outside',
          dtick: 0.25,
          ticklen: 8,
          tickwidth: 1,
          tickcolor: '#000'
        },
        yaxis: {
          title: 'Healthcare',
          autotick: true,
          showline: true,
          ticks: 'outside',
          //tick0: 0,
          dtick: 0.25,
          ticklen: 6,
          tickwidth: 1,
          tickcolor: '#000'
        }
      };

    var data = [trace1];
    
    Plotly.newPlot('scatter', data, layout);
});