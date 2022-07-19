var xValues = [0,2016,2017,2018,2019];
    
    new Chart("multi-line-chart", {
      type: "line",
      text:'Company Revenue',
      data: {
        labels: xValues,
        datasets: [{ 
          data: [0,35,45,80,85 ],
          pointRadius:0,
          borderColor: "#FB79D2",
          label:"Total Revenue",
          fill: false
        }, { 
          data: [0,50,65,70,78],
          pointRadius:0,
          borderColor: "#707BF8",
          label:"Marginal Revenue",
          fill: false
        }]
      },
      options: {  
    
        elements: {
        point: {
             borderColor: "rgb(0,0,0)",
           
         }
     },   
        legend: {display: false, position:'bottom', labels: { usePointStyle: true,
          pointStyle: 'line'
        }},
        scales: {
          yAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }   
          }]
      }
      }
    });