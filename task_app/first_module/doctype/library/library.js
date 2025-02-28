// Copyright (c) 2025, Sanskar Technolab and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Library", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on("Library", {
    refresh: function(frm) {
        frm.add_custom_button('Multi Select From Child', function() {
            new frappe.ui.form.MultiSelectDialog({
                doctype: "Articles", 
                target: frm.wrapper,
                setters: {
                    status: 'Available' 
                },
                add_filters_group: 1,
                get_query() {
                    return {
                        filters: {
                            status: "Available" 
                        }
                    };
                },
                action(selections) { 
                    console.log("Selected Articles:", selections); 

                    selections.forEach(function(article_id) {
                      
                        frappe.db.get_doc("Articles", article_id).then(article => {
                            let row = frm.add_child("articles_list"); 
                            // row.article = article.name; 
                            row.title = article.title;
                            row.author = article.author;
                            row.publication_date = article.publication_date;
                            row.status = article.status;

                            frm.refresh_field("articles_list");
                        });
                    });
                }
            });
        });
    }
});




