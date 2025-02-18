frappe.ready(function() {
    setTimeout(() => {
        if (typeof frappe.web_form !== "undefined") {
            console.log("Web Form Loaded:", frappe.web_form);

            frappe.web_form.on('render', function() {
                frappe.msgprint('Please fill all values carefully');
            });
        } else {
            console.error("frappe.web_form is not available.");
        }
    }, 1000); // 1-second delay
});
