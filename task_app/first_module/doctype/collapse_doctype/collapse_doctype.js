// Copyright (c) 2025, Sanskar Technolab and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Collapse Doctype", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Collapse Doctype', {
    refresh: function (frm) {
        if (!frm.__remove_collapsible_button_added) {
            frm.add_custom_button('Remove Collapsible', function () {
                frappe.call({
                    method: 'frappe.client.get_list',
                    args: {
                        doctype: 'DocField',
                        filters: {
                            parent: frm.doctype,
                            fieldtype: 'Section Break' // Get all Section Break fields
                        },
                        fields: ['fieldname']
                    },
                    callback: function (response) {
                        if (response.message && response.message.length > 0) {
                            response.message.forEach(section => {
                                frappe.call({
                                    method: 'frappe.client.insert',
                                    args: {
                                        doc: {
                                            doctype: 'Property Setter',
                                            doc_type: frm.doctype,
                                            property: 'collapsible',
                                            value: '0',
                                            property_type: 'Int',
                                            apply_to: 'Field',
                                            field_name: section.fieldname // Apply collapsible to this field
                                        }
                                    },
                                    callback: function () {
                                        frappe.show_alert(__('Collapsible removed from section: ' + section.fieldname));
                                    }
                                });
                            });
                            frappe.msgprint(__('Collapsible removed from all sections. Please refresh to apply changes.'));
                        } else {
                            frappe.msgprint(__('No Section Break fields found.'));
                        }
                    }
                });
            });

            frm.__remove_collapsible_button_added = true;
        }
    }
});
