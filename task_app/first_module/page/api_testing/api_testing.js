frappe.pages['api-testing'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'API Testing',
		single_column: true
	});
	
		let $container = $(`
			<div>
				<button id="get-data" class="btn btn-primary">Fetch Data</button>
				<button id="post-data" class="btn btn-success">Create Data</button>
				<button id="update-data" class="btn btn-warning">Update Data</button>
				<button id="delete-data" class="btn btn-danger">Delete Data</button>
				<pre id="response-box"></pre>
			</div>
		`).appendTo($(wrapper).find('.layout-main-section'));
	
// ---------------GET--------------- 
		$('#get-data').on('click', function() {
			fetch('/api/resource/Person/Person-01', {
				method: 'GET',
				headers: {
					'Authorization': 'token 36c9dac3d1497d8:138036820dd9c82',
					'Content-Type': 'application/json'
				}
			})
			.then(response => response.json())
			.then(data => $('#response-box').text(JSON.stringify(data, null, 2)))
			.catch(error => $('#response-box').text("Error: " + error));
		});
	
// ---------------POST--------------- 
		
		$('#post-data').on('click', function() {
			fetch('/api/resource/Person', {
				method: 'POST',
				headers: {
					'Authorization': 'token 36c9dac3d1497d8:138036820dd9c82',					
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"name" : "Person-JS1",
					"f_name": "John",
					"surname": "Doe"
				}),
				credentials: "omit"
			})
			.then(response => response.json())
			.then(data => $('#response-box').text(JSON.stringify(data, null, 2)))
			.catch(error => $('#response-box').text("Error: " + error));
		});
	
// ---------------UPDATE--------------- 
		
		$('#update-data').on('click', function() {
			fetch('/api/resource/Person/Person-JS1', {
				method: 'PUT',
				headers: {
					'Authorization': 'token 36c9dac3d1497d8:138036820dd9c82',					
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"f_name": "Johnson"
				}),
				credentials: "omit"
			})
			
			.then(response => response.json())
			.then(data => $('#response-box').text(JSON.stringify(data, null, 2)))
			.catch(error => $('#response-box').text("Error: " + error));
		});
	
// ---------------DELETE--------------- 
	
		$('#delete-data').on('click', function() {
			fetch('/api/resource/Person/Person-JS1', {
				method: 'DELETE',
				headers: {
					'Authorization': 'token 36c9dac3d1497d8:138036820dd9c82',					
					'Content-Type': 'application/json'
				},
				credentials: "omit"

			})
			.then(response => response.json())
			.then(data => $('#response-box').text(JSON.stringify(data, null, 2)))
			.catch(error => $('#response-box').text("Error: " + error));
		});
	};
	
