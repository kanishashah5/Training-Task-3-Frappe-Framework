frappe.pages['custom-page'].on_page_load = function(wrapper) {
	
	let page = frappe.ui.make_app_page({
		title: 'Custom Page',
		parent: wrapper ,// HTML DOM Element or jQuery object
		single_column: true // create a page without sidebar
	});

	page.set_title_sub('Subtitle');

page.set_indicator('Pending', 'orange');

// add a normal menu item
// page.add_menu_item('Send Email', () => open_email_dialog());

// add a standard menu item
page.add_menu_item('Send Email', () => open_email_dialog(), true);



// ----------------------------------------------------------------
$(page.main).append('<div id="chart-container"></div>');

// Fetch data from API and render chart
frappe.call({
	method: 'task_app.APIs.chart.get_chart_data',  // Adjust path if needed
	callback: function(response) {
		if (response.message) {
			render_chart(response.message);
		}
	}
});	
}

function render_chart(data) {
const chart = new frappe.Chart('#chart-container', {
	title: 'Age Distribution (≤45 vs >45)',
	data: data,
	type: 'bar',  // Bar chart
	height: 250,
	colors: ['#ff99cc'],  // Light pink color
	barOptions: {
		stacked: false
	},
	axisOptions: {
		xIsSeries: false
	}
});
}






