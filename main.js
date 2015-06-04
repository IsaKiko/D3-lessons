// Load the data.
d3.json("nations.json", function(nations) {


	// Create the SVG container inside chart element.
	var chart_area = d3.select("#chart_area");
	var svg = chart_area.append("svg");


	// Set margins, width, and height.
	var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
	var svg_width = 960;
	var svg_height = 350;
	var chart_width = svg_width - margin.left - margin.right;
	var chart_height = svg_height - margin.top - margin.bottom;

	// innerHeight and innerWidth are how much axes will be shifted in so there is


	// Set svg attributes width and height.
	svg.attr("width", svg_width);
	svg.attr("height", svg_height);


	// Create chart inside svg element.
	var chart = svg.append("g");


	// Shift the chart and make it slightly smaller than the svg canvas.
	chart.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	// Various scales. These domains make assumptions of data, naturally.
	var xScale = d3.scale.log(); // income
	xScale.domain([300, 1e5]);
	xScale.range([0, chart_width]);  

    
    // d3 has a subobject called scale. within scale, there are a number of functions to create scales.
    // e.g. log, linear, sqrt, category10 (e.g. 10 different colours)... 
    // we set the domain based on our data - min and max of the data
    // we set the range - range on the page
    // domain, range, log scale all determing data values are mapped to graph positions.

    var yScale = d3.scale.linear().domain([10, 85]).range([chart_height, 0]);  // life expectancy

    // an alternative notation that d3 offers is to chain everything together using the dot-syntax 
    // (you'll see this a lot). The order is mostly arbitrary. 


	// Creating the x & y axes.
	var xAxis = d3.svg.axis().orient("bottom").scale(xScale);
    var yAxis = d3.svg.axis().scale(yScale).orient("left");


    // Next step: push the axes into the chart


	// Add the x-axis.
	chart.append("g")
	.attr("class", "x axis")
    .attr("transform", "translate(0," + chart_height + ")")
    .call(xAxis);

    // .call is the bit where the properties we just set are pushed to the object
    // attribures are added to make it look pretty (class is used in the css file)


	// Add the y-axis.
	chart.append("g")
    .attr("class", "y axis")
    .call(yAxis);




});