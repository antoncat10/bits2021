/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var chart = JSC.chart('chartDiv', {
  debug: true,
	annotations: [{
		label_text: "Source: Health.gov.au - Resources - As of 14 September 2021",
		position: 'bottom left'
	}],
  defaultSeries_type: 'column',
  toolbar_visible: false,
  defaultPoint_label_visible: true,
  title_label_text: 'Vaccinations across Australia of those aged 16 and over',
  legend_visible: false,
  yAxis_visible: false,
  xAxis_line_visible: true,
  series: [
    {
      defaultPoint_marker: {
        visible: true,
        size: 50
      },
      name: ' Total Vaccinations',
      points: [
        { name: 'ACT', y: 344037 },
        { name: 'NSW', y: 6565651 },
        { name: 'NT', y: 190571 },
				{ name: 'QLD', y: 4112707 },
				{ name: 'SA',  y: 1440400 },
				{ name: 'TAS', y: 440172 },
				{ name: 'VIC', y: 5407574 },
				{ name: 'WA', y: 2114978 }
      ]
    }
  ]
});

JSC.fetch("vaccination.csv")
  .then(response => response.text())
  .then(text => {
    //Use CSV text
  });

function renderChart(series){
	JSC.Chart('chartDiv', {
		title_label_text: 'Life Expectancy in the United States',
		annotations: [{
			label_text: 'Source: National Center for Health Statistics',
			position: 'bottom left'
		}],
		series: series
	});
}

// JS
var chart;
var data = [
  {
    country: 'VIC',
    percent: 74.21,
    population: 19627
  },
  {
    country: 'NSW',
    percent: 23.8,
    population: 6308
  },
  {
    country: 'ACT',
    percent: 1.7,
    population: 450
  },
  {
    country: 'NT',
    percent: 0.03,
    population: 8
  },
  {
    country: 'QLD',
    percent: 0.1,
    population: 34
  },
  {
    country: 'SA',
    percent: 0.02,
    population: 7
  },
  {
    country: 'TAS',
    percent: 0.003,
    population: 1
  },
  {
    country: 'WA',
    percent: 0.04,
    population: 13
  }
];

chart = renderChart(makeSeries(data));

function renderChart(series) {
  return JSC.chart('chartDiv2', {
    title_label_text:
      'Source: Health.gov.au - Resources - Updated 9pm October 13th 2021',
    debug: true,
    type: 'column solid',
    legend_visible: false,
    palette: ['#66ff99'],
    defaultPoint: {
      tooltip:
        '<b>%xValue</b> <br>Active Cases: <b>%yValue</b><br><b>%complete',
      complete: {
        fill: 'rgba(255,255,255,.3)',
        hatch_style: 'none'
      },
      label: {
        text: '%complete',
        align: 'center',
        verticalAlign: 'bottom',
        autoHide: false,
        style_fontSize: '15px'
      }
    },
    series: series
  });
}
function makeSeries(data) {
  return JSC.nest()
    .key('country')
    .pointRollup(function(key, val) {
      var values = val[0];
      return {
        x: key,
        y: values.population,
        complete: values.percent / 100
      };
    })
    .series(data);
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
