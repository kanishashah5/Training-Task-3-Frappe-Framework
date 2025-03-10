frappe.pages['demo-page'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'My Page',
		single_column: true
	});


	page.set_title("Demo Page");

	page.set_indicator('Done', 'green');

	// page.clear_indicator()

	let $btn = page.set_primary_action('New', () => frappe.msgprint("Clicked New"));

	let $btnOne = page.set_secondary_action('Refresh', () => frappe.msgprint("Clicked Refresh"));

	page.add_menu_item('Send Email', () => frappe.msgprint("Clicked Send Email"));

	page.add_menu_item('Customize', () => frappe.msgprint("Clicked Customize Button"));

	// page.clear_menu()

	page.add_action_item('Edit', () => frappe.msgprint("Clicked Edit Button"));

	page.add_action_item('Export', () => frappe.msgprint("Clicked Export Button"));

	page.add_action_item('Print', () => frappe.msgprint("Clicked Print Button"));

	page.add_action_item('Delete', () => frappe.msgprint("Clicked Delete Button"));

	// page.clear_actions_menu()

	let field_1 = page.add_field({
		label: 'First Name',
		fieldtype: 'Data',
		fieldname: 'f_name'
	});


	let field_2 = page.add_field({
		label: 'SurName',
		fieldtype: 'Data',
		fieldname: 'surname'
	});


	let field_3 = page.add_field({
		label: 'Email',
		fieldtype: 'Data',
		fieldname: 'email'
	});

	let field_4 = page.add_field({
		label: 'Status',
		fieldtype: 'Select',
		fieldname: 'status',
		options: [
			'Open',
			'Closed',
			'Cancelled'
		],
		change() {
			frappe.msgprint(field_4.get_value());
		}
	});

	page.add_inner_button('Get Form Values', () => {
		let values = page.get_form_values();
		console.log(values);
		frappe.msgprint(`First Name: ${values.f_name}, Surname: ${values.surname}, Email: ${values.email}, Status: ${values.status}`);
	});


	// add a dropdown button in a group
	page.add_inner_button('New Post', () => frappe.msgprint("Create New Post"), 'Make')


// page.clear_fields()

	// $(frappe.render_template("demo_page", {})).appendTo(page.body);

	$(frappe.render_template("demo_page", {
		data: "THIS IS DEMO PAGE !"
	})).appendTo(page.body);


	
}