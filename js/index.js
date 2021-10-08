var chart = JSC.chart('chartDiv', {
  debug: true,
	annotations: [{
		label_text: "Source: Health.gov.au - Resources - 2014 September 2021",
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
	JSC.Chart('chartDiv2', {
		title_label_text: 'Life Expectancy in the United States',
		annotations: [{
			label_text: 'Source: National Center for Health Statistics',
			position: 'bottom left'
		}],
		series: series
	});
}
