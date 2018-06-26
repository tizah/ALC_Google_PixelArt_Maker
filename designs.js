

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	console.log("makeGrid is running!")
	
	// Select size inpssssut
	
	var canvas, cell, gridHeight, gridWidth, rows;
	
	canvas = $('#pixel_canvas');
	//select the value from the height input
	gridHeight = $('#input_height').val();

	//select the value from the width input
	gridWidth = $('#input_width').val();
	
	//remove all the child elements from the pixcel_canvas id
	canvas.children().remove();
	//canvas.html("");
	
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	// When td is clicked by the user, change color of td
	cell.click(function() {
		// Select color input
		console.log("changeColor is running!");
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});

