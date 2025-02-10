frappe.call({
    method: "frappe.client.get_list",
    args: {
        doctype: "DocType",
        fields: ["name"]
    },
    callback: function(response) {
        if (response.message) {
            response.message.forEach(doc => {
                frappe.model.on(doc.name, {
                    refresh: function(frm) {
                        if (frm.is_new()) { 
                            if (!frm.custom_remove_collapse_button) {
                                frm.custom_remove_collapse_button = frm.add_custom_button(
                                    __('Remove Collapsible Section'),
                                    function() {
                                        removeCollapsibleSection(frm);
                                    }
                                );

                                // Override button styling to remove red and make it grey
                                frm.custom_remove_collapse_button
                                    .removeClass("btn-danger") // Remove red color
                                    .addClass("btn-secondary"); // Apply grey color
                            }
                        } else {
                            if (frm.custom_remove_collapse_button) {
                                frm.custom_remove_collapse_button.remove();
                                frm.custom_remove_collapse_button = null;
                            }
                        }
                    }
                });
            });
        }
    }
});

function removeCollapsibleSection(frm) {
    $(".form-section .section-head.collapsible").removeClass("collapsible");
    $(".collapse-indicator").remove();
    $(".form-section").css("display", "block");

    let sections = Object.values(frm.fields_dict).filter(
        field => field.df.fieldtype === 'Section Break'
    );

    sections.forEach(section => {
        frappe.call({
            method: "frappe.client.insert",
            args: {
                doc: {
                    doctype: "Property Setter",
                    doc_type: frm.doctype,
                    field_name: section.df.fieldname,
                    property: "collapsible",
                    value: "0",
                    property_type: "Check",
                    doctype_or_field: "DocField"
                }
            },
            callback: function(response) {
                if (!response.exc) {
                    console.log(`Collapse permanently removed for: ${section.df.label}`);
                } else {
                    console.log(`Error removing collapse for: ${section.df.label}`);
                }
            }
        });
        $(`[data-fieldname='${section.df.fieldname}']`).css("display", "block").show();
    });

    frappe.msgprint("All sections are now expanded.");
}


